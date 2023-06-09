import React from 'react';
import { Modal } from 'reactstrap';
import { RenderEditorList } from '../PageConfigEditor';
import { Storage } from 'aws-amplify';
import styles from './EditorMenu.module.scss';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import { RenderItem } from 'components/RenderRouter/RenderRouter';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import TemplatesModal from '../TemplatesModal';
//import TMHModal from './TMHModal';
import {
  EditorPage,
  EditorPageActionType,
  useEditorPageContext,
} from '../contexts/EditorPageContext';

const SubNavTree = () => {
  const { state, dispatch } = useEditorPageContext();
  const { content, currentPage } = state;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <button
        type="button"
        style={{ paddingLeft: 40 }}
        className={`${styles['MenuItem']} ${
          currentPage === EditorPage.EDIT_PAGE ? styles['MenuActiveItem'] : ''
        }`}
        onClick={() =>
          dispatch({
            type: EditorPageActionType.NAVIGATE_TO,
            payload: EditorPage.PUBLIC_PAGE,
          })
        }
      >
        <span style={{ flex: 1 }}>/{content?.page?.name}</span>
        <img src="/static/svg/More.svg" width={20} height={20} />
      </button>
      <div>
        <AddComponentModal />
        <PageSettingsModal />
        <SaveModal />
        <SaveAsTemplateModal />
        <SaveAsDraftModal />
      </div>
    </div>
  );
};
export default function EditorMenu() {
  const { state, dispatch } = useEditorPageContext();

  //const [modalOpen, setModalOpen] = React.useState(false);
  const { currentPage, isBackup, isDraft } = state;
  const pageDirectoryActive =
    currentPage === EditorPage.PUBLIC_PAGE ||
    currentPage === EditorPage.BACKUP_PAGE ||
    currentPage === EditorPage.DRAFT_PAGE ||
    currentPage === EditorPage.EDIT_PAGE ||
    currentPage === EditorPage.TEMPLATE_PAGE;
  const globalSettingsActive =
    currentPage === EditorPage.NAVIGATION_SETTINGS_PAGE ||
    currentPage === EditorPage.GLOBAL_SETTINGS_PAGE ||
    currentPage === EditorPage.FOOTER_SETTINGS_PAGE;
  const mediaActive =
    currentPage === EditorPage.PDF_FILES_PAGE ||
    currentPage === EditorPage.MEDIA_PAGE ||
    currentPage === EditorPage.IMAGE_FILES_PAGE;

  return (
    <nav className={styles['MenuContainer']}>
      <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }}>
        {/* <button type="button" onClick={() => setModalOpen((prev) => !prev)}>
          Open
        </button>
        <TMHModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <div>Test Content goes here </div>
        </TMHModal> */}
        <button
          type="button"
          className={`${styles['MenuItem']}`}
          style={pageDirectoryActive ? { fontWeight: 500 } : {}}
          onClick={() =>
            dispatch({
              type: EditorPageActionType.NAVIGATE_TO,
              payload: EditorPage.PUBLIC_PAGE,
            })
          }
        >
          <span style={{ flex: 1 }}>Pages Directory</span>
          {/* <img src="/static/svg/Notes.svg" width={20} height={20} /> */}
        </button>
        {pageDirectoryActive ? (
          <>
            <button
              type="button"
              style={
                currentPage === EditorPage.EDIT_PAGE
                  ? { fontWeight: 600, paddingLeft: 20 }
                  : { paddingLeft: 20 }
              }
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.PUBLIC_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.PUBLIC_PAGE,
                })
              }
            >
              <span style={{ flex: 1 }}>Public</span>
              <img src="/static/svg/Notes.svg" width={20} height={20} />
            </button>
            {currentPage === EditorPage.EDIT_PAGE && !isBackup && !isDraft ? (
              <SubNavTree />
            ) : null}

            <button
              type="button"
              style={{ paddingLeft: 20 }}
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.BACKUP_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.BACKUP_PAGE,
                })
              }
            >
              <span style={{ flex: 1 }}>Backups</span>
              <img
                src="/static/svg/Skip, Backward.svg"
                width={20}
                height={20}
              />
            </button>
            {currentPage === EditorPage.EDIT_PAGE && isBackup ? (
              <SubNavTree />
            ) : null}
            <button
              type="button"
              style={{ paddingLeft: 20 }}
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.DRAFT_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.DRAFT_PAGE,
                })
              }
            >
              <span style={{ flex: 1 }}>Drafts</span>
              <img src="/static/svg/Register.svg" width={20} height={20} />
            </button>
            {currentPage === EditorPage.EDIT_PAGE && isDraft ? (
              <SubNavTree />
            ) : null}
          </>
        ) : null}
      </div>

      <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }}>
        <button
          type="button"
          className={`${styles['MenuItem']}`}
          style={mediaActive ? { fontWeight: 500 } : {}}
          onClick={() =>
            dispatch({
              type: EditorPageActionType.NAVIGATE_TO,
              payload: EditorPage.PDF_FILES_PAGE,
            })
          }
        >
          <span style={{ flex: 1 }}>Media</span>
          {/* <img src="/static/svg/Notes.svg" width={20} height={20} /> */}
        </button>
        {mediaActive ? (
          <>
            <button
              type="button"
              style={{ paddingLeft: 20 }}
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.PDF_FILES_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() => {
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.PDF_FILES_PAGE,
                });
              }}
            >
              <span style={{ flex: 1 }}>PDFs</span>
              <img src={'/static/svg/Notes.svg'} width={20} height={20} />
            </button>
            <button
              type="button"
              style={{ paddingLeft: 20 }}
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.IMAGE_FILES_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() => {
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.IMAGE_FILES_PAGE,
                });
              }}
            >
              <span style={{ flex: 1 }}>Images</span>
              <img src={'/static/svg/Notes.svg'} width={20} height={20} />
            </button>
          </>
        ) : null}
      </div>
      <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }}>
        <button
          type="button"
          className={`${styles['MenuItem']}`}
          style={globalSettingsActive ? { fontWeight: 500 } : {}}
          onClick={() =>
            dispatch({
              type: EditorPageActionType.NAVIGATE_TO,
              payload: EditorPage.NAVIGATION_SETTINGS_PAGE,
            })
          }
        >
          <span style={{ flex: 1 }}>Global Settings</span>
          {/* <img src="/static/svg/Notes.svg" width={20} height={20} /> */}
        </button>
        {globalSettingsActive ? (
          <>
            <button
              style={{ paddingLeft: 20 }}
              type="button"
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.NAVIGATION_SETTINGS_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.NAVIGATION_SETTINGS_PAGE,
                })
              }
            >
              <span style={{ flex: 1 }}>Navigation</span>
              <img
                src={'/static/svg/List, Generic.svg'}
                width={20}
                height={20}
              />
            </button>

            <button
              type="button"
              style={{ paddingLeft: 20 }}
              className={`${styles['MenuItem']} ${
                currentPage === EditorPage.FOOTER_SETTINGS_PAGE
                  ? styles['MenuActiveItem']
                  : ''
              }`}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.FOOTER_SETTINGS_PAGE,
                })
              }
            >
              <span style={{ flex: 1 }}>Footer</span>
              <img src="/static/svg/Notes.svg" width={20} height={20} />
            </button>
          </>
        ) : null}
      </div>
      {currentPage === EditorPage.TEMPLATE_PAGE ? <TemplatesModal /> : null}
    </nav>
  );
}

