import styles from './EditorToolbar.module.scss';

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
          dispatch({
            type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
            payload: {
              content: content.page.content[props.index],
              editIndex: props.index,
            },
          });
        }}
      >
        <img src="/static/svg/More.svg" width={40} height={40} />
      </button>
    </div>
  ) : null;
}
