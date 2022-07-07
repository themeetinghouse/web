import React from 'react';

export const EditorContext = React.createContext({
  addContent: (value: any): any => null,
  deleteContent: (index: number): any => null,
  newContent: async (): Promise<void> => {
    null;
  },
  loadContent: async (filename: string): Promise<void> => {
    null;
  },
  editContent: (
    parents: (string | number)[],
    fieldName: string,
    value: any
  ): any => null,
  content: null,
});
