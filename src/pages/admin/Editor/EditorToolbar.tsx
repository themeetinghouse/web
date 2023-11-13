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
  const contentItem = content?.page?.content?.[props?.index ?? 0];
  const isOgTags = contentItem?.type === 'og-tags';
  const isEditable = shouldShowToolBar(contentItem, content?.page?.name);
  return content && !isOgTags && isEditable ? (
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

const shouldShowToolBar = (contentItem: any, pageName: string) => {
  const { type, style, class: componentClass } = contentItem || {};
  const isEditable =
    (type === 'hero' && style === 'full') ||
    (type === 'hero' && style === 'partial') ||
    (type === 'blog' && style === 'hero') ||
    (type === 'teaching' && style === 'hero') ||
    (type === 'hero' && style === 'locationPage') ||
    (type === 'hero' && style === 'connect') ||
    (type === 'content' && style === 'mad') ||
    (type === 'content' && style === 'greyTwoText') ||
    (type === 'content' && style === 'oneImageBlackRight') ||
    (type === 'content' && style === 'oneImageBlackRightExtended') ||
    (type === 'content' && style === 'oneImage') ||
    (type === 'teachingsearch' && style === 'blog') ||
    (type === 'content' && style === 'pieChart') ||
    (type === 'hero' && style === 'partialNoFooter') ||
    (type === 'list' && style === 'staff') ||
    (type === 'blog' && style === 'multiImage') ||
    (type === 'list' && style === 'grid' && componentClass === 'instagram') ||
    (type === 'list' && style === 'curious-ui') ||
    (type === 'list' &&
      style === 'vertical' &&
      componentClass === 'compassion') ||
    (type === 'list' && style === 'ladder' && componentClass === 'events') ||
    (type === 'list' && style === 'blogs' && componentClass === 'blogs') ||
    (type === 'list' && style === 'horizontalBig') ||
    (type === 'list' && style === 'horizontal') ||
    (type === 'list' && style === 'imageList') ||
    type === 'horizontal-list' ||
    type === 'faq' ||
    type === 'give2' ||
    type === 'give' ||
    type === 'simple';
  const shouldHideInLocationsPage =
    (pageName === 'communities' &&
      type === 'list' &&
      style === 'grid' &&
      componentClass === 'instagram') ||
    (pageName === 'communities' &&
      type === 'list' &&
      style === 'vertical' &&
      componentClass === 'compassion') ||
    (pageName === 'communities' &&
      type === 'list' &&
      style === 'ladder' &&
      componentClass === 'events') ||
    (pageName === 'communities' &&
      type === 'list' &&
      style === 'blogs' &&
      componentClass === 'blogs');
  return isEditable && !shouldHideInLocationsPage;
};
