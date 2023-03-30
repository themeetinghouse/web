import { TMHLocation, TMHLocationMeeting } from 'API';
import TMHTooltip from 'components/TMHTooltip/TMHTooltip';
import { useState } from 'react';
import Select from 'react-select';
import LocationsTMHButton from './LocationsTMHButton';
import styles from './LocationsModalMeetings.module.scss';
type NewMeetingData = {
  date?: string;
  startTime?: string;
  endTime?: string;
  name?: string;
  description?: string;
  frequency?: string;
};

function CreateNewMeeting({
  setLocData,
  setNewMeeting,
}: {
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
  setNewMeeting: any;
}) {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [newMeetingData, setNewMeetingData] = useState<NewMeetingData>({
    date: '',
    startTime: '',
    endTime: '',
    name: '',
    description: '',
    frequency: '',
  });
  const validateMeeting = () => {
    const errors = [];
    if (
      newMeetingData?.date &&
      newMeetingData?.startTime &&
      newMeetingData?.endTime &&
      newMeetingData?.frequency
    ) {
      return true;
    }
    if (!newMeetingData?.date) {
      errors.push('Please enter a date');
    }
    if (!newMeetingData?.startTime) {
      errors.push('Please enter a start time');
    }
    if (!newMeetingData?.endTime) {
      errors.push('Please enter an end time');
    }
    if (!newMeetingData?.frequency) {
      errors.push('Please enter a frequency');
    }
    setErrorMessages(errors);
    return false;
  };
  const handleCreateMeeting = () => {
    const isValidated = validateMeeting();
    if (!isValidated) return;
    setLocData(
      (prev) =>
        ({
          ...prev,
          meetings: [
            ...(prev?.meetings ?? []),
            newMeetingData as TMHLocationMeeting,
          ],
        } as TMHLocation)
    );

    setNewMeeting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessages([]);
    const { name, value } = e.target;

    const temp = { ...newMeetingData };
    temp[name as keyof NewMeetingData] = value;
    setNewMeetingData(temp);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 16,
        backgroundColor: '#F7F7F7',
        borderRadius: 4,
        border: '1px solid #E0E0E0',
        rowGap: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span className={styles['LocationsModalCreateNewHeader']}>
          Create a new meeting time for this location
        </span>
        <span className={styles['LocationsModalCreateNewSubHeader']}>
          Meeting times created for this location will be displayed on the
          location page and will be used for the add to calendar button.
        </span>
      </div>
      <label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          Name
          <TMHTooltip tooltipText={'i.e. Sunday Teaching, Wednesday Teaching'}>
            <span style={{ marginLeft: 4 }}>ⓘ</span>
          </TMHTooltip>
        </div>
        <span style={{ fontSize: 9, fontWeight: 400 }}>Meeting Name</span>

        <input
          onChange={handleChange}
          name="name"
          placeholder="Sunday Teaching, Wednesday Prayer"
          value={newMeetingData?.name?.toString()}
          type="text"
        />
      </label>
      <label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          Description
          <TMHTooltip tooltipText={'i.e. We meet every week'}>
            <span style={{ marginLeft: 4 }}>ⓘ</span>
          </TMHTooltip>
        </div>
        <span style={{ fontSize: 9, fontWeight: 400 }}></span>

        <input
          onChange={handleChange}
          placeholder="Every Sunday at 10AM"
          name="description"
          value={newMeetingData?.description?.toString()}
          type="text"
        />
      </label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: 20,
        }}
      >
        <label style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Date
            <TMHTooltip
              tooltipText={
                'If the meeting occurs on Sundays, set the date to the next meeting date. If today is 2023-03-13 then the date here should be 2023-03-19. Future dates will be automatically calculated based on the frequency you set here.'
              }
            >
              <span style={{ marginLeft: 4 }}>ⓘ</span>
            </TMHTooltip>
          </div>
          <span style={{ fontSize: 9, fontWeight: 400 }}>
            Date the next meeting occurs
          </span>

          <input
            onChange={handleChange}
            name="date"
            value={newMeetingData?.date?.toString()}
            type="date"
          />
        </label>
        <label style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Frequency
            <TMHTooltip
              tooltipText={
                'Weekly will display "Every week on sundays at time", anything else will display the next meeting date'
              }
            >
              <span style={{ marginLeft: 4 }}>ⓘ</span>
            </TMHTooltip>
          </div>
          <span style={{ fontSize: 9, fontWeight: 400 }}>
            Weekly, Biweekly, Monthly
          </span>

          <Select
            value={{
              label: newMeetingData.frequency,
              value: newMeetingData.frequency,
            }}
            onChange={(item) => {
              if (item) {
                const temp = { ...newMeetingData };
                temp.frequency = item.value;
                setNewMeetingData(temp);
              }
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: 0,
                marginTop: 4,
                borderRadius: 0,
              }),
              placeholder: (styles) => {
                return {
                  ...styles,
                  color: '#484848',
                };
              },
              menuPortal: (styles) => ({
                ...styles,
                zIndex: 999,
                backgroundColor: 'red',
              }), //  >= dialog's z-index
            }}
            aria-label="meeting frequency"
            placeholder="How often does this meeting occur?"
            classNamePrefix="react-select-custom"
            options={[
              { label: 'WEEKLY', value: 'WEEKLY' },
              { label: 'BIWEEKLY', value: 'BIWEEKLY' },
              { label: 'MONTHLY', value: 'MONTHLY' },
            ].map((item) => {
              return { label: item.label, value: item.value };
            })}
          />
        </label>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: 20,
        }}
      >
        <label style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Start Time
          </div>
          <span style={{ fontSize: 9, fontWeight: 400 }}>
            Time the meeting starts
          </span>

          <input
            onChange={handleChange}
            name="startTime"
            value={newMeetingData?.startTime?.toString()}
            type="time"
            required
          />
        </label>
        <label style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>End Time</div>
          <span style={{ fontSize: 9, fontWeight: 400 }}>
            Time the meeting ends
          </span>

          <input
            onChange={handleChange}
            name="endTime"
            value={newMeetingData?.endTime?.toString()}
            type="time"
            required
          />
        </label>
      </div>

      {errorMessages.map((error) => (
        <div
          key={error}
          style={{
            color: 'tomato',
          }}
        >
          {error}
        </div>
      ))}

      <div className={styles['ButtonContainer']}>
        <LocationsTMHButton style={{ flex: 1 }} onClick={handleCreateMeeting}>
          Create
        </LocationsTMHButton>
        <LocationsTMHButton
          style={{ flex: 1 }}
          onClick={() => setNewMeeting(false)}
          outline
        >
          Back
        </LocationsTMHButton>
      </div>
    </div>
  );
}

