import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'reactstrap';
import { EditorContext } from './EditorContext';

export const renderEditorList = (
  parents: (string | number)[],
  list: Record<string, any>
): any => {
  const content = React.useContext(EditorContext);
  let currentItem: any = content.content;
  parents.forEach((z) => {
    currentItem = currentItem[z] as any;
  });
  console.log({ currentItem: currentItem });
  console.log({ list: list });
  return list?.map((item: { type: any; default: any; fieldName: string }) => {
    switch (item.type) {
      case 'string':
        return (
          <div>
            {item.fieldName}:
            <input
              name={item.fieldName}
              type="text"
              value={(currentItem as any)[item.fieldName]}
              onChange={(value) => {
                content.editContent(
                  parents,
                  item.fieldName,
                  value.target.value
                );
              }}
            />
          </div>
        );
        break;
      case 'boolean':
        return (
          <div>
            {item.fieldName}:{' '}
            <input
              name={item.fieldName}
              type="checkbox"
              checked={(currentItem as any)[item.fieldName]}
              onChange={(value) => {
                console.log(value.target.value);
                content.editContent(
                  parents,
                  item.fieldName,
                  !(currentItem as any)[item.fieldName]
                );
              }}
            />
          </div>
        );
        break;
      case 'object':
        return renderEditorList(
          [...parents, item.fieldName],
          item.default as Record<string, any>
        );
        break;
      case 'default':
        return null;
    }
  });
};

export const PageConfigEditor = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editorList, setEditorList] = useState<any>();
  const [addList, setAddList] = useState<any>();
  const content = React.useContext(EditorContext);

  useEffect(() => {
    const updateEditorList = async () => {
      try {
        const z = await fetch('/static/editor/PageEditorFields.json');
        const z1 = await z.json();
        setEditorList(z1);

        const z2 = await fetch('/static/editor/AddFields.json');
        const z3 = await z2.json();
        setAddList(z3);
      } catch (e) {
        console.log({ e: e });
      }
    };
    updateEditorList();
  }, []);
  const renderAddList = (list: Record<string, any>) => {
    return list?.map((item: any) => {
      return (
        <Button
          onClick={() => {
            content.addContent(item.content);
            setAddModalVisible(false);
          }}
          key={item.name}
        >
          {item.name}
        </Button>
      );
    });
  };

  console.log({ editorList: editorList });
  return (
    <>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Page Settings
      </Button>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setAddModalVisible(true);
        }}
      >
        Add Component
      </Button>
      <Modal isOpen={modalVisible} style={{ zIndex: 100000 }}>
        {editorList ? renderEditorList(['page'], editorList) : null}
        <Button
          onClick={() => {
            setModalVisible(false);
          }}
        >
          Done
        </Button>
      </Modal>
      <Modal isOpen={addModalVisible} style={{ zIndex: 100000 }}>
        {editorList ? renderAddList(addList) : null}
        <Button
          onClick={() => {
            setAddModalVisible(false);
          }}
        >
          Done
        </Button>
      </Modal>
    </>
  );
};
