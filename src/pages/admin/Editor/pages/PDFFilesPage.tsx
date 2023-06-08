import React from 'react';
import styles from '../Pages.module.scss';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import { Storage } from 'aws-amplify';
import UploadModal from '../UploadModal';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import { Spinner } from 'reactstrap';

const paginateCount = 10;
export default function PDFFilesPage() {
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [pdfs, setPdfs] = React.useState<any[]>([]);
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
        const filteredContent = pdfs.filter((cont) => {
          return cont.key !== contentKeyToDelete;
        });
        setPdfs(filteredContent);
        return true;
      }
      return false;
    }
    return false;
  };
  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const pdfList = await Storage.list('editor/pdfs/');
      console.log({ pdfList });
      setPdfs(pdfList);
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
              PDF Files
            </span>
            <LocationsTMHButton onClick={() => setShowUploadModal(true)}>
              Upload a new PDF
            </LocationsTMHButton>
          </div>

          {pdfs?.length ? (
            <>
              <table style={{ minWidth: '100%' }}>
                <thead>
                  <tr>
                    <th>Page Title</th>
                    <th style={{ textAlign: 'right', paddingRight: 8 }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pdfs
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
                                ?.replace('pdfs/', '')}
                            </span>
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
                length={pdfs.length}
              />
            </>
          ) : (
            <div style={{ padding: 16 }}>No PDFs found.</div>
          )}
          <UploadModal
            showUploadModal={showUploadModal}
            setShowUploadModal={setShowUploadModal}
          />
        </>
      )}
    </div>
  );
}