function SaveAsTemplateModal() {
  const [resultMessage, setResultMessage] = React.useState('');
  const [showOverwriteMessage, setShowOverwriteMessage] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [saveModalVisible, setSaveModalVisible] = React.useState(false);
  const clearSaveModal = () => {
    setResultMessage('');
    setShowOverwriteMessage(false);
    setIsSaving(false);
    setSaveModalVisible(false);
  };

  const checkFileExists = async (fileName: string) => {
    try {
      const path = 'editor/templates/' + fileName + '.json';
      const existingURL = await Storage.get(path);
      const response = await fetch(existingURL);
      const json = await response.json();
      return json;
    } catch (e) {
      return null;
    }
  };

  const handleSaveFile = async (fileName: string, json: any) => {
    console.log('handling save', fileName);
    const exists = await checkFileExists(content.page.name);
    if (exists) {
      setShowOverwriteMessage(true);
    } else {
      await saveFile(content.page.name, json);
      setResultMessage('Successfully saved!');
    }
  };

  const saveFile = async (fileName: string, json: any) => {
    try {
      setIsSaving(true);
      console.log('Saving new file', json);
      await Storage.put(`editor/templates/${fileName}.json`, json, {
        contentType: 'application/json',
        acl: 'public-read',
      });
      setResultMessage('Successfully saved!');
      dispatch({
        type: EditorPageActionType.UPDATE_SAVED_STATUS,
        payload: true,
      });
    } catch (e) {
      console.log({ e: e });
      setResultMessage('An error occurred. Please try again later.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <button
        className={`${styles['MenuItem']}`}
        style={{ paddingLeft: 60 }}
        onClick={() => {
          setSaveModalVisible(true);
        }}
      >
        <span style={{ flex: 1 }}>Save as template</span>
        <img src="/static/svg/Register.svg" width={20} height={20} />
      </button>
      <Modal isOpen={saveModalVisible} style={{ zIndex: 100000 }}>
        <div
          style={{
            margin: 16,
          }}
        >
          <span>
            {resultMessage ? (
              <b>{resultMessage}</b>
            ) : showOverwriteMessage ? (
              <span>
                Are you sure you want to overwrite the following template:
                <b
                  style={{
                    color: 'tomato',
                  }}
                >
                  {' '}
                  {content.page.name}
                </b>
                ?
              </span>
            ) : !resultMessage && !showOverwriteMessage ? (
              <span>
                Are you sure you want to save the following template:
                <b> {content.page.name}</b>?
              </span>
            ) : null}
          </span>

          <div
            style={{
              marginTop: 40,
              columnGap: 8,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {resultMessage ? (
              <>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            ) : showOverwriteMessage ? (
              <>
                <LocationsTMHButton
                  onClick={() => saveFile(content.page.name, content)}
                >
                  {isSaving ? 'Saving...' : 'Yes'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  No
                </LocationsTMHButton>
              </>
            ) : (
              <>
                <LocationsTMHButton
                  onClick={() => {
                    if (!content) return;
                    handleSaveFile(content.page.name, content);
                  }}
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

function SaveAsDraftModal() {
  const [resultMessage, setResultMessage] = React.useState('');
  const [showOverwriteMessage, setShowOverwriteMessage] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [saveModalVisible, setSaveModalVisible] = React.useState(false);
  const clearSaveModal = () => {
    setResultMessage('');
    setShowOverwriteMessage(false);
    setIsSaving(false);
    setSaveModalVisible(false);
  };

  const checkFileExists = async (fileName: string): Promise<JSON | null> => {
    try {
      const path = 'editor/drafts/' + fileName + '.json';
      const existingURL = await Storage.get(path);
      const response = await fetch(existingURL);
      const json: JSON = await response.json();
      return json;
    } catch (e) {
      return null;
    }
  };

  const handleSaveFile = async (fileName: string, json: any) => {
    const exists = await checkFileExists(fileName);
    if (exists) {
      setShowOverwriteMessage(true);
    } else {
      await saveFile(fileName, json);
      setResultMessage('Successfully saved!');
    }
  };

  const saveFile = async (fileName: string, json: any) => {
    try {
      setIsSaving(true);
      console.log('Saving new file', json);
      await Storage.put(`editor/drafts/${fileName}.json`, json, {
        contentType: 'application/json',
        acl: 'public-read',
      });
      const newEditModeObject: any = {};

      newEditModeObject.isBackup = false;
      newEditModeObject.isDraft = true;

      dispatch({
        type: EditorPageActionType.SET_EDIT_MODE,
        payload: newEditModeObject,
      });
      dispatch({
        type: EditorPageActionType.UPDATE_SAVED_STATUS,
        payload: true,
      });
      setResultMessage('Successfully saved!');
    } catch (e) {
      console.log({ e: e });
      setResultMessage('An error occurred. Please try again later.');
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <button
        className={styles['MenuItem']}
        style={{ paddingLeft: 60 }}
        onClick={() => {
          setSaveModalVisible(true);
        }}
      >
        <span style={{ flex: 1 }}>Save as draft</span>
        <img src="/static/svg/Register.svg" width={20} height={20} />
      </button>
      <Modal isOpen={saveModalVisible} style={{ zIndex: 100000 }}>
        <div
          style={{
            margin: 16,
          }}
        >
          <span>
            {resultMessage ? (
              <b>{resultMessage}</b>
            ) : showOverwriteMessage ? (
              <span>
                Are you sure you want to overwrite the following draft:
                <b
                  style={{
                    color: 'tomato',
                  }}
                >
                  {' '}
                  {content.page.name}
                </b>
                ?
              </span>
            ) : !resultMessage && !showOverwriteMessage ? (
              <span>
                Are you sure you want to save the following draft:
                <b> {content.page.name}</b>?
              </span>
            ) : null}
          </span>

          <div
            style={{
              marginTop: 40,
              columnGap: 8,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {resultMessage ? (
              <>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            ) : showOverwriteMessage ? (
              <>
                <LocationsTMHButton
                  onClick={() => saveFile(content.page.name, content)}
                >
                  {isSaving ? 'Saving...' : 'Yes'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  No
                </LocationsTMHButton>
              </>
            ) : (
              <>
                <LocationsTMHButton
                  onClick={() => handleSaveFile(content.page.name, content)}
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
function SaveModal() {
  const [resultMessage, setResultMessage] = React.useState('');
  const [showOverwriteMessage, setShowOverwriteMessage] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const { state, dispatch } = useEditorPageContext();
  const { content, isDraft, isBackup } = state;
  const [saveModalVisible, setSaveModalVisible] = React.useState(false);
  const clearSaveModal = () => {
    setResultMessage('');
    setShowOverwriteMessage(false);
    setIsSaving(false);
    setSaveModalVisible(false);
  };

  const checkFileExists = async (fileName: string) => {
    try {
      const path = 'savedContent/' + fileName + '.json';
      const existingURL = await Storage.get(path);
      const response = await fetch(existingURL);
      const json = await response.json();
      return json;
    } catch (e) {
      return null;
    }
  };

  const handleSaveFile = async (fileName: string, json: any) => {
    const exists = await checkFileExists(fileName);
    if (exists) {
      setShowOverwriteMessage(true);
    } else {
      await saveFile(fileName, json);
      setResultMessage('Successfully saved!');
    }
  };
  const saveFile = async (fileName: string, json: any) => {
    try {
      setIsSaving(true);
      console.log('Saving new file', json);
      await Storage.put(`savedContent/${fileName}.json`, json, {
        contentType: 'application/json',
        acl: 'public-read',
      });
      await Storage.put(`editor/backups/${fileName}.json`, json, {
        contentType: 'application/json',
        acl: 'public-read',
      });

      if (isDraft) {
        await Storage.remove(`editor/drafts/${fileName}.json`);
      }
      if (isBackup) {
        await Storage.remove(`editor/backups/${fileName}.json`);
      }
      const newEditModeObject: any = {};
      newEditModeObject.isDraft = false;
      newEditModeObject.isBackup = false;
      dispatch({
        type: EditorPageActionType.SET_EDIT_MODE,
        payload: newEditModeObject,
      });
      dispatch({
        type: EditorPageActionType.UPDATE_SAVED_STATUS,
        payload: true,
      });
      setResultMessage('Successfully saved!');
    } catch (e) {
      console.log({ e: e });
      setResultMessage('An error occurred. Please try again later.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <button
        className={styles['MenuItem']}
        style={{ paddingLeft: 60 }}
        onClick={() => {
          setSaveModalVisible(true);
        }}
      >
        <span style={{ flex: 1 }}>Publish</span>
        <img src="/static/svg/Register.svg" width={20} height={20} />
      </button>
      <Modal isOpen={saveModalVisible} style={{ zIndex: 100000 }}>
        <div
          style={{
            margin: 16,
          }}
        >
          <span>
            {resultMessage ? (
              <b>{resultMessage}</b>
            ) : showOverwriteMessage ? (
              <span>
                Are you sure you want to overwrite the following page:
                <b
                  style={{
                    color: 'tomato',
                  }}
                >
                  {' '}
                  {content.page.name}
                </b>
                ?
              </span>
            ) : !resultMessage && !showOverwriteMessage ? (
              <span>
                Are you sure you want to save the following page:
                <b> {content.page.name}</b>?
              </span>
            ) : null}
          </span>

          <div
            style={{
              marginTop: 40,
              columnGap: 8,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {resultMessage ? (
              <>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            ) : showOverwriteMessage ? (
              <>
                <LocationsTMHButton
                  onClick={() => {
                    console.log('saving file', content.page.name);
                    saveFile(content.page.name, content);
                  }}
                >
                  {isSaving ? 'Saving...' : 'Yes'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  No
                </LocationsTMHButton>
              </>
            ) : (
              <>
                <LocationsTMHButton
                  onClick={() => handleSaveFile(content.page.name, content)}
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </LocationsTMHButton>
                <LocationsTMHButton onClick={clearSaveModal} outline>
                  Dismiss
                </LocationsTMHButton>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
function PageSettingsModal() {
  const { state, dispatch } = useEditorPageContext();
  const { showPageSettingsModal } = state;
  const [editorList, setEditorList] = React.useState<any>();
  React.useEffect(() => {
    const updateEditorList = async () => {
      try {
        const z = await fetch('/static/editor/PageEditorFields.json');
        const z1 = await z.json();
        setEditorList(z1);
      } catch (e) {
        console.log({ e: e });
      }
    };
    updateEditorList();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <button
        className={styles['MenuItem']}
        style={{ paddingLeft: 60 }}
        onClick={() => {
          dispatch({
            type: EditorPageActionType.SET_SHOW_PAGE_SETTINGS_MODAL,
            payload: true,
          });
        }}
      >
        <span style={{ flex: 1 }}>Settings</span>
        <img src="/static/svg/More.svg" width={20} height={20} />
      </button>
      <Modal
        isOpen={showPageSettingsModal}
        style={{ zIndex: 100000 }}
        size="xl"
      >
        <div
          style={{
            padding: 16,
          }}
        >
          <span></span>
          {editorList ? (
            <RenderEditorList parents={['page']} list={editorList} />
          ) : null}
          <div style={{ marginTop: 20 }}>
            <LocationsTMHButton
              onClick={() => {
                dispatch({
                  type: EditorPageActionType.SET_SHOW_PAGE_SETTINGS_MODAL,
                  payload: false,
                });
              }}
            >
              Done
            </LocationsTMHButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
function AddComponentModal() {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [addList, setAddList] = React.useState<any>();
  const [componentType, setComponentType] = React.useState<string>('hero');
  const [page, setPage] = React.useState<number>(0);
  const paginateCount = 10;
  React.useEffect(() => {
    const updateEditorList = async () => {
      try {
        const z2 = await fetch('/static/editor/AddFields.json');
        const z3 = await z2.json();
        console.log({ z3 });
        setAddList(z3);
      } catch (e) {
        console.log({ e: e });
      }
    };
    updateEditorList();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <button
        className={styles['MenuItem']}
        style={{ paddingLeft: 60 }}
        onClick={() => {
          dispatch({
            type: EditorPageActionType.SET_SHOW_ADD_COMPONENT_MODAL,
            payload: true,
          });
        }}
      >
        <span style={{ flex: 1 }}>Add component</span>
        <img src="/static/svg/Plus-Expand.svg" width={20} height={20} />
      </button>
      <Modal
        isOpen={state.showAddComponentModal}
        style={{ zIndex: 100000 }}
        size="xl"
      >
        <div
          style={{
            margin: 16,
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <div
            style={{
              marginBottom: 20,
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                flex: 1,
              }}
            >
              Component Library
            </span>
            <label
              style={{
                alignSelf: 'center',
                marginRight: 8,
              }}
            >
              Type:
            </label>
            <select
              onChange={(e) => {
                setPage(0);
                setComponentType(e.target.value);
              }}
              value={componentType}
            >
              <option value={'all'}>All</option>
              <option value={'hero'}>Page Headers</option>
              <option value={'content'}>Content Containers</option>
              <option value={'grid'}>Grids</option>
              <option value={'list'}>Lists</option>
              <option value={'other'}>Other</option>
            </select>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 8,
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              marginBottom: 16,
            }}
          >
            {addList
              ?.filter(
                (item: any) =>
                  item.type === componentType || componentType === 'all'
              )
              ?.slice(page, page + paginateCount)
              ?.map((item: any, index: number) => {
                console.log({ item });
                return (
                  <div
                    onClick={() => {
                      const z = content;
                      z.page.content.push(item.content);

                      dispatch({
                        type: EditorPageActionType.UPDATE_CONTENT,
                        payload: z,
                      });
                      dispatch({
                        type: EditorPageActionType.SET_SHOW_ADD_COMPONENT_MODAL,
                        payload: false,
                      });
                    }}
                    className={styles['Card']}
                    key={index}
                    style={{
                      overflow: 'hidden',
                      zIndex: 10000 + index,
                      width: 300,
                      height: 210,
                      border: '1px solid #1a1a1a',
                      position: 'relative',
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        border: 'none',
                        position: 'absolute',
                        backgroundColor: '#1a1a1a',
                        fontWeight: '600',
                        zIndex: 10001 + index,
                        color: 'white',
                        width: '100%',
                        padding: 8,
                        textAlign: 'center',
                        bottom: 0,
                        fontSize: 14,
                      }}
                    >
                      {item.name}
                    </button>
                    {item.previewURL ? (
                      <img width={300} src={item.previewURL} />
                    ) : (
                      <div
                        style={{
                          transformOrigin: 'top left',
                          transform: 'scale(0.15)',
                        }}
                      >
                        <RenderItem
                          item={item.content}
                          index={index}
                          data={[]}
                          content={{
                            page: { ...content.page, content: [] },
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div
            style={{
              marginTop: -40,
            }}
          >
            <TransactionPaginate
              paginateCount={paginateCount}
              setPaginationIndex={setPage}
              paginationIndex={page}
              length={
                addList?.filter(
                  (item: any) =>
                    item.content.type === componentType ||
                    componentType === 'all'
                ).length || 0
              }
            />
          </div>

          <div
            style={{
              alignSelf: 'center',
            }}
          >
            <LocationsTMHButton
              style={{
                marginTop: 20,
              }}
              onClick={() => {
                dispatch({
                  type: EditorPageActionType.SET_SHOW_ADD_COMPONENT_MODAL,
                  payload: false,
                });
              }}
            >
              Done
            </LocationsTMHButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
