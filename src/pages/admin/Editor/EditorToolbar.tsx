import { useEffect, useState } from 'react';
import { Modal } from 'reactstrap';
import { RenderEditorList } from './PageConfigEditor';
import styles from './EditorToolbar.module.scss';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import {
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';
interface ToolbarProps {
  item: any;
  index: any;
}
export default function EditorToolbar(props: ToolbarProps) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [componentList, setComponentList] = useState<any>();
  useEffect(() => {
    const updateComponents = async () => {
      try {
        const z = await fetch('/static/editor/Hero.json');
        const z1 = await z.json();
        console.log({ components: z1 });
        setComponentList(z1);
      } catch (e) {
        console.log({ e: e });
      }
    };
    updateComponents();
  }, []);
  console.log({ length: content?.page?.content?.length - 1 });
  return content ? (
    <div className={styles['EditorToolbarContainer']}>
      {props.index !== 0 ? (
        <button
          type="button"
          aria-label="Move Up"
          title="Move Up"
          onClick={() => {
            const z = content;
            const [removed] = z.page.content.splice(props.index, 1);
            z.page.content.splice(props.index - 1, 0, removed);
            dispatch({
              type: EditorPageActionType.UPDATE_CONTENT,
              payload: z,
            });
          }}
        >
          <img
            style={{ transform: 'rotate(-90deg  )' }}
            src="/static/svg/Arrow.svg"
            width={40}
            height={40}
          />
        </button>
      ) : null}

      {props.index !== content?.page?.content?.length - 1 ? (
        <button
          aria-label="Move Down"
          title="Move Down"
          type="button"
          onClick={() => {
            const z = content;
            const [removed] = z.page.content.splice(props.index, 1);
            z.page.content.splice(props.index + 1, 0, removed);
            dispatch({
              type: EditorPageActionType.UPDATE_CONTENT,
              payload: z,
            });
          }}
        >
          <img
            style={{ transform: 'rotate(90deg  )' }}
            src="/static/svg/Arrow.svg"
            width={40}
            height={40}
          />
        </button>
      ) : null}

      <button
        aria-label="Delete Component"
        title="Delete Component"
        type="button"
        onClick={() => {
          const z = content;
          z.page.content.splice(props.index, 1);
          dispatch({
            type: EditorPageActionType.UPDATE_CONTENT,
            payload: z,
          });
        }}
      >
        <img src="/static/svg/Delete.svg" width={40} height={40} />
      </button>
      <button
        aria-label="Edit Component"
        title="Edit Component"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src="/static/svg/More.svg" width={40} height={40} />
      </button>
      <Modal isOpen={showModal} style={{ zIndex: 100000 }} size="lg">
        <div
          style={{
            padding: 16,
          }}
        >
          {componentList &&
          componentList.filter((x: any) => x.type == props.item.type)[0]
            .items ? (
            <RenderEditorList
              parents={['page', 'content', props.index]}
              list={
                componentList.filter((x: any) => x.type == props.item.type)[0]
                  .items
              }
            />
          ) : null}
          <div
            style={{
              marginTop: 20,
            }}
          >
            <LocationsTMHButton
              title="Save Changes"
              aria-label="Save Changes"
              type="button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Done
            </LocationsTMHButton>
          </div>
        </div>
      </Modal>
    </div>
  ) : null;
}
