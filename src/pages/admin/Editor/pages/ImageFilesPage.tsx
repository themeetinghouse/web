import React from 'react';
import styles from '../Pages.module.scss';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import { Storage } from 'aws-amplify';
import UploadModal from '../components/UploadModal';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import { Spinner } from 'reactstrap';

const paginateCount = 10;
export default function ImageFilesPage() {
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [images, setImages] = React.useState<any[]>([]);
  const [tablePage, setTablePage] = React.useState(0);
  const [contentKeyToDelete, setContentKeyToDelete] = React.useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleDelete = async () => {
    if (contentKeyToDelete) {
      const deletePage = async (name: string) => {
        try {
          const response = await Storage.remove(name);
          if (response.$metadata.httpStatusCode === 204) return true;
          return false;
        } catch (error) {
          console.error({ error });
          return false;
        }
      };
      const success = await deletePage(contentKeyToDelete);
      if (success) {
        const filteredContent = images.filter((cont) => {
          return cont.key !== contentKeyToDelete;
        });
        setImages(filteredContent);
        return true;
      }
      return false;
    }
    return false;
  };
  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const imageList = await Storage.list('editor/images/');
      console.log({ imageList });
      setImages(imageList);
      setIsLoading(false);
    })();
  }, [showUploadModal]);
  const handlePDFDownload = async (keyToDownload: string) => {
    const url = await Storage.get(keyToDownload);
    window.open(url, '_blank');
  };
  return (
    <div style={{ flex: 1, marginLeft: 16 }} className={styles['PageList']}>
      {isLoading ? (
        <div
          style={{
            width: '100%',
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', marginBottom: 20 }}>
            <span style={{ flex: 1, fontWeight: 600, fontSize: 20 }}>
              Image Files
            </span>
            <LocationsTMHButton onClick={() => setShowUploadModal(true)}>
              Upload a new Image
            </LocationsTMHButton>
          </div>

          {images?.length ? (
            <>
              <table style={{ minWidth: '100%' }}>
                <thead>
                  <tr>
                    <th>Page Title</th>
                    <th>Size</th>
                    <th style={{ textAlign: 'right', paddingRight: 8 }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {images
                    .slice(tablePage, tablePage + paginateCount)
                    .map((item, index) => {
                      return (
                        <tr key={item.key}>
                          <td>
                            <span>
                              {item.key
                                ?.replace('savedContent/', '')
                                ?.replace('backups/', '')
                                ?.replace('editor/', '')
                                ?.replace('images/', '')}
                            </span>
                          </td>
                          <td>
                            {item.size < 1048576
                              ? `Size: ${Math.floor(item.size / 1024)} KB`
                              : `Size: ${(item.size / (1024 * 1024)).toFixed(
                                  2
                                )} MB`}
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <button
                              type="button"
                              onClick={() => handlePDFDownload(item.key ?? '')}
                              style={{
                                border: 'none',
                                textDecoration: 'underline',
                                backgroundColor: 'transparent',
                              }}
                            >
                              <img
                                src="/static/svg/Download.svg"
                                width={20}
                                height={20}
                              ></img>
                            </button>
                            <button
                              style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                textDecoration: 'underline',
                              }}
                              type="button"
                              onClick={() =>
                                setContentKeyToDelete(item.key ?? null)
                              }
                            >
                              <img
                                src="/static/svg/Delete.svg"
                                width={20}
                                height={20}
                              ></img>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <ConfirmDeleteModal
                handleDelete={handleDelete}
                contentKey={contentKeyToDelete}
                clearDeleteKey={() => setContentKeyToDelete(null)}
              />

              <TransactionPaginate
                showPageCount
                paginateCount={paginateCount}
                setPaginationIndex={setTablePage}
                paginationIndex={tablePage}
                length={images.length}
              />
            </>
          ) : (
            <div style={{ padding: 16 }}>No Images found.</div>
          )}
          <UploadModal
            uploadLocation="editor/images/"
            contentType="image/jpeg"
            showUploadModal={showUploadModal}
            setShowUploadModal={setShowUploadModal}
          />
        </>
      )}
    </div>
  );
}
