import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import {
  EditorPage,
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';
import ConfirmDeleteModal from './ConfirmDeleteModal';
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
export default function TemplatesModal() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [contentKeyToDelete, setContentKeyToDelete] = useState<string>('');
  const { state, dispatch } = useEditorPageContext();
  const { currentPage } = state;
  useEffect(() => {
    (async () => {
      try {
        const content = await Storage.list('editor/templates');
        const pagesPromises = content
          .filter((item) => item.key?.includes('.json'))
          .map((item) => Storage.get(item.key ?? ''));
        const pagesUrls = await Promise.all(pagesPromises);
        const pages = [];
        for await (const url of pagesUrls) {
          const json = await fetch(url);
          pages.push(await json.clone().json());
        }
        setTemplates(pages);
      } catch (error) {
        console.error({ errorInTemplates: error });
      }
    })();
  }, []);
  console.log({ templates });
  return (
    <Modal isOpen={currentPage === EditorPage.TEMPLATE_PAGE}>
      <div style={{ padding: 16 }}>
        <span
          style={{
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Templates
        </span>
        <div
          style={{
            marginTop: 20,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: 8,
          }}
        >
          {templates.map((template) => (
            <button
              key={template}
              onClick={(e) => {
                dispatch({
                  type: EditorPageActionType.UPDATE_CONTENT,
                  payload: template,
                });
                dispatch({
                  type: EditorPageActionType.SET_EDIT_MODE,
                  payload: {
                    isDraft: true,
                  },
                });
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.EDIT_PAGE,
                });
              }}
              style={{
                padding: 0,
                margin: 0,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flex: 1,
                border: '1.5px solid black',
                position: 'relative',
              }}
            >
              <img
                style={{ alignSelf: 'center', marginBottom: 10, marginTop: 10 }}
                src="/static/svg/Home.svg"
                width={30}
                height={30}
              />
              <span
                style={{
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  textAlign: 'center',
                  marginBottom: 10,
                }}
              >
                {template.page.name}
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setContentKeyToDelete(
                      `editor/templates/${template.page.name}.json`
                    );
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    border: 'none',
                    padding: 4,
                    borderTop: 'none',
                    borderRight: 'none',

                    backgroundColor: '#FFF',
                  }}
                >
                  <img src="/static/svg/Delete.svg" width={20} height={20} />
                </button>{' '}
                <LocationsTMHButton
                  style={{
                    padding: 2,
                    flex: 1,
                  }}
                >
                  Select
                </LocationsTMHButton>
              </div>
            </button>
          ))}
        </div>
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <LocationsTMHButton
            onClick={() =>
              dispatch({
                type: EditorPageActionType.NAVIGATE_TO,
                payload: EditorPage.PUBLIC_PAGE,
              })
            }
          >
            Dismiss
          </LocationsTMHButton>
        </div>
      </div>
      <ConfirmDeleteModal
        handleDelete={async () => {
          const success = await deletePage(contentKeyToDelete);
          if (success) {
            setTemplates(
              templates.filter(
                (template) =>
                  template.page.name !==
                  contentKeyToDelete
                    .replace('editor/templates/', '')
                    .replace('.json', '')
              )
            );
          } else {
            console.error('Error deleting template');
          }
          return success;
        }}
        contentKey={contentKeyToDelete}
        clearDeleteKey={() => setContentKeyToDelete('')}
      />
    </Modal>
  );
}
