import { useState } from 'react';
import { Spinner } from 'reactstrap';
import styles from './CompassionPartnersPage.module.scss';
import useCompassionPartners from './useCompassionPartners';
import {
  CompassionEditPartnersModal,
  CompassionCreatePartnersModal,
} from './CompassionPartnersModal';
import { TMHCompassion } from 'API';
import Select from 'react-select';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import FadeImage from 'components/ScaledImage/FadeImage';

export default function CompassionPartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<TMHCompassion | null>(
    null
  );
  const [createParner, setCreatePartner] = useState<boolean>(false);
  const {
    partners,
    isLoading,
    setPartners,
    locations,
    selectedLocation,
    setSelectedLocation,
    isLocationManager,
    error,
  } = useCompassionPartners();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items you want per page

  // Calculate the currently displayed items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = partners.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  console.log({ selectedLocation });
  return (
    <div className={styles.CompassionPartnersPageWrapper}>
      {error ? (
        <>
          <h1>Compassion Partners Page</h1>
          <span>{error}</span>
        </>
      ) : (
        <>
          <CompassionEditPartnersModal
            isLocationManager={isLocationManager}
            setPartners={setPartners}
            locations={locations}
            selectedPartner={selectedPartner}
            setSelectedPartner={setSelectedPartner}
          />
          <CompassionCreatePartnersModal
            isLocationManager={isLocationManager}
            setPartners={setPartners}
            setIsOpen={setCreatePartner}
            isOpen={createParner}
            locations={locations}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              alignSelf: 'center',
            }}
          >
            <h1>Compassion Partners Page</h1>

            <Select
              styles={{
                control: (provided) => ({
                  ...provided,
                  marginLeft: 40,
                  width: 250,
                  minHeight: 46,
                  marginRight: 8,
                }),
              }}
              placeholder={'Select Location'}
              value={{
                label: locations.find((l) => l.id === selectedLocation)?.name,
                value: selectedLocation,
              }}
              options={
                isLocationManager
                  ? [
                      ...(locations.map((location) => ({
                        value: location.id,
                        label: location.name,
                      })) as any),
                    ]
                  : [
                      { value: 'All', label: 'All' },
                      ...(locations.map((location) => ({
                        value: location.id,
                        label: location.name,
                      })) as any),
                    ]
              }
              onChange={(newValue) => {
                const { value } = newValue as any;
                if (value === 'All') setSelectedLocation(null);
                else setSelectedLocation(value);
                setCurrentPage(1);
              }}
            />
            <div style={{ flex: 1 }}></div>
            <LocationsTMHButton
              style={{ alignSelf: 'flex-start' }}
              onClick={() => setCreatePartner(true)}
            >
              Create
            </LocationsTMHButton>
          </div>

          <div>
            {isLoading ? (
              <Spinner size="sm" />
            ) : (
              <div>
                {partners.length ? (
                  <>
                    <div className={styles.tableWrapper}>
                      <table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Partner Name</th>
                            <th>Update</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentItems.map((partner) => (
                            <tr key={partner.id}>
                              <td>
                                <FadeImage
                                  onError={() => console.log(partner.image)}
                                  style={{
                                    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)',
                                    height: 30,
                                    objectFit: 'contain',
                                  }}
                                  className="contentImage"
                                  imageSrc={partner?.image ?? ''}
                                  fallbackUrl={'/static/NoCompassionLogo.png'}
                                />
                              </td>
                              <td>{partner.name}</td>
                              <td>
                                <button
                                  onClick={() => setSelectedPartner(partner)}
                                  type="button"
                                >
                                  <img
                                    src="/static/svg/Edit.svg"
                                    width={25}
                                    height={25}
                                  />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.pagination}>
                      {[
                        ...Array(
                          Math.ceil(partners.length / itemsPerPage)
                        ).keys(),
                      ].map((number) => (
                        <button
                          type="button"
                          key={number}
                          onClick={() => paginate(number + 1)}
                        >
                          {number + 1}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <span>No Compassion Partners found for this location.</span>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
