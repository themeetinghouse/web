import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import FieldMap from './utils/FieldMap.json';
import { recurseEdit } from './Editor';
import {
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';
const FieldName: any = FieldMap;
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
          cacheControl: 'max-age=604800',
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
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      <button
        onClick={() => {
          setShowImageModal(true);
        }}
        type="button"
        style={{
          border: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <img src="/static/svg/Download.svg" width={15} height={15} />
      </button>
      <Modal style={{ zIndex: 100001 }} isOpen={showImageModal} size="xl">
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
    </div>
  );
};

type PropsEditor = {
  parents: (string | number)[];
  list: Record<string, any>;
};
export const RenderEditorList = (props: PropsEditor): any => {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  console.log({ parents: props.parents });
  console.log({ list: props.list });
  let currentItem: any = content;
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
            <div style={{ padding: 30, backgroundColor: 'gold' }}>
              <label>{FieldName[item.fieldName] ?? item.fieldName}:</label>
              <div style={{ borderWidth: 1 }}>
                {(currentItem as any)[item.fieldName]?.map(
                  (z: any, index: number) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flex: 1,
                          backgroundColor: index % 2 == 0 ? 'tomato' : 'green',
                          padding: 4,
                        }}
                      >
                        <RenderEditorList
                          key={index}
                          parents={[...props.parents, item.fieldName, index]}
                          list={item.fields}
                        />
                        <button
                          style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                          }}
                          onClick={() => {
                            const arr1 = [
                              ...(currentItem as any)[item.fieldName],
                            ];
                            arr1.splice(index, 1);
                            const newContent = recurseEdit(
                              content,
                              props.parents,
                              item.fieldName,
                              arr1
                            );
                            dispatch({
                              type: EditorPageActionType.UPDATE_CONTENT,
                              payload: newContent,
                            });
                          }}
                        >
                          <img
                            src="/static/svg/Delete.svg"
                            width={15}
                            height={15}
                          />
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
              <button
                style={{ backgroundColor: 'transparent', border: 'none' }}
                onClick={() => {
                  const newContent = recurseEdit(
                    content,
                    props.parents,
                    item.fieldName,
                    [...(currentItem as any)[item.fieldName], item.default]
                  );
                  dispatch({
                    type: EditorPageActionType.UPDATE_CONTENT,
                    payload: newContent,
                  });
                }}
              >
                <span>Add Image</span>
                <img src="/static/svg/Plus-Expand.svg" width={15} height={15} />
              </button>
            </div>
          );
          break;
        case 'image':
          return (
            <div
              style={{
                display: 'flex',
                flex: 1,
                backgroundColor: 'cyan',
                flexDirection: 'column',
              }}
            >
              <input
                name={item.fieldName}
                type="text"
                style={{
                  borderRadius: 0,
                  backgroundColor: 'teal',
                  border: '1px solid lightgrey',
                  padding: 8,
                }}
                value={(currentItem as any)[item.fieldName]}
                onChange={(value) => {
                  const newContent = recurseEdit(
                    content,
                    props.parents,
                    item.fieldName,
                    value.target.value
                  );
                  dispatch({
                    type: EditorPageActionType.UPDATE_CONTENT,
                    payload: newContent,
                  });
                }}
              />

              <ImageModal
                onChange={(url) => {
                  const newContent = recurseEdit(
                    content,
                    props.parents,
                    item.fieldName,
                    url
                  );
                  dispatch({
                    type: EditorPageActionType.UPDATE_CONTENT,
                    payload: newContent,
                  });
                }}
                folder={item.folder}
              ></ImageModal>
            </div>
          );
          break;
        case 'string':
          return (
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  flex: 1,
                  marginBottom: 4,
                  marginTop: 4,
                }}
              >
                {FieldName[item.fieldName] ?? item.fieldName}:
              </span>

              {item.options ? (
                <select
                  style={{
                    padding: 12,
                    flex: 1,
                    border: '1px solid lightgrey',
                    borderRadius: 0,
                  }}
                  value={(currentItem as any)[item.fieldName]}
                  onChange={(value) => {
                    const newContent = recurseEdit(
                      content,
                      props.parents,
                      item.fieldName,
                      value.target.value
                    );
                    dispatch({
                      type: EditorPageActionType.UPDATE_CONTENT,
                      payload: newContent,
                    });
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
                  style={{
                    padding: 8,

                    flex: 1,
                    border: '1px solid lightgrey',
                    borderRadius: 0,
                  }}
                  name={item.fieldName}
                  type="text"
                  value={(currentItem as any)[item.fieldName]}
                  onChange={(value) => {
                    const newContent = recurseEdit(
                      content,
                      props.parents,
                      item.fieldName,
                      value.target.value
                    );

                    console.log({ newContent });
                    dispatch({
                      type: EditorPageActionType.UPDATE_CONTENT,
                      payload: newContent,
                    });
                  }}
                />
              )}
            </label>
          );
          break;
        case 'boolean':
          return (
            <div>
              <label>{FieldName[item.fieldName] ?? item.fieldName}: </label>
              <input
                name={item.fieldName}
                type="checkbox"
                checked={(currentItem as any)[item.fieldName]}
                onChange={(value) => {
                  console.log(value.target.value);
                  const newContent = recurseEdit(
                    content,
                    props.parents,
                    item.fieldName,
                    !(currentItem as any)[item.fieldName]
                  );
                  dispatch({
                    type: EditorPageActionType.UPDATE_CONTENT,
                    payload: newContent,
                  });
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