export default function LocationsModalMeetings({
  newLocData,
  setLocData,
}: {
  newLocData: TMHLocation | null;
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
}) {
  const [newMeeting, setNewMeeting] = useState(false);
  const handleUpdateMeetingFreq = (item: any, index: number) => {
    if (item) {
      setLocData(
        (prev) =>
          ({
            ...prev,
            meetings: [
              ...(prev?.meetings ?? []).map((meeting, i) => {
                if (i === index) {
                  return {
                    ...meeting,
                    frequency: item.value,
                  };
                }
                return meeting;
              }),
            ],
          } as TMHLocation)
      );
    }
  };
  const handleUpdateMeeting = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldName = e.target.name as keyof TMHLocationMeeting;
    setLocData(
      (prev) =>
        ({
          ...prev,
          meetings: [
            ...(prev?.meetings ?? []).map((meeting, i) => {
              if (i === index) {
                return {
                  ...meeting,
                  [fieldName]: e.target.value,
                };
              }
              return meeting;
            }),
          ],
        } as TMHLocation)
    );
  };
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {newMeeting ? (
        <CreateNewMeeting
          setLocData={setLocData}
          setNewMeeting={setNewMeeting}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: 16,
            backgroundColor: '#F7F7F7',
            borderRadius: 4,
            border: '1px solid #E0E0E0',
          }}
        >
          <span style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <span className={styles['LocationsModalCreateNewHeader']}>
                Meeting times
              </span>

              <span className={styles['LocationsModalCreateNewSubHeader']}>
                Meeting times created for this location will be displayed on the
                location page and will be used for the add to calendar button.
              </span>
            </div>
            <div
              style={{
                flex: 0.5,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}
            >
              <LocationsTMHButton onClick={() => setNewMeeting(true)} link>
                Create a meeting time
              </LocationsTMHButton>
            </div>
          </span>
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              columnGap: 16,
              rowGap: 16,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            {newLocData?.meetings?.length ? (
              newLocData?.meetings?.map((meeting, index: number) => (
                <div
                  key={meeting?.date?.toString()}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',

                    flexWrap: 'wrap',
                    columnGap: 8,
                    rowGap: 20,
                    width: 'calc(50% - 10px)',
                    backgroundColor: 'white',
                    border: '1px solid #E5E5E5',
                    padding: 16,
                    borderRadius: 4,
                  }}
                >
                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <span
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          display: 'flex',
                        }}
                      >
                        Name{' '}
                        <TMHTooltip
                          tooltipText={
                            'i.e. Sunday Teaching, Wednesday Teaching'
                          }
                        >
                          <span style={{ marginLeft: 4 }}>ⓘ</span>
                        </TMHTooltip>
                      </span>

                      <LocationsTMHButton
                        style={{
                          padding: 0,
                          alignSelf: 'flex-end',
                          color: 'tomato',
                        }}
                        link
                        onClick={() =>
                          setLocData({
                            ...newLocData,
                            meetings: newLocData?.meetings?.filter(
                              (item, i) => i !== index
                            ),
                          })
                        }
                      >
                        Delete
                      </LocationsTMHButton>
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}>
                      Meeting Name
                    </span>

                    <input
                      onChange={(e) => handleUpdateMeeting(e, index)}
                      name="name"
                      value={meeting?.name}
                      placeholder="Sunday Teaching, Wednesday Prayer, etc."
                      type="text"
                    />
                  </label>
                  <label style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      Description
                      <TMHTooltip tooltipText={'i.e. We meet every week'}>
                        <span style={{ marginLeft: 4 }}>ⓘ</span>
                      </TMHTooltip>
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 400 }}></span>

                    <input
                      onChange={(e) => handleUpdateMeeting(e, index)}
                      placeholder="Every Sunday at 10AM"
                      name="description"
                      value={meeting?.description?.toString()}
                      type="text"
                    />
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      columnGap: 20,
                      flexWrap: 'wrap',
                      flex: 1,
                      width: '100%',
                      rowGap: 20,
                    }}
                  >
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Date
                        <TMHTooltip
                          tooltipText={
                            'If the meeting occurs on Sundays, set the date to the next meeting date. If today is 2023-03-13 then the date here should be 2023-03-19. Future dates will be automatically calculated based on the frequency you set here.'
                          }
                        >
                          <span style={{ marginLeft: 4 }}>ⓘ</span>
                        </TMHTooltip>
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Date the meeting occurs
                      </span>

                      <input
                        onChange={(e) => handleUpdateMeeting(e, index)}
                        name="date"
                        required
                        value={meeting?.date}
                        type="date"
                      />
                    </label>
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Frequency
                        <TMHTooltip tooltipText={'i.e. Weekly, Monthly...'}>
                          <span style={{ marginLeft: 4 }}>ⓘ</span>
                        </TMHTooltip>
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        i.e. Weekly, Monthly, etc.
                      </span>

                      <Select
                        value={{
                          label: meeting?.frequency,
                          value: meeting?.frequency,
                        }}
                        onChange={(item) =>
                          handleUpdateMeetingFreq(item, index)
                        }
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: 0,
                            marginTop: 4,
                            borderRadius: 0,
                          }),
                          placeholder: (styles) => {
                            return {
                              ...styles,
                              color: '#484848',
                            };
                          },
                          menuPortal: (styles) => ({
                            ...styles,
                            zIndex: 999,
                            backgroundColor: 'red',
                          }), //  >= dialog's z-index
                        }}
                        aria-label="meeting frequency"
                        placeholder="How often does this meeting occur?"
                        classNamePrefix="react-select-custom"
                        options={[
                          { label: 'WEEKLY', value: 'WEEKLY' },
                          { label: 'BIWEEKLY', value: 'BIWEEKLY' },
                          { label: 'MONTHLY', value: 'MONTHLY' },
                        ].map((item) => {
                          return { label: item.label, value: item.value };
                        })}
                      />
                    </label>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      columnGap: 20,
                      flexWrap: 'wrap',
                      flex: 1,
                      width: '100%',
                      rowGap: 20,
                    }}
                  >
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        Start Time
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Time the meeting starts
                      </span>

                      <input
                        onChange={(e) => handleUpdateMeeting(e, index)}
                        name="startTime"
                        value={meeting?.startTime}
                        type="time"
                        required
                      />
                    </label>
                    <label style={{ width: '100%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        End Time
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 400 }}>
                        Time the meeting ends
                      </span>

                      <input
                        onChange={(e) => handleUpdateMeeting(e, index)}
                        name="endTime"
                        value={meeting?.endTime}
                        type="time"
                        required
                      />
                    </label>
                  </div>
                </div>
              ))
            ) : (
              <small>There are no meeting times added for this location</small>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
