import { TMHLocation } from 'API';
import TMHTooltip from 'components/TMHTooltip/TMHTooltip';
import styles from './LocationsModal.module.scss';
export default function LocationsModalGeneral({
  handleChange,
  newLocData,
  editMode,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newLocData: TMHLocation | null;
  editMode: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 16,
        paddingBottom: 36,
        backgroundColor: '#F7F7F7',
        borderRadius: 4,
        border: '1px solid #E0E0E0',
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
          Location Information
        </span>

        <span className={styles['LocationsModalSubHeader']}>
          Enter the location information
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
              Name*
              <TMHTooltip tooltipText={'Enter the location name'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter the location name
            </span>

            <input
              onChange={handleChange}
              placeholder="i.e. Oakville"
              name={'name'}
              value={newLocData?.name}
              type="text"
            />
          </label>

          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Region Short Name
              <TMHTooltip tooltipText={'i.e. Oakville'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter the region short name
            </span>

            <input
              onChange={handleChange}
              placeholder="i.e. Oakville"
              name="regionShortName"
              value={newLocData?.regionShortName as string}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Abbreviation
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              i.e. OAKV, OTTA, SAND
            </span>

            <input
              onChange={handleChange}
              placeholder="i.e. OAKV"
              name="abbreviation"
              value={newLocData?.abbreviation as string}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Location Address Name
              <TMHTooltip tooltipText={'Enter the address location name'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter the location address name
            </span>

            <input
              onChange={handleChange}
              placeholder="i.e. Gibson Centre, 63 Tupper Street West"
              name={'location.name'}
              value={newLocData?.location?.name?.toString()}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Show In Location List
              <input
                onChange={handleChange}
                className={styles['LocationsModalCheckbox']}
                name="showInLocationList"
                checked={Boolean(newLocData?.showInLocationList)}
                type="checkbox"
              />
            </div>
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
              ID*
              <TMHTooltip tooltipText={'Enter the ID'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter the location ID
            </span>

            <input
              disabled={editMode}
              placeholder='i.e. "oakville"'
              onChange={handleChange}
              name="id"
              value={newLocData?.id}
              type="text"
            />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Region
              <TMHTooltip tooltipText={'i.e. Peele'}>
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Enter the region
            </span>

            <input
              name="region"
              placeholder='i.e. "Peele"'
              onChange={handleChange}
              value={newLocData?.region as string}
              type="text"
            />
          </label>

          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Home Church Group ID
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              Location Identifier for F1 home churches
            </span>

            <input
              onChange={handleChange}
              placeholder="i.e. 123456"
              name="homeChurchGroupID"
              value={newLocData?.homeChurchGroupID as string}
              type="text"
            />
          </label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <label style={{ paddingRight: 8 }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                Location Latitude
                <TMHTooltip tooltipText={'Enter the location latitude'}>
                  <span style={{ marginLeft: 4 }}>ⓘ</span>
                </TMHTooltip>
              </div>
              <span style={{ fontSize: 9, fontWeight: 400 }}>
                Enter the location latitude
              </span>

              <input
                onChange={handleChange}
                placeholder="i.e. 44.44"
                name={'location.latitude'}
                value={newLocData?.location?.latitude?.toString()}
                type="text"
              />
            </label>
            <label>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                Location Longitude
                <TMHTooltip tooltipText={'Enter the location longitude'}>
                  <span style={{ marginLeft: 4 }}>ⓘ</span>
                </TMHTooltip>
              </div>
              <span style={{ fontSize: 9, fontWeight: 400 }}>
                Enter the location longitude
              </span>

              <input
                onChange={handleChange}
                placeholder="i.e. 47.49123"
                name={'location.longitude'}
                value={newLocData?.location?.longitude?.toString()}
                type="text"
              />
            </label>
          </div>
          <label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Show In Location Map
              <input
                onChange={handleChange}
                className={styles['LocationsModalCheckbox']}
                name="showInLocationMap"
                checked={Boolean(newLocData?.showInLocationMap)}
                type="checkbox"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
