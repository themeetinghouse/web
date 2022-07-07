import { S3ProviderListOutputItem } from '@aws-amplify/storage';
import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { EditorContext } from './EditorContext';

type Props = {
  folder: string;
  onChange(url: string): void;
};

const ImageModal = (props: Props) => {
  const [files, setFiles] = useState<string[]>([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    try {
      const image = event?.target?.files?.[0];

      //  this.setState({ imageTypeWarning: !image?.name.endsWith('jpg') });

      if (image) {
        const filepath = 'static/images/editor/' + uuidv4() + image?.name;
        await Storage.put(filepath, image, {
          contentType: 'image/*',
          acl: 'public-read',
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const loadFiles = async () => {
    try {
      console.log(props.folder);
      const files1 = await Storage.list(props.folder);
      console.log({ files1: files1 });
      const mfiles1 = files1.map(async (z) => {
        return await Storage.get(z.key ?? '');
      });
      const z = await Promise.all(mfiles1);
      setFiles(z);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadFiles();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setShowImageModal(true);
        }}
      >
        Pick an Image
      </button>
      <Modal style={{ zIndex: 100001 }} isOpen={showImageModal}>
        <div>
          {files?.map((item) => {
            console.log(item);
            return (
              <div
                key={item}
                onClick={() => {
                  props.onChange(item);
                }}
              >
                <img src={item} width={80} height={60} />
              </div>
            );
          })}
        </div>
        <input
          type="file"
          accept="image/jpg"
          onChange={(e) => {
            handleImageUpload(e);
            loadFiles();
          }}
        />
        <Button
          onClick={() => {
            setShowImageModal(false);
          }}
        >
          Done
        </Button>
      </Modal>
    </>
  );
};

type PropsEditor = {
  parents: (string | number)[];
  list: Record<string, any>;
};
export const RenderEditorList = (props: PropsEditor): any => {
  const content = React.useContext(EditorContext);
  console.log({ parents: props.parents });
  console.log({ list: props.list });
  let currentItem: any = content.content;
  props.parents.forEach((z) => {
    currentItem = currentItem[z] as any;
  });
  console.log({ currentItem: currentItem });
  console.log({ list: props.list });
  return props.list?.map(
    (item: {
      type: any;
      default: any;
      fieldName: string;
      options: string[] | null | undefined;
      fields: any[];
      folder: string;
    }) => {
      switch (item.type) {
        case 'array':
          return (
            <div>
              {item.fieldName}:
              <div style={{ borderWidth: 1 }}>
                {(currentItem as any)[item.fieldName]?.map(
                  (z: any, index: number) => {
                    return (
                      <>
                        <RenderEditorList
                          key={index}
                          parents={[...props.parents, item.fieldName, index]}
                          list={item.fields}
                        />
                        <button
                          onClick={() => {
                            const arr1 = [
                              ...(currentItem as any)[item.fieldName],
                            ];
                            arr1.splice(index, 1);
                            content.editContent(
                              props.parents,
                              item.fieldName,
                              arr1
                            );
                          }}
                        >
                          delete item
                        </button>
                      </>
                    );
                  }
                )}
              </div>
              <button
                onClick={() => {
                  content.editContent(props.parents, item.fieldName, [
                    ...(currentItem as any)[item.fieldName],
                    item.default,
                  ]);
                }}
              >
                add item
              </button>
            </div>
          );
          break;
        case 'image':
          return (
            <>
              <input
                name={item.fieldName}
                type="text"
                value={(currentItem as any)[item.fieldName]}
                onChange={(value) => {
                  content.editContent(
                    props.parents,
                    item.fieldName,
                    value.target.value
                  );
                }}
              />

              <ImageModal
                onChange={(url) => {
                  content.editContent(props.parents, item.fieldName, url);
                }}
                folder={item.folder}
              ></ImageModal>
            </>
          );
          break;
        case 'string':
          return (
            <div>
              {item.fieldName}:
              {item.options ? (
                <select
                  value={(currentItem as any)[item.fieldName]}
                  onChange={(value) => {
                    content.editContent(
                      props.parents,
                      item.fieldName,
                      value.target.value
                    );
                  }}
                >
                  {item.options.map((z) => {
                    return (
                      <option key={z} value={z}>
                        {z}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input
                  name={item.fieldName}
                  type="text"
                  value={(currentItem as any)[item.fieldName]}
                  onChange={(value) => {
                    content.editContent(
                      props.parents,
                      item.fieldName,
                      value.target.value
                    );
                  }}
                />
              )}
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
                    props.parents,
                    item.fieldName,
                    !(currentItem as any)[item.fieldName]
                  );
                }}
              />
            </div>
          );
          break;
        case 'object':
          return (
            <RenderEditorList
              parents={[...props.parents, item.fieldName]}
              list={item.default as Record<string, any>}
            />
          );
          break;
        case 'default':
          return null;
      }
    }
  );
};

export const PageConfigEditor = () => {
  const content = React.useContext(EditorContext);

  return (
    <>
      <button
        onClick={() => {
          content.newContent();
        }}
      >
        New
      </button>
      <SaveModal />
      <LoadModal />
      <PageSettingsModal />
      <AddListModal />
    </>
  );
};

function LoadModal() {
  const [loadContent, setLoadContent] = useState<S3ProviderListOutputItem[]>(
    []
  );

  const content = React.useContext(EditorContext);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  useEffect(() => {
    const updateLoadContent = async () => {
      setLoadContent(await Storage.list('savedContent/'));
    };
    updateLoadContent();
  }, [saveModalVisible]);

  const loadFile = async (location: string) => {
    try {
      await content.loadContent(location);
    } catch (e) {
      console.log({ e: e });
    }
  };

  return (
    <>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setSaveModalVisible(true);
        }}
      >
        Load...
      </Button>
      <Modal isOpen={saveModalVisible} style={{ zIndex: 100000 }}>
        {loadContent.map((item) => {
          return (
            <div
              onClick={() => {
                loadFile(item.key ?? 'unknown');
                setSaveModalVisible(false);
              }}
              key={item.key}
            >
              {item.key?.replace('savedContent/', '')}
            </div>
          );
        })}

        <Button
          onClick={() => {
            setSaveModalVisible(false);
          }}
        >
          Cancel
        </Button>
      </Modal>
    </>
  );
}

function SaveModal() {
  const [savedContent, setSavedContent] = useState<S3ProviderListOutputItem[]>(
    []
  );
  const [saveLocation, setSaveLocation] = useState<string>('');

  const content = React.useContext(EditorContext);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  useEffect(() => {
    const updateSavedContent = async () => {
      setSavedContent(await Storage.list('savedContent/'));
    };
    updateSavedContent();
  }, [saveModalVisible]);

  const saveFile = async (location: string, json: any) => {
    try {
      await Storage.put('savedContent/' + location, json);
    } catch (e) {
      console.log({ e: e });
    }
  };

  return (
    <>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setSaveModalVisible(true);
        }}
      >
        Save...
      </Button>
      <Modal isOpen={saveModalVisible} style={{ zIndex: 100000 }}>
        {savedContent.map((item) => {
          return (
            <div key={item.key}>{item.key?.replace('savedContent/', '')}</div>
          );
        })}
        <div>
          Filename:
          <input
            type="text"
            value={saveLocation}
            onChange={(e) => {
              setSaveLocation(e.target.value);
            }}
          />
        </div>
        <Button
          onClick={() => {
            saveFile(saveLocation, content.content);
            setSaveModalVisible(false);
          }}
        >
          Done
        </Button>
      </Modal>
    </>
  );
}
function PageSettingsModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editorList, setEditorList] = useState<any>();
  useEffect(() => {
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
    <>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Page Settings
      </Button>
      <Modal isOpen={modalVisible} style={{ zIndex: 100000 }}>
        {editorList ? (
          <RenderEditorList parents={['page']} list={editorList} />
        ) : null}
        <Button
          onClick={() => {
            setModalVisible(false);
          }}
        >
          Done
        </Button>
      </Modal>
    </>
  );
}
function AddListModal() {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const content = React.useContext(EditorContext);
  const [addList, setAddList] = useState<any>();

  useEffect(() => {
    const updateEditorList = async () => {
      try {
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
  return (
    <>
      <Button
        style={{ zIndex: 100000 }}
        onClick={() => {
          setAddModalVisible(true);
        }}
      >
        Add Component
      </Button>
      <Modal isOpen={addModalVisible} style={{ zIndex: 100000 }}>
        {addList ? renderAddList(addList) : null}
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
}
