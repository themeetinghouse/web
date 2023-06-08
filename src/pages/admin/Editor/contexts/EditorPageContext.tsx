import React, { createContext, Dispatch, useReducer } from 'react';
export enum EditorPageActionType {
  NAVIGATE_TO = 'NAVIGATE_TO',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  UPDATE_CONTENT = 'UPDATE_CONTENT',
  SET_EDIT_MODE = 'SET_EDIT_MODE',
  UPDATE_SAVED_STATUS = 'UPDATE_SAVED_STATUS',
  SET_SHOW_ADD_COMPONENT_MODAL = 'SET_SHOW_ADD_COMPONENT_MODAL',
}
export enum EditorPage {
  EDIT_PAGE = 'EDIT_PAGE',
  PUBLIC_PAGE = 'PUBLIC_PAGE',
  GLOBAL_SETTINGS_PAGE = 'GLOBAL_SETTINGS_PAGE',
  MEDIA_PAGE = 'MEDIA_PAGE',
  NAVIGATION_SETTINGS_PAGE = 'NAVIGATION_SETTINGS_PAGE',
  FOOTER_SETTINGS_PAGE = 'FOOTER_SETTINGS_PAGE',
  DRAFT_PAGE = 'DRAFT_PAGE',
  BACKUP_PAGE = 'BACKUP_PAGE',
  TEMPLATE_PAGE = 'TEMPLATE_PAGE',
  PDF_FILES_PAGE = 'PDF_FILES_PAGE',
  IMAGE_FILES_PAGE = 'IMAGE_FILES_PAGE',
}

export type EditorPageState = {
  currentPage?: EditorPage | null;
  isDraft: boolean;
  isBackup: boolean;
  isSaved: boolean;
  showAddComponentModal: boolean;
  content?: any;
  data?: any;
};

export type EditorPageAction = {
  type: any;
  payload?: any;
};

const initialState = {
  currentPage: EditorPage.PUBLIC_PAGE,
  content: null,
  isDraft: false,
  isBackup: false,
  isSaved: false,
  showAddComponentModal: false,
  data: null,
};

const EditorPageContext = createContext<{
  state: EditorPageState;
  dispatch: Dispatch<EditorPageAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const EditorPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(EditorPageReducer, initialState);

  return (
    <EditorPageContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorPageContext.Provider>
  );
};
export function useEditorPageContext() {
  const context = React.useContext(EditorPageContext);
  if (context === undefined) {
    throw new Error(
      'useEditorPageContext must be used within a EditorPageProvider'
    );
  }
  return context;
}
export default function EditorPageReducer(
  state: EditorPageState,
  action: EditorPageAction
): EditorPageState {
  switch (action.type) {
    case EditorPageActionType.NAVIGATE_TO:
      let confirmed;
      if (state.currentPage === EditorPage.EDIT_PAGE && !state.isSaved) {
        confirmed = confirm(
          'Are you sure you want to leave this page? Changes you made may not be saved.'
        );
        if (!confirmed) return state;
        state.isBackup = false;
        state.isDraft = false;
        state.content = null;
      } else state.isSaved = false;

      return {
        ...state,
        currentPage: action.payload,
      };
    case EditorPageActionType.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: EditorPage.EDIT_PAGE,
        content: action.payload,
      };
    }
    case EditorPageActionType.UPDATE_CONTENT: {
      return {
        ...state,
        content: action.payload,
      };
    }
    case EditorPageActionType.UPDATE_SAVED_STATUS: {
      return {
        ...state,
        isSaved: action.payload,
      };
    }
    case EditorPageActionType.SET_EDIT_MODE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case EditorPageActionType.SET_SHOW_ADD_COMPONENT_MODAL: {
      return {
        ...state,
        showAddComponentModal: action.payload,
      };
    }
    default:
      return state;
  }
}
export { EditorPageProvider, EditorPageContext };
