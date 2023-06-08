import { S3ProviderListOutputItem } from '@aws-amplify/storage';
import React, { useMemo } from 'react';
import { Storage } from 'aws-amplify';
import RenderRouter from '../../../components/RenderRouter/RenderRouter';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import styles from './Pages.module.scss';
import HomeMenu from 'components/Menu/HomeMenu';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { Spinner } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import {
  EditorPage,
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';
import FooterSettingsPage from './pages/FooterSettingsPage';
import NavigationSettingsPage from './pages/NavigationSettingsPage';
import PDFFilesPage from './pages/PDFFilesPage';
import IgnorePages from './utils/IgnorePages.json';

async function deletePage(filename: string) {
  try {
    const response = await Storage.remove(filename);
    if (response.$metadata.httpStatusCode === 204) return true;
    return false;
  } catch (error) {
    console.error({ error });
    return false;
  }
}
export default function EditorPages() {
  const { state, dispatch } = useEditorPageContext();
  const { currentPage, content } = state;
  const containerRef = React.useRef<HTMLDivElement>(null);
  console.log({ content });
  const numberOfComponents = useMemo(() => {
    return content?.page?.content?.length;
  }, [content?.page?.content?.length]);
  React.useEffect(() => {
    setInterval(() => {
      if (containerRef.current) {
        containerRef.current.style.height =
          containerRef.current.scrollHeight.toString() + 'px';
      }
    }, 500);
  }, [currentPage, numberOfComponents]);
  const paginateCount = 10;
  const [contentKeyToDelete, setContentKeyToDelete] = React.useState<
    string | null
  >(null);
  const [tablePage, setTablePage] = React.useState(0);
  const [loadContent, setLoadContent] = React.useState<
    S3ProviderListOutputItem[]
  >([]);
  const [backupContent, setBackupContent] = React.useState<
    S3ProviderListOutputItem[]
  >([]);
  const [draftContent, setDraftContent] = React.useState<
    S3ProviderListOutputItem[]
  >([]);

  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const updateLoadContent = async () => {
      try {
        setIsLoading(true);
        const content = await Storage.list('savedContent/');
        const drafts = await Storage.list('editor/drafts/');
        const backup = await Storage.list('editor/backups/');
        setDraftContent(drafts.sort(sortAlphabetically));
        setBackupContent(backup.sort(sortAlphabetically));
        setLoadContent(content.sort(sortAlphabetically));
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };
    updateLoadContent();
  }, [state.currentPage]);

  const loadFile = async (filename: string) => {
    try {
      const contentUrl = await Storage.get(filename);
      const response = await fetch(contentUrl);
      const json = await response.json();
      dispatch({
        type: EditorPageActionType.SET_CURRENT_PAGE,
        payload: json,
      });
    } catch (error) {
      console.log({ error });
    }
  };
  const handleDelete = async () => {
    if (contentKeyToDelete) {
      const success = await deletePage(contentKeyToDelete);
      if (success) {
        const filteredContent = loadContent.filter((cont) => {
          return cont.key !== contentKeyToDelete;
        });
        setLoadContent(filteredContent);
        return true;
      }
      return false;
    }
    return false;
  };
  const contentToShow =
    currentPage === EditorPage.BACKUP_PAGE
      ? backupContent
      : currentPage === EditorPage.DRAFT_PAGE
      ? draftContent
      : loadContent;
  console.log({ currentPage });
  if (currentPage === EditorPage.PDF_FILES_PAGE) return <PDFFilesPage />;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 16,
        flex: 1,
      }}
    >
      {numberOfComponents === 0 && currentPage === EditorPage.EDIT_PAGE ? (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <span>There are no components on this page yet.</span>
          <div style={{ marginTop: 20 }}>
            <LocationsTMHButton onClick={() => null}>
              Start adding components
            </LocationsTMHButton>
          </div>
        </div>
      ) : null}
      {currentPage === EditorPage.PUBLIC_PAGE ||
      currentPage === EditorPage.DRAFT_PAGE ||
      currentPage === EditorPage.BACKUP_PAGE ||
      currentPage === EditorPage.TEMPLATE_PAGE ? (
        <>
          <div style={{ flex: 1 }} className={styles['PageList']}>
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
                {contentToShow.length ? (
                  <>
                    <div style={{ display: 'flex', marginBottom: 20 }}>
                      <span
                        style={{
                          flex: 1,
                          fontWeight: 600,
                          fontSize: 20,
                          textTransform: 'capitalize',
                        }}
                      >
                        {currentPage.toString().replace('_', ' ').toLowerCase()}{' '}
                      </span>
                      <LocationsTMHButton
                        onClick={() =>
                          dispatch({
                            type: EditorPageActionType.NAVIGATE_TO,
                            payload: EditorPage.TEMPLATE_PAGE,
                          })
                        }
                      >
                        Create a new Page
                      </LocationsTMHButton>
                    </div>
                    <table style={{ minWidth: '100%' }}>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th style={{ textAlign: 'right', paddingRight: 8 }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {contentToShow
                          .filter((item) => {
                            const pageTitle =
                              item.key
                                ?.replace('savedContent/', '')
                                ?.replace('backups/', '')
                                ?.replace('drafts/', '')
                                ?.replace('editor/', '') ?? '';
                            return (
                              item.key && IgnorePages.indexOf(pageTitle) === -1
                            );
                          })
                          .slice(tablePage, tablePage + paginateCount)
                          .map((item, index) => {
                            return (
                              <tr key={item.key}>
                                <td>
                                  <span>
                                    {item.key
                                      ?.replace('savedContent/', '')
                                      ?.replace('backups/', '')
                                      ?.replace('drafts/', '')
                                      ?.replace('editor/', '')}
                                  </span>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                  {currentPage === EditorPage.BACKUP_PAGE ? (
                                    <button
                                      title="Restore this page"
                                      type="button"
                                      style={{
                                        border: 'none',
                                        textDecoration: 'underline',
                                        backgroundColor: 'transparent',
                                      }}
                                      onClick={async () => {
                                        null;
                                      }}
                                    >
                                      <img
                                        src="/static/svg/Skip, Backward.svg"
                                        width={20}
                                        height={20}
                                      ></img>
                                    </button>
                                  ) : null}
                                  <button
                                    type="button"
                                    title="Edit this page"
                                    style={{
                                      border: 'none',
                                      textDecoration: 'underline',
                                      backgroundColor: 'transparent',
                                    }}
                                    onClick={async () => {
                                      await loadFile(item.key ?? 'unknown');
                                      const editModeObj: any = {};
                                      if (currentPage === EditorPage.DRAFT_PAGE)
                                        editModeObj['isDraft'] = true;
                                      if (
                                        currentPage === EditorPage.BACKUP_PAGE
                                      )
                                        editModeObj['isBackup'] = true;
                                      dispatch({
                                        type: EditorPageActionType.SET_EDIT_MODE,
                                        payload: {
                                          ...editModeObj,
                                        },
                                      });
                                    }}
                                  >
                                    <img
                                      src="/static/svg/Register.svg"
                                      width={20}
                                      height={20}
                                    ></img>
                                  </button>
                                  <button
                                    title="Remove this page"
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
                    <TransactionPaginate
                      showPageCount
                      paginateCount={paginateCount}
                      setPaginationIndex={setTablePage}
                      paginationIndex={tablePage}
                      length={contentToShow.length}
                    />
                    <ConfirmDeleteModal
                      handleDelete={handleDelete}
                      contentKey={contentKeyToDelete}
                      clearDeleteKey={() => setContentKeyToDelete(null)}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    You don&apos;t have any {currentPage.replace('s', '')} pages
                    yet!
                    {currentPage !== EditorPage.BACKUP_PAGE ? (
                      <div>
                        <LocationsTMHButton
                          style={{ marginTop: 16 }}
                          onClick={() =>
                            dispatch({
                              type: EditorPageActionType.NAVIGATE_TO,
                              payload: EditorPage.TEMPLATE_PAGE,
                            })
                          }
                        >
                          Click here to create a page
                        </LocationsTMHButton>
                      </div>
                    ) : null}
                  </div>
                )}
              </>
            )}
          </div>
        </>
      ) : currentPage === EditorPage.FOOTER_SETTINGS_PAGE ? (
        <FooterSettingsPage />
      ) : currentPage === EditorPage.NAVIGATION_SETTINGS_PAGE ? (
        <NavigationSettingsPage />
      ) : (
        <div
          ref={containerRef}
          style={{ height: containerRef.current?.scrollHeight.toString() ?? 0 }}
          className={styles['ContentParentContainer']}
        >
          {currentPage?.toString()}
          {currentPage === EditorPage.EDIT_PAGE && content ? (
            <div className={styles['ContentContainer']}>
              <HomeMenu pageConfig={content.page.pageConfig} />
              <RenderRouter data={state.data} content={content}></RenderRouter>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

const sortAlphabetically = (
  contentA: S3ProviderListOutputItem,
  contentB: S3ProviderListOutputItem
) => {
  if (!contentA.key || !contentB.key) return 0;
  const keyA = contentA.key.replace('savedContent/', '');
  const keyB = contentB.key.replace('savedContent/', '');

  return keyA.localeCompare(keyB);
};
