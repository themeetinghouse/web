import { useState } from 'react';
import { Spinner } from 'reactstrap';
import styles from './CompassionPartnersPage.module.scss';
import useCompassionPartners from './useCompassionPartners';
import { ContentImage } from 'components/RenderRouter/ContentItem';
import { API } from 'aws-amplify';
import { deleteTMHCompassion } from 'graphql/mutations';
import CompassionPartnersModal from './CompassionPartnersModal';
import { TMHCompassion } from 'API';
import Select from 'react-select';

export default function CompassionPartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<TMHCompassion | null>(
    null
  );
  const {
    partners,
    isLoading,
    setPartners,
    locations,
    selectedLocation,
    setSelectedLocation,
  } = useCompassionPartners();
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items you want per page

  // Calculate the currently displayed items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = partners.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleDelete = async (id: string) => {
    try {
      await API.graphql({
        query: deleteTMHCompassion,
        variables: { input: { id } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      setPartners(partners.filter((partner) => partner.id !== id));
    } catch (e: unknown) {
      const error = e as { message?: string; errors?: { message?: string }[] };
      console.error(error);
      setErrorMessage(
        error.message ?? error.errors?.[0].message ?? 'Unknown error'
      );
    }
  };
  return (
    <div className={styles.CompassionPartnersPageWrapper}>
      <CompassionPartnersModal
        selectedPartner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
      <h1>Compassion Partners Page</h1>
      <Select
        value={selectedLocation}
        options={[
          { value: 'All', label: 'All' },
          ...(locations.map((location) => ({
            value: location.id,
            label: location.name,
          })) as any),
        ]}
        onChange={({ value }: any) => {
          setSelectedLocation(value);
        }}
      />
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
                        <th>Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((partner) => (
                        <tr key={partner.id}>
                          <td>
                            <ContentImage
                              className="contentImage"
                              image={{ src: partner.image }}
                              style={{
                                height: 30,

                                objectFit: 'contain',
                              }}
                            />
                          </td>
                          <td>{partner.name}</td>
                          <td>
                            <button onClick={() => setSelectedPartner(partner)}>
                              <img
                                src="/static/svg/Edit.svg"
                                width={25}
                                height={25}
                              />
                            </button>
                            <button
                              onClick={() => {
                                if (false) handleDelete(partner.id);
                              }}
                            >
                              <img
                                src="/static/svg/Delete.svg"
                                width={25}
                                height={25}
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {errorMessage ? (
                      <tfoot>
                        <tr>
                          <td style={{ color: 'tomato' }} colSpan={3}>
                            {errorMessage}
                          </td>
                        </tr>
                      </tfoot>
                    ) : null}
                  </table>
                </div>
                <div className={styles.pagination}>
                  {[
                    ...Array(Math.ceil(partners.length / itemsPerPage)).keys(),
                  ].map((number) => (
                    <button key={number} onClick={() => paginate(number + 1)}>
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
    </div>
  );
}
