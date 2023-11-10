import { TMHLocation } from 'API';
import TMHTooltip from 'components/TMHTooltip/TMHTooltip';
import styles from './LocationsModal.module.scss';
export default function LocationsModalYouth({
  newLocData,
  setLocData,
}: {
  newLocData: TMHLocation | null;
  setLocData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocData(
      (prev) =>
        ({
          ...prev,
          youth: {
            __typename: 'TMHYouth',
            ...(prev?.youth ?? {}),
            [e.target.name]: e.target.value,
          },
        } as TMHLocation)
    );
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocData(
      (prev) =>
        ({
          ...prev,
          youth: {
            __typename: 'TMHYouth',
            ...(prev?.youth ?? {}),
            location: {
              __typename: 'TMHLocation',
              ...(prev?.youth?.location ?? {}),
              [e.target.name]: e.target.value,
            },
          },
        } as TMHLocation)
    );
  };
  const handleChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocData(
      (prev) =>
        ({
          ...prev,
          youth: {
            __typename: 'TMHYouth',
            ...(prev?.youth ?? {}),
            contact: {
              __typename: 'TMHLocationContact',
              ...(prev?.youth?.contact ?? {}),
              [e.target.name]: e.target.value,
            },
          },
        } as TMHLocation)
    );
  };
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: '#F7F7F7',
        borderRadius: 4,
        border: '1px solid #E0E0E0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <span className={styles['LocationsModalHeader']}>
          Youth Information
        </span>

        <span className={styles['LocationsModalSubHeader']}>
          Enter youth location information
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
          columnGap: 16,
        }}
      >
        <div
          style={{
            flex: 1,
            rowGap: 16,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Description{' '}
              <TMHTooltip tooltipText={'Previously known as "age"'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Youth description
            </span>

            <input
              onChange={handleChange}
              placeholder="Youth | Grades 6 – 12"
              name="description"
              value={newLocData?.youth?.description ?? ''}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Facebook
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Link to facebook page
            </span>

            <input
              placeholder="https://www.facebook.com/bramptonyouth.tmh/"
              onChange={handleChange}
              name="facebookLink"
              value={newLocData?.youth?.facebookLink ?? ''}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Name
              <TMHTooltip tooltipText={'Set the name for the location'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <input
              onChange={handleChangeLocation}
              placeholder="Immanuel CRC Church"
              name="name"
              value={newLocData?.youth?.location?.name?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Latitude
              <TMHTooltip tooltipText={'Set the name for the location'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              This is needed in order to display the location on the map
            </span>
            <input
              onChange={handleChangeLocation}
              placeholder="43.5111777"
              name="latitude"
              value={newLocData?.youth?.location?.latitude?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Contact Email
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Set the youth contact email
            </span>
            <input
              onChange={handleChangeContact}
              placeholder="brad.eager@themeetinghouse.com"
              name="email"
              value={newLocData?.youth?.contact?.email?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Contact Phone
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Set the youth contact phone number
            </span>
            <input
              onChange={handleChangeContact}
              placeholder="905.456.7890"
              name="phone"
              value={newLocData?.youth?.contact?.phone?.toString()}
              type="text"
            />
          </label>
        </div>
        <div
          style={{
            flex: 1,
            rowGap: 16,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Instagram
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Link to instagram page
            </span>

            <input
              onChange={handleChange}
              name="instagramLink"
              placeholder='i.e. "https://www.instagram.com/bramptonyouth.tmh/"'
              value={newLocData?.youth?.instagramLink ?? ''}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Meeting Time
              <TMHTooltip tooltipText={'Set the time for meeting'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Set the time for the meeting
            </span>

            <input
              onChange={handleChange}
              placeholder="Wednesdays | 7:00 – 9:00 pm"
              name="time"
              value={newLocData?.youth?.time?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Address
              <TMHTooltip tooltipText={'2700 Bristol Cir'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <input
              onChange={handleChangeLocation}
              placeholder="2626 Mayfield Road, Caledon"
              name="address1"
              value={newLocData?.youth?.location?.address1?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Longitude
              <TMHTooltip tooltipText={'Set the name for the location'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              This is needed in order to display the location on the map
            </span>
            <input
              onChange={handleChangeLocation}
              placeholder="-79.687309"
              name="longitude"
              value={newLocData?.youth?.location?.longitude?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Link
              <TMHTooltip tooltipText={'Previously googleMapLink'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Set the location link.. url to google maps
            </span>

            <input
              onChange={handleChangeLocation}
              placeholder="https://www.google.com/maps/place/2700+Bristol+Cir,+Oakville,+ON+L6H+6E1/@43.5111777,-79.687309,17z/data=!3m1!4b1!4m5!3m4!1s0x882b43061295ed3d:0x6c6d4c16d7ec8f0e!8m2!3d43.5111738!4d-79.685115"
              name="url"
              value={newLocData?.youth?.location?.url?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Contact Name
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Set the youth contact name
            </span>
            <input
              onChange={handleChangeContact}
              placeholder="Brad Eager – Youth Pastor"
              name="name"
              value={newLocData?.youth?.contact?.name?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Contact Phone Extension
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>Optional</span>
            <input
              onChange={handleChangeContact}
              placeholder="704"
              name="extension"
              value={newLocData?.youth?.contact?.extension?.toString()}
              type="text"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
