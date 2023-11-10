import React from 'react';
import {
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';
import { Modal } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import { RenderItem } from 'components/RenderRouter/RenderRouter';
import TMHInput from './components/TMHInput';
import { Storage } from 'aws-amplify';
import CreatableSelect from 'react-select/creatable';
import DataLoader from 'components/RenderRouter/DataLoader';
import Select, { SingleValue } from 'react-select';
import { TMHLocation } from 'API';
import UploadModal from './components/UploadModal';
function AddFileComponent({
  setNewLink,
  setIsFileLink,
}: {
  setNewLink: (url: string) => void;
  setIsFileLink: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [pdfs, setPdfs] = React.useState<string[]>([]);
  const [selectedPdf, setSelectedPdf] = React.useState<string | undefined>(
    undefined
  );
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [shouldShow, setShouldShow] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        const pdfsList = await Storage.list('editor/pdfs/');
        const pdfsKeyList = pdfsList.map((item) => item.key || '');
        setPdfs(pdfsKeyList);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      if (selectedPdf) {
        if (selectedPdf === 'upload') setShowUploadModal(true);
        else setShowUploadModal(false);
      }
    })();
  }, [selectedPdf]);
  React.useEffect(() => {
    setIsFileLink(shouldShow);
  }, [shouldShow]);
  React.useEffect(() => {
    if (selectedPdf) setNewLink(selectedPdf);
  }, [selectedPdf]);
  console.log({ selectedPdf });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <div style={{ margin: '8px 0px', display: 'flex', flexDirection: 'row' }}>
        <label>Do you want to link to a PDF?</label>
        <TMHInput
          type="checkbox"
          checked={shouldShow || Boolean(selectedPdf)}
          style={{ marginLeft: 4 }}
          onChange={(e) => {
            setShouldShow(e.target.checked);
          }}
        />
      </div>
      {shouldShow ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
          }}
        >
          <Select
            defaultValue={{
              label: 'Upload New Image',
              value: 'upload',
            }}
            value={{
              label: selectedPdf ?? '',
              value: selectedPdf ?? '',
            }}
            options={[
              {
                label: 'Upload New PDF',
                value: 'upload',
              },
              ...pdfs.map((item) => ({
                label: item ?? '',
                value: item ?? '',
              })),
            ]}
            styles={{
              control: (provided: any) => ({
                ...provided,
                display: 'flex',
                flex: 1,
              }),
              container: (provided: any) => ({
                ...provided,
                display: 'flex',
                flex: 1,
              }),
            }}
            onChange={async function (
              newValue: SingleValue<{
                label: string;
                value: string;
              }>
            ): Promise<void> {
              console.log({ newValue });
              if (!newValue) return;
              if (newValue.value === 'upload') {
                setShowUploadModal(true);
              } else {
                const newPdf = pdfs.find((item) => item === newValue.value);
                setSelectedPdf(newPdf);
              }
            }}
          ></Select>
        </div>
      ) : null}
      <UploadModal
        onUpload={(newKey: string) => {
          const tempPdfs = [...pdfs];
          tempPdfs.push(newKey);
          setPdfs(tempPdfs);
          setSelectedPdf(newKey);
        }}
        uploadLocation="editor/pdfs/"
        contentType="application/pdf"
        showUploadModal={showUploadModal}
        setShowUploadModal={setShowUploadModal}
      />
    </div>
  );
}
function AddImageComponent({
  currentImage,
  setNewImage,
  hidePreview,
}: {
  currentImage: string;
  setNewImage: (url: string) => void;
  hidePreview?: boolean;
}) {
  const [images, setImages] = React.useState<string[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>(
    currentImage
  );
  const [url, setUrl] = React.useState('');
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        const imageList = await Storage.list('editor/images/');
        const imageKeyList = imageList.map((item) => item.key || '');
        setImages(imageKeyList);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  const getStorageImageURL = async (key: string) => {
    if (!key) return;
    try {
      let newKey = key;
      if (key[0] === '/') {
        newKey = key.slice(1);
      }

      const url = await Storage.get(newKey);
      return url;
    } catch (error) {
      console.error({ error });
      return '';
    }
  };
  React.useEffect(() => {
    (async () => {
      if (selectedImage) {
        if (selectedImage === 'upload') setShowUploadModal(true);
        else setShowUploadModal(false);
        setNewImage(selectedImage);
        const url = await getStorageImageURL(selectedImage ?? '');
        if (url) {
          setUrl(url);
        }
      }
    })();
  }, [selectedImage]);
  React.useEffect(() => {
    setSelectedImage(currentImage);
  }, [currentImage]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <div style={{ margin: '8px 0px' }}>
        <label>Which image would you like to show?</label>
        <Select
          defaultValue={{
            label: 'Upload New Image',
            value: 'upload',
          }}
          value={{
            label: selectedImage ?? '',
            value: selectedImage ?? '',
          }}
          options={[
            {
              label: 'Upload New Image',
              value: 'upload',
            },
            ...images.map((item) => ({
              label: item ?? '',
              value: item ?? '',
            })),
          ]}
          onChange={async function (
            newValue: SingleValue<{
              label: string;
              value: string;
            }>
          ): Promise<void> {
            console.log({ newValue });
            if (!newValue) return;
            if (newValue.value === 'upload') {
              setShowUploadModal(true);
            } else {
              const newImage = images.find((item) => item === newValue.value);
              console.log({ newImage });
              setSelectedImage(newImage);
              const url = await getStorageImageURL(newImage ?? '');
              if (url) {
                setUrl(url);
              }
            }
          }}
        ></Select>
        <UploadModal
          onUpload={(newKey: string) => {
            const tempImages = [...images];
            tempImages.push(newKey);
            setImages(tempImages);
            setSelectedImage(newKey);
          }}
          uploadLocation="editor/images/"
          contentType="image/jpeg"
          showUploadModal={showUploadModal}
          setShowUploadModal={setShowUploadModal}
        />
        {url && !hidePreview ? <img src={url} width={150} /> : null}
      </div>
    </div>
  );
}
export default function PageComponentEditor() {
  const { state, dispatch } = useEditorPageContext();

  const { componentToEdit } = state;
  React.useEffect(() => {
    (async () => {
      const response = await fetch('/static/editor/AddFields.json');
      const json = await response.json();
      console.log({ json });
    })();
  }, []);
  return (
    <Modal
      size="xl"
      isOpen={Boolean(componentToEdit)}
      onClose={() =>
        dispatch({
          type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
          payload: null,
        })
      }
    >
      <div style={{ padding: 16 }} className="EditorConfigurationParent">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              flex: 1,
              fontSize: 24,
              letterSpacing: 1,
              fontWeight: '400',
            }}
          >
            Configure Component
          </span>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: 24,
              display: 'flex',
              justifyContent: 'flex-start',
            }}
            onClick={() => {
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            }}
          >
            <span>X</span>
          </button>
        </div>

        <EditComponent />
      </div>
    </Modal>
  );
}
function FAQListItem({
  component,
  setComponent,
  step,
  setStep,
  item,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
  item: any;
}) {
  const [isFileLink, setIsFileLink] = React.useState(false);
  const handleRemoveItem = (index: number) => {
    const newList = component.list.filter(
      (item: any, i: number) => i !== index
    );
    if (index === 0) {
      setStep(1);
    } else if (index === component.list.length - 1) {
      setStep(index);
    }
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemUp = (index: number) => {
    if (index === 0) return;
    if (index === step - 1) setStep(step - 1);
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemDown = (index: number) => {
    if (index === component.list.length - 1) return;
    if (index === step - 1) setStep(step + 1);
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const [pages, setPages] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 8,
          }}
        >
          {`FAQ Item ${step}`}
          <div style={{ flex: 1, gap: 8 }}>
            <label>What is the type of this item?</label>
            <Select
              value={{
                label: item?.type,
                value: item?.type,
              }}
              options={[
                { label: 'link', value: 'link' },
                { label: 'text', value: 'text' },
                { label: 'button', value: 'button' },
                { label: 'question', value: 'question' },
              ]}
              onChange={function (
                newValue: SingleValue<{
                  label: string;
                  value: string;
                }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                const newList = component.list;
                newList[step - 1].type = newValue.value;
                if (newValue.value === 'question') {
                  newList[step - 1].answer = [''];
                } else {
                  delete newList[step - 1].answer;
                }
                setComponent((prev: any) => ({
                  ...prev,
                  list: newList,
                }));
              }}
            ></Select>
          </div>
          {item?.type === 'question' ? (
            <div style={{ gap: 8 }}>
              <TMHInput
                label="Question"
                value={item?.question}
                onChange={(e: any) => {
                  const newList = component.list;
                  newList[step - 1].question = e.target.value;
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              ></TMHInput>
              {item?.answer?.length
                ? item?.answer?.map((answer: any, index2: number) => (
                    <div
                      key={answer.index2}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        flex: 1,
                      }}
                    >
                      <label>Answer {index2 + 1}</label>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flex: 1,
                        }}
                      >
                        <TMHInput
                          style={{ flex: 1 }}
                          value={item?.answer?.[index2]}
                          onChange={(e: any) => {
                            const newList = component.list;
                            newList[step - 1].answer[index2] = e.target.value;
                            setComponent((prev: any) => ({
                              ...prev,
                              list: newList,
                            }));
                          }}
                        ></TMHInput>

                        <button
                          style={{
                            marginTop: 4,
                            border: 'none',
                            backgroundColor: 'transparent',
                          }}
                          onClick={() => {
                            console.log('Removing...');
                            const newList = component.list;
                            const temp = newList[step - 1].answer;
                            temp.splice(index2, 1);
                            newList[step - 1].answer = temp;
                            setComponent((prev: any) => ({
                              ...prev,
                              list: newList,
                            }));
                          }}
                        >
                          <img src="/static/svg/Delete.svg"></img>
                        </button>
                      </div>
                    </div>
                  ))
                : null}

              <LocationsTMHButton
                link
                style={{ marginLeft: -16 }}
                onClick={() => {
                  const newList = component.list;
                  newList[step - 1].answer.push('');
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              >
                Add {item?.answer?.length ? 'Another Answer' : 'an Answer'}
              </LocationsTMHButton>
            </div>
          ) : item?.type === 'text' ? (
            <TMHInput
              label="Text"
              value={item?.title}
              onChange={(e: any) => {
                const newList = component.list;
                newList[step - 1].title = e.target.value;
                setComponent((prev: any) => ({
                  ...prev,
                  list: newList,
                }));
              }}
            ></TMHInput>
          ) : item?.type === 'link' ? (
            <>
              <TMHInput
                label="Link Label"
                value={item?.title}
                onChange={(e: any) => {
                  const newList = component.list;
                  newList[step - 1].title = e.target.value;
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              ></TMHInput>
              {!isFileLink ? (
                <div>
                  <label>Where do you want the button to link to?</label>
                  <CreatableSelect
                    formatCreateLabel={(inputValue) =>
                      `Add external link "${inputValue}"`
                    }
                    styles={{
                      control: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                        marginTop: 4,
                      }),
                      container: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                      }),
                    }}
                    value={{
                      label: item.navigateTo,
                      value: item.navigateTo,
                    }}
                    onChange={(newValue) => {
                      if (!newValue) return;
                      const newList = component.list;
                      newList[step - 1].navigateTo = newValue.value;
                      setComponent((prev: any) => ({
                        ...prev,
                        list: newList,
                      }));
                    }}
                    placeholder="Select Page/Enter Link"
                    options={pages.map((item: any) => ({
                      label: item,
                      value: item,
                    }))}
                  ></CreatableSelect>
                </div>
              ) : null}
              <AddFileComponent
                setIsFileLink={setIsFileLink}
                setNewLink={(s) => {
                  const newList = component.list;
                  newList[step - 1].navigateTo = s;
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              />
            </>
          ) : item?.type === 'button' ? (
            <>
              <TMHInput
                label="Link Label"
                value={item?.title}
                onChange={(e: any) => {
                  const newList = component.list;
                  newList[step - 1].title = e.target.value;
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              ></TMHInput>
              <div>
                <label>Where do you want the button to link to?</label>
                <CreatableSelect
                  formatCreateLabel={(inputValue) =>
                    `Add external link "${inputValue}"`
                  }
                  styles={{
                    control: (provided: any) => ({
                      ...provided,
                      display: 'flex',
                      flex: 1,
                      marginTop: 4,
                    }),
                    container: (provided: any) => ({
                      ...provided,
                      display: 'flex',
                      flex: 1,
                    }),
                  }}
                  value={{
                    label: item.navigateTo,
                    value: item.navigateTo,
                  }}
                  onChange={(newValue) => {
                    if (!newValue) return;
                    const newList = component.list;
                    newList[step - 1].navigateTo = newValue.value;
                    setComponent((prev: any) => ({
                      ...prev,
                      list: newList,
                    }));
                  }}
                  placeholder="Select Page/Enter Link"
                  options={pages.map((item: any) => ({
                    label: item,
                    value: item,
                  }))}
                ></CreatableSelect>
              </div>
            </>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            justifyContent: 'space-evenly',
          }}
        >
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() => handleRemoveItem(step - 1)}
          >
            <img src="/static/svg/Delete.svg"></img>
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() => handleMoveItemUp(step - 1)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(-90deg' }}
            ></img>
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() => handleMoveItemDown(step - 1)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(90deg' }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQListEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [newItem, setNewItem] = React.useState({
    text: '',
    title: '',
    navigateTo: '',
    type: '',
    question: '',
    answer: [],
  });

  const handleAddItem = () => {
    const newList = component.list;
    newList.push(newItem);
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
    setStep(newList.length);
    setNewItem({
      text: '',
      title: '',
      navigateTo: '',
      type: '',
      question: '',
      answer: [],
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "All Teaching Series"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="What do you want the body text to say?"
            maxLength={300}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Explore the life and teaching of Jesus as well as practical applications for your daily life."'
            value={component.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
        </div>
      ) : (
        <div
          style={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span style={{ flex: 1 }}>FAQ Items</span>
              <LocationsTMHButton onClick={handleAddItem} link style={{}}>
                Add a new item
              </LocationsTMHButton>
            </div>

            <p style={{ fontSize: 12 }}>
              Add an FAQ item to the list below. You can add as many as you
              like.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {component.list
              .slice(step - 1, step - 1 + 1)
              .map((item: any, index: number) => (
                <FAQListItem
                  key={index}
                  item={item}
                  step={step}
                  setStep={setStep}
                  component={component}
                  setComponent={setComponent}
                />
              ))}
          </div>
        </div>
      )}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        {step !== 0 ? (
          <LocationsTMHButton
            onClick={() => {
              if (step !== 0) setStep((prev: any) => prev - 1);
            }}
          >
            Back
          </LocationsTMHButton>
        ) : null}
        {step !== component.list.length - 1 ? (
          <LocationsTMHButton
            onClick={() => {
              if (step === component.list.length) {
                const newContent = content;
                if (
                  state.editIndex !== undefined &&
                  state.editIndex !== null &&
                  state.editIndex >= 0
                ) {
                  newContent.page.content[state.editIndex] = component;
                } else {
                  newContent.page.content.push(component);
                }
                dispatch({
                  type: EditorPageActionType.UPDATE_CONTENT,
                  payload: newContent,
                });
                dispatch({
                  type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                  payload: null,
                });
              } else setStep((prev: any) => prev + 1);
            }}
          >
            {step > 0 && step < component.list?.length
              ? 'Next FAQ Item'
              : 'Next'}
          </LocationsTMHButton>
        ) : null}
        <LocationsTMHButton
          outline
          onClick={() => {
            const newContent = content;
            if (
              state.editIndex !== undefined &&
              state.editIndex !== null &&
              state.editIndex >= 0
            ) {
              newContent.page.content[state.editIndex] = component;
            } else {
              newContent.page.content.push(component);
            }

            dispatch({
              type: EditorPageActionType.UPDATE_CONTENT,
              payload: newContent,
            });
            dispatch({
              type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
              payload: null,
            });
          }}
        >
          {'Save'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function ImageWithTextListItem({
  index,
  item,
  component,
  setComponent,
  pages,
}: {
  index: number;
  item: any;
  component: any;
  setComponent: any;
  pages: string[];
}) {
  const [isFileLink, setIsFileLink] = React.useState(false);
  const handleRemoveItem = (index: number) => {
    const newList = component.list.filter(
      (item: any, i: number) => i !== index
    );
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemUp = (index: number) => {
    if (index === 0) return;
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemDown = (index: number) => {
    if (index === component.list.length - 1) return;
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <TMHInput
            label="What is the title of this item?"
            value={item.title}
            onChange={(e) => {
              const newList = component.list;
              newList[index].title = e.target.value;
              setComponent((prev: any) => ({
                ...prev,
                list: newList,
              }));
            }}
          />
          <TMHInput
            label="What is the text of this item?"
            value={item.text}
            onChange={(e) => {
              const newList = component.list;
              newList[index].text = e.target.value;
              setComponent((prev: any) => ({
                ...prev,
                list: newList,
              }));
            }}
          />
          <div>
            {!isFileLink ? (
              <>
                <label>Where do you want the button to link to?</label>
                <CreatableSelect
                  formatCreateLabel={(inputValue) =>
                    `Add external link "${inputValue}"`
                  }
                  styles={{
                    control: (provided: any) => ({
                      ...provided,
                      display: 'flex',
                      flex: 1,
                      marginTop: 4,
                    }),
                    container: (provided: any) => ({
                      ...provided,
                      display: 'flex',
                      flex: 1,
                    }),
                  }}
                  value={{
                    label: item.navigateTo,
                    value: item.navigateTo,
                  }}
                  onChange={(newValue) => {
                    console.log({ newValue });
                    if (!newValue) return;
                    const newList = component.list;
                    newList[index].navigateTo = newValue.value;
                    setComponent((prev: any) => ({
                      ...prev,
                      list: newList,
                    }));
                  }}
                  placeholder="Select Page/Enter Link"
                  options={pages.map((item: any) => ({
                    label: item,
                    value: item,
                  }))}
                ></CreatableSelect>
              </>
            ) : null}
            <AddFileComponent
              setIsFileLink={setIsFileLink}
              setNewLink={(s) => {
                const newList = component.list;
                newList[index].navigateTo = s;
                setComponent((prev: any) => ({
                  ...prev,
                  list: newList,
                }));
              }}
            />
          </div>
          <AddImageComponent
            hidePreview
            currentImage={item.imageSrc}
            setNewImage={(src) => {
              const newList = component.list;
              newList[index].imageSrc = src;
              setComponent((prev: any) => ({
                ...prev,
                list: newList,
              }));
            }}
          />
          <TMHInput
            label="What is the image alt(accessibility description)?"
            value={item.imageAlt}
            onChange={(e) => {
              const newList = component.list;
              newList[index].imageAlt = e.target.value;
              setComponent((prev: any) => ({
                ...prev,
                list: newList,
              }));
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            justifyContent: 'space-evenly',
          }}
        >
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleRemoveItem(index)}
          >
            <img src="/static/svg/Delete.svg"></img>
          </button>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleMoveItemUp(index)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(-90deg' }}
            ></img>
          </button>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleMoveItemDown(index)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(90deg' }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
function ImageWithTextList({
  component,
  setComponent,
}: {
  component: any;
  setComponent: any;
}) {
  const [showAddNew, setShowAddNew] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    text: '',
    title: 'Find Out More',
    navigateTo: '/kids-and-youth',
    imageSrc: '',
    imageAlt: '',
  });
  const [pages, setPages] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);

  const handleAddItem = () => {
    const newList = component.list;
    newList.push(newItem);
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
    setShowAddNew(false);
    setNewItem({
      text: '',
      title: 'Find Out More',
      navigateTo: '/kids-and-youth',
      imageSrc: '',
      imageAlt: '',
    });
  };
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <label>Calls to action</label>
      <p style={{ fontSize: 12 }}>
        Add a list item to the list below. You can add as many as you like, but
        we recommend 3-5.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          flex: 1,
        }}
      >
        {showAddNew ? (
          <div>
            <TMHInput
              label="What is the title of this item?"
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "Sunday Teaching"'
              value={newItem.title}
              onChange={(e: any) => {
                setNewItem({ ...newItem, title: e.target.value });
              }}
            />
            <TMHInput
              label="What is the text of this item?"
              value={newItem.text}
              onChange={(e) => {
                setNewItem({ ...newItem, text: e.target.value });
              }}
            />

            <div>
              <label>Where do you want the button to link to?</label>
              <CreatableSelect
                formatCreateLabel={(inputValue) =>
                  `Add external link "${inputValue}"`
                }
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    display: 'flex',
                    flex: 1,
                    marginTop: 4,
                  }),
                  container: (provided: any) => ({
                    ...provided,
                    display: 'flex',
                    flex: 1,
                  }),
                }}
                value={{
                  label: newItem.navigateTo,
                  value: newItem.navigateTo,
                }}
                onChange={(newValue) => {
                  console.log({ newValue });
                  if (!newValue) return;
                  setNewItem({ ...newItem, navigateTo: newValue.value });
                }}
                placeholder="Select Page/Enter Link"
                options={pages.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
              ></CreatableSelect>
            </div>
            <AddImageComponent
              currentImage={newItem.imageSrc}
              setNewImage={(src) => {
                setNewItem((prev) => ({ ...prev, imageSrc: src }));
              }}
            />
            <TMHInput
              label="What is the image alt(accessibility description)?"
              value={newItem.imageAlt}
              onChange={(e) => {
                setNewItem({ ...newItem, imageAlt: e.target.value });
              }}
            />
          </div>
        ) : (
          component.list.map((item: any, index: number) => (
            <ImageWithTextListItem
              key={item.navigateTo}
              setComponent={setComponent}
              component={component}
              pages={pages}
              item={item}
              index={index}
            />
          ))
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
          }}
        >
          <LocationsTMHButton
            style={{ marginTop: 20 }}
            onClick={() => (showAddNew ? handleAddItem() : setShowAddNew(true))}
          >
            {showAddNew ? 'Add link' : 'Add a new link'}
          </LocationsTMHButton>
          {showAddNew ? (
            <LocationsTMHButton
              outline
              style={{ marginTop: 20 }}
              onClick={() => setShowAddNew(false)}
            >
              Cancel
            </LocationsTMHButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
function ImagesWithTextEdit({
  step,
  component,
  setComponent,
  setStep,
  noBodyText,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
  noBodyText?: boolean;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "All Teaching Series"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          {!noBodyText ? (
            <TMHInput
              label="What do you want the body text to say?"
              maxLength={300}
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "Explore the life and teaching of Jesus as well as practical applications for your daily life."'
              value={component.text1}
              onChange={(e) =>
                setComponent((prev: any) => ({
                  ...prev,
                  text1: e.target.value,
                }))
              }
            />
          ) : null}
        </div>
      ) : step === 1 ? (
        <ImageWithTextList component={component} setComponent={setComponent} />
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 1) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 1 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function TeachingVideoEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [playlists, setPlaylists] = React.useState<
    Array<{
      name: string;
      id: string;
    }>
  >([]);
  React.useEffect(() => {
    (async () => {
      const response = await fetch('/static/data/import-video.json');
      const json = await response.json();
      const ids = json
        .filter((data: any) => data?.id)
        .map((item: any) => ({ name: item.name, id: item.id }));
      setPlaylists(ids);
    })();
  }, []);
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "All Teaching Series"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="What do you want the body text to say?"
            maxLength={300}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "This playlist contains all of our teaching videos for a particular topic"'
            value={component.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
          <div>
            <label>Which series playlist do you want to display?</label>
            <Select
              value={{
                label: component?.subclass,
                value: component?.subclass,
              }}
              options={playlists.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  subclass: newValue.value,
                }));
              }}
            ></Select>
          </div>
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function TeachingSeriesEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "All Teaching Series"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />

          <div>
            <label>Which series playlist do you want to display?</label>
            <Select
              value={{
                label: component?.subclass,
                value: component?.subclass,
              }}
              options={[
                {
                  label: 'adult-sunday',
                  value: 'adult-sunday',
                },
                {
                  label: 'ky-kids',
                  value: 'ky-kids',
                },
              ]}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  subclass: newValue.value,
                }));
              }}
            ></Select>
          </div>
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function VerticalBlogEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="Do you want to skip the first item in the list?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            value={component?.skipFirstPost}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                skipFirstPost: e.target.checked,
              }))
            }
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function EventsEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Upcoming Events"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />

          <TMHInput
            maxLength={350}
            label="What facebook page id do you want to use?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "336457083044176"'
            value={component?.facebookEvents?.[0]}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                facebookEvents: [e.target.value],
              }))
            }
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
// Grids
function ImageTextGridEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [locations, setLocations] = React.useState<TMHLocation[]>([]);
  React.useEffect(() => {
    (async () => {
      const locations = await DataLoader.loadLocations();
      setLocations(locations);
    })();
  }, []);
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Search the Blog"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
          <div>
            <label>Site ID</label>
            <Select
              value={{
                label: component?.filterValue,
                value: component?.filterValue,
              }}
              options={locations.map((location) => ({
                value: location.id,
                label: location.id,
              }))}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  filterValue: newValue.value,
                }));
              }}
            ></Select>
          </div>
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function VideoGridEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Search the Blog"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }

              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function InstagramEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [locations, setLocations] = React.useState<TMHLocation[]>([]);
  React.useEffect(() => {
    (async () => {
      const locations = await DataLoader.loadLocations();
      setLocations(locations);
    })();
  }, []);
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label>Site ID</label>
            <Select
              value={{
                label: component?.filterValue,
                value: component?.filterValue,
              }}
              options={locations.map((location) => ({
                value: location.id,
                label: location.id,
              }))}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  filterValue: newValue.value,
                }));
              }}
            ></Select>
          </div>
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function LatestBlogsEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const [pages, setPages] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Search the Blog"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            max={10}
            min={1}
            label="How many posts do you want to show?"
            labelStyle={{ flex: 0 }}
            type="number"
            placeholder="e.g. 2"
            value={component?.limit}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                limit: Number(e.target.value),
              }));
            }}
          />
          <TMHInput
            label={`Would you like to hide the button?`}
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.hideAllBlogsButton}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                hideAllBlogsButton: e.target.checked,
              }))
            }
          />
          {!component?.hideAllBlogsButton ? (
            <div>
              <label>Where do you want the button to link to?</label>
              <CreatableSelect
                formatCreateLabel={(inputValue) =>
                  `Add external link "${inputValue}"`
                }
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    display: 'flex',
                    flex: 1,
                    marginTop: 4,
                  }),
                  container: (provided: any) => ({
                    ...provided,
                    display: 'flex',
                    flex: 1,
                  }),
                }}
                value={{
                  label: component.button1Action,
                  value: component.button1Action,
                }}
                onChange={(newValue) => {
                  console.log({ newValue });
                  if (!newValue) return;
                  setComponent((prev: any) => ({
                    ...prev,
                    button1Action: newValue.value,
                  }));
                }}
                placeholder="Select Page/Enter Link"
                options={pages.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
              ></CreatableSelect>
              <TMHInput
                label="What do you want the button label to be?"
                maxLength={60}
                labelStyle={{ flex: 0 }}
                placeholder='e.g. "View All Blogs"'
                value={component.button1Label}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    button1Label: e.target.value,
                  }))
                }
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function FilterOptionsEdit({
  component,
  setComponent,
}: {
  component: any;
  setComponent: any;
}) {
  // rename this component
  const [showAddNew, setShowAddNew] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    id: '',
    label: '',
  });
  const handleRemoveItem = (index: number) => {
    const newList = component.list.filter(
      (item: any, i: number) => i !== index
    );
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemUp = (index: number) => {
    if (index === 0) return;
    const newList = component.filterOptions;
    const item = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      filterOptions: newList,
    }));
  };
  const handleMoveItemDown = (index: number) => {
    if (index === component.filterOptions.length - 1) return;
    const newList = component.filterOptions;
    const item = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      filterOptions: newList,
    }));
  };
  const handleAddItem = () => {
    const newList = component.filterOptions;
    newList.push(newItem);
    setComponent((prev: any) => ({
      ...prev,
      filterOptions: newList,
    }));
    setShowAddNew(false);
    setNewItem({
      id: '',
      label: '',
    });
  };
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <label>Filter options for staff</label>
      <p style={{ fontSize: 12 }}>
        These are the options that will be available to users when they are
        filtering the list of people. In order for a user to show up under a
        particular filter, the ID must exist in the &quot;Sites&quot; field of
        the user. This can be set in the People Manager page under admin.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {component.filterOptions.map((item: any, index: number) => (
          <div
            key={item.index}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <TMHInput
                  label="ID"
                  value={item.id}
                  onChange={(e) => {
                    const newList = component.filterOptions;
                    newList[index].id = e.target.value;
                    setComponent((prev: any) => ({
                      ...prev,
                      filterOptions: newList,
                    }));
                  }}
                />
                <TMHInput
                  label="Label"
                  value={item.label}
                  onChange={(e) => {
                    const newList = component.filterOptions;
                    newList[index].label = e.target.value;
                    setComponent((prev: any) => ({
                      ...prev,
                      filterOptions: newList,
                    }));
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  justifyContent: 'space-evenly',
                }}
              >
                <button
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  onClick={() => handleRemoveItem(index)}
                >
                  <img src="/static/svg/Delete.svg"></img>
                </button>
                <button
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  onClick={() => handleMoveItemUp(index)}
                >
                  <img
                    src="/static/svg/Arrow.svg"
                    style={{ transform: 'rotate(-90deg' }}
                  ></img>
                </button>
                <button
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  onClick={() => handleMoveItemDown(index)}
                >
                  <img
                    src="/static/svg/Arrow.svg"
                    style={{ transform: 'rotate(90deg' }}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        ))}
        {showAddNew ? (
          <div>
            <TMHInput
              label="ID"
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "OAKV"'
              value={newItem.id}
              onChange={(e: any) => {
                setNewItem({ ...newItem, id: e.target.value });
              }}
            />
            <TMHInput
              label="Label"
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "Oakville"'
              value={newItem.label}
              onChange={(e: any) => {
                setNewItem({ ...newItem, label: e.target.value });
              }}
            />
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
          }}
        >
          <LocationsTMHButton
            style={{ marginTop: 20 }}
            onClick={() => (showAddNew ? handleAddItem() : setShowAddNew(true))}
          >
            {showAddNew ? 'Add link' : 'Add a new link'}
          </LocationsTMHButton>
          {showAddNew ? (
            <LocationsTMHButton
              outline
              style={{ marginTop: 20 }}
              onClick={() => setShowAddNew(false)}
            >
              Cancel
            </LocationsTMHButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PeopleEdit({
  step,
  component,
  setComponent,
  setStep,
  withSearch,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
  withSearch?: boolean;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Overseers"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          {!withSearch ? (
            <TMHInput
              maxLength={500}
              label="What do you want the body text to say?"
              labelStyle={{ flex: 0 }}
              placeholder={`e.g. "Overseers are a group of Elders selected to represent and oversee our entire ministry. Our senior staff report to this team. The Overseers focus on our vision and values while also ensuring we are financially responsible according to charitable law and are healthy and growing as a community. You can reach them at overseers@themeetinghouse.com."`}
              value={component?.text1}
              onChange={(e) => {
                setComponent((prev: any) => ({
                  ...prev,
                  text1: e.target.value,
                }));
              }}
            />
          ) : null}
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label={`Would you like to sort the people by first name?`}
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.sortByName}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                sortByName: e.target.checked,
              }))
            }
          />
          <TMHInput
            label={`Would you like to show a search bar?`}
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.showSearch}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                showSearch: e.target.checked,
              }))
            }
          />
        </div>
      ) : step === 2 && withSearch ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <FilterOptionsEdit
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if ((withSearch && step === 2) || (!withSearch && step === 1)) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {(withSearch && step === 2) || (!withSearch && step === 1)
            ? 'Save'
            : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
// Other
function LocationFinderEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [pages, setPages] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={300}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder={`e.g. "It's pretty simple: we get together to build relationships, and find ways to love and serve our neighbourhoods as we learn to follow Jesus.
            Find local, connect online."`}
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
          <TMHInput
            maxLength={150}
            label="What do you want the second body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Find local, connect online."'
            value={component?.text2}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text2: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            maxLength={30}
            label="What do you want the link label to be??"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Show Map."'
            value={component?.link1Text}
            onChange={(e) => {
              setComponent((prev: any) => ({
                ...prev,
                link1Text: e.target.value,
              }));
            }}
          />
          <div>
            <label>Where do you want the button to link to?</label>
            <CreatableSelect
              formatCreateLabel={(inputValue) =>
                `Add external link "${inputValue}"`
              }
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  display: 'flex',
                  flex: 1,
                  marginTop: 4,
                }),
                container: (provided: any) => ({
                  ...provided,
                  display: 'flex',
                  flex: 1,
                }),
              }}
              value={{
                label: component.link1Action,
                value: component.link1Action,
              }}
              onChange={(newValue) => {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  link1Action: newValue.value,
                }));
              }}
              placeholder="Select Page/Enter Link"
              options={pages.map((item: any) => ({
                label: item,
                value: item,
              }))}
            ></CreatableSelect>
          </div>
          <TMHInput
            maxLength={30}
            label="What do you want the accessibility label to be?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "View a map of all church locations"'
            value={component?.link1AriaLabel}
            onChange={(e) => {
              setComponent((prev: any) => ({
                ...prev,
                link1AriaLabel: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function FundraisingEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the text in the circle to say"
            maxLength={30}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Make an Impact!"'
            value={component.pieChart.text}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                pieChart: {
                  ...prev.pieChart,
                  text: e.target.value,
                },
              }))
            }
          />
          <TMHInput
            maxLength={400}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="How much have we raised?"
            maxLength={30}
            pattern="\d{1,5}"
            labelStyle={{ flex: 0 }}
            min={0}
            max={100000000}
            type="number"
            placeholder="1000"
            value={component.pieChart.raised}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                pieChart: {
                  ...prev.pieChart,
                  raised: Number(e.target.value),
                },
              }))
            }
          />
          <TMHInput
            label="What is this fundraiser's goal"
            maxLength={30}
            labelStyle={{ flex: 0 }}
            pattern="\d{1,5}"
            type="number"
            placeholder="150000"
            value={component.pieChart.goal}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                pieChart: {
                  ...prev.pieChart,
                  goal: Number(e.target.value),
                },
              }))
            }
          />
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ListEditComponent
            color="black"
            options={[
              {
                value: 'link',
                label: 'Link',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ]}
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function TeachingSearchEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Search the Blog"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={400}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Try "Faith"'
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
          <div>
            <label>Search Type</label>
            <Select
              value={{
                label: component?.style,
                value: component?.style,
              }}
              options={[
                {
                  label: 'Blog',
                  value: 'blog',
                },
                {
                  label: 'Teaching',
                  value: 'teaching',
                },
              ]}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  style: newValue.value,
                }));
              }}
            ></Select>
          </div>
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
// Content
function BlackContainerWithImageEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={400}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ListEditComponent
            color="white"
            options={[
              {
                value: 'link',
                label: 'Link',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ]}
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function GreyContainerWithImageEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={400}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ListEditComponent
            options={[
              {
                value: 'link',
                label: 'Link',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ]}
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function GreyContainerWithoutImageEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  console.log({ a7: component });
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={400}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) => {
              console.log(e.target.value, ' setting ', component);
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }));
            }}
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ListEditComponent
            options={[
              {
                value: 'link',
                label: 'Link',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ]}
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 1) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 1 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function WhiteContainerWithImageEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="Would you like to mirror this component? (image on the right/left)"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.reverse}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                reverse: e.target.checked,
              }))
            }
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ListEditComponent
            options={[
              {
                value: 'arrow',
                label: 'Arrow',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ]}
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function ListEditItem({
  item,
  index,
  handleMoveItemUp,
  handleMoveItemDown,
  handleRemoveItem,
  setComponent,
  component,
  pages,
  options,
  color,
}: {
  item: any;
  index: number;
  handleMoveItemUp: (ind: number) => void;
  handleMoveItemDown: (ind: number) => void;
  handleRemoveItem: (ind: number) => void;
  setComponent: any;
  component: any;
  pages: string[];
  options: any;
  color: string;
}) {
  const [isFileLink, setIsFileLink] = React.useState(false);
  return (
    <div key={item.index} style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 8,
          }}
        >
          <TMHInput
            label="What do you want the button label to say?"
            value={item.title}
            onChange={(e) => {
              const newList = component.list;
              newList[index].title = e.target.value;
              setComponent((prev: any) => ({
                ...prev,
                list: newList,
              }));
            }}
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div>
              {!isFileLink ? (
                <div>
                  <label>Where do you want the button to link to?</label>
                  <CreatableSelect
                    formatCreateLabel={(inputValue) =>
                      `Add external link "${inputValue}"`
                    }
                    name="location"
                    styles={{
                      control: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                        marginTop: 4,
                      }),
                      container: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                      }),
                    }}
                    value={{
                      label: item.navigateTo,
                      value: item.navigateTo,
                    }}
                    onChange={(newValue) => {
                      console.log({ newValue });
                      if (!newValue) return;
                      const newList = component.list;
                      newList[index].navigateTo = newValue.value;
                      setComponent((prev: any) => ({
                        ...prev,
                        list: newList,
                      }));
                    }}
                    placeholder="Select Page/Enter Link"
                    options={pages.map((item: any) => ({
                      label: item,
                      value: item,
                    }))}
                  ></CreatableSelect>
                </div>
              ) : null}
              <AddFileComponent
                setIsFileLink={setIsFileLink}
                setNewLink={(s) => {
                  const newList = component.list;
                  newList[index].navigateTo = s;
                  setComponent((prev: any) => ({
                    ...prev,
                    list: newList,
                  }));
                }}
              />
            </div>
          </div>
          <div>
            <label>Do you want this to be a button or a link?</label>
            <Select
              value={{
                label: item?.type,
                value: item?.type,
              }}
              options={options}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                if (!newValue) return;
                const newList = component.list;
                if (newValue.value === 'button') {
                  newList[index].buttonColor = color;
                }
                newList[index].type = newValue.value;
                setComponent((prev: any) => ({
                  ...prev,
                  list: newList,
                }));
              }}
            ></Select>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            justifyContent: 'space-evenly',
          }}
        >
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleRemoveItem(index)}
          >
            <img src="/static/svg/Delete.svg"></img>
          </button>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleMoveItemUp(index)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(-90deg' }}
            ></img>
          </button>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => handleMoveItemDown(index)}
          >
            <img
              src="/static/svg/Arrow.svg"
              style={{ transform: 'rotate(90deg' }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
function ListEditComponent({
  component,
  setComponent,
  options,
  color = 'black',
}: {
  component: any;
  setComponent: any;
  options: Array<{ label: string; value: string }>;
  color?: 'black' | 'white';
}) {
  // rename this component
  const [showAddNew, setShowAddNew] = React.useState(false);
  const [isNewFileLink, setIsNewFileLink] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    type: options[0].value,
    title: 'Find Out More',
    navigateTo: '/kids-and-youth',
  });
  const handleRemoveItem = (index: number) => {
    const newList = component.list.filter(
      (item: any, i: number) => i !== index
    );
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemUp = (index: number) => {
    if (index === 0) return;
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleMoveItemDown = (index: number) => {
    if (index === component.list.length - 1) return;
    const newList = component.list;
    const item = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = item;
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
  };
  const handleAddItem = () => {
    const newList = component.list;
    newList.push(newItem);
    setComponent((prev: any) => ({
      ...prev,
      list: newList,
    }));
    setShowAddNew(false);
    setNewItem({
      type: options[0].value,
      title: 'Find Out More',
      navigateTo: '/kids-and-youth',
    });
    setIsNewFileLink(false);
  };
  const [pages, setPages] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <label>Calls to action</label>
      <p style={{ fontSize: 12 }}>
        Add a list item to the list below. You can add as many as you like, but
        we recommend 3-5.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          flex: 1,
        }}
      >
        {component.list.map((item: any, index: number) => (
          <ListEditItem
            key={index}
            item={item}
            index={index}
            handleMoveItemUp={handleMoveItemUp}
            handleMoveItemDown={handleMoveItemDown}
            setComponent={setComponent}
            handleRemoveItem={handleRemoveItem}
            component={component}
            color={color}
            pages={pages}
            options={options}
          />
        ))}
        {showAddNew ? (
          <div>
            <TMHInput
              label="What do you want the button label to say?"
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "About Me"'
              value={newItem.title}
              onChange={(e: any) => {
                setNewItem({ ...newItem, title: e.target.value });
              }}
            />
            <div>
              {!isNewFileLink ? (
                <div>
                  <label>Where do you want the button to link to?</label>
                  <CreatableSelect
                    formatCreateLabel={(inputValue) =>
                      `Add external link "${inputValue}"`
                    }
                    name="location"
                    styles={{
                      control: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                        marginTop: 4,
                      }),
                      container: (provided: any) => ({
                        ...provided,
                        display: 'flex',
                        flex: 1,
                      }),
                    }}
                    value={{
                      label: newItem.navigateTo,
                      value: newItem.navigateTo,
                    }}
                    onChange={(newValue) => {
                      console.log({ newValue });
                      if (!newValue) return;
                      setNewItem({ ...newItem, navigateTo: newValue.value });
                    }}
                    placeholder="Select Page/Enter Link"
                    options={pages.map((item: any) => ({
                      label: item,
                      value: item,
                    }))}
                  ></CreatableSelect>
                </div>
              ) : null}
              <AddFileComponent
                setIsFileLink={setIsNewFileLink}
                setNewLink={(s) => {
                  setNewItem({ ...newItem, navigateTo: s });
                }}
              />
            </div>
            <div>
              <label>Do you want this to be a button or a link?</label>
              <Select
                value={{
                  label: newItem?.type,
                  value: newItem?.type,
                }}
                options={options}
                onChange={function (
                  newValue: SingleValue<{ label: string; value: string }>
                ): void {
                  if (!newValue) return;
                  setNewItem({ ...newItem, type: newValue.value });
                }}
              ></Select>
            </div>
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
          }}
        >
          <LocationsTMHButton
            style={{ marginTop: 20 }}
            onClick={() => (showAddNew ? handleAddItem() : setShowAddNew(true))}
          >
            {showAddNew ? 'Add link' : 'Add a new link'}
          </LocationsTMHButton>
          {showAddNew ? (
            <LocationsTMHButton
              outline
              style={{ marginTop: 20 }}
              onClick={() => setShowAddNew(false)}
            >
              Cancel
            </LocationsTMHButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
const ImageComponent = ({ url }: { url: string }) => {
  const [image, setImage] = React.useState(url);
  React.useEffect(() => {
    (async () => {
      if (url.includes('editor')) {
        let newUrl = url;
        if (newUrl[0] === '/') {
          newUrl = newUrl.slice(1);
        }
        const bucketURL = await Storage.get(newUrl);

        console.log('getting image', bucketURL);
        setImage(bucketURL);
      }
    })();
  }, [url]);
  return <img src={image} height={100}></img>;
};
// Hero
function HeroEditImageComponent({ component, setComponent }: any) {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [showAddNew, setShowAddNew] = React.useState(false);
  const [newImage, setNewImage] = React.useState({
    src: '',
    alt: '',
  });
  const handleAddNewImage = () => {
    const newComponent = { ...component };
    newComponent.image1.push(newImage);
    setComponent(newComponent);
    setShowAddNew(false);
    setNewImage({
      src: '',
      alt: '',
    });
  };
  const handleRemoveImage = (index: number) => {
    if (component.image1.length === 1) {
      setErrorMessage('You must have at least one image');
      return;
    } else {
      setErrorMessage('');
    }
    const newComponent = { ...component };
    newComponent.image1.splice(index, 1);
    setComponent(newComponent);
  };
  const handleMoveImageUp = (index: number) => {
    if (index === 0) return;
    const newComponent = { ...component };
    const image = newComponent.image1[index];
    newComponent.image1.splice(index, 1);
    newComponent.image1.splice(index - 1, 0, image);
    setComponent(newComponent);
  };
  const handleMoveImageDown = (index: number) => {
    if (index === component.image1.length - 1) return;
    const newComponent = { ...component };
    const image = newComponent.image1[index];
    newComponent.image1.splice(index, 1);
    newComponent.image1.splice(index + 1, 0, image);
    setComponent(newComponent);
  };
  console.log({ component });
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <label>Images</label>
      <p style={{ fontSize: 12 }}>
        This component will randomly display one of the images selected here.
        Adding more images increases the variety of images that can be displayed
        to different users.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {component.image1.map((image: any, index: number) => (
          <div
            key={image.src}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <ImageComponent url={image.src} />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <button
                style={{ backgroundColor: 'transparent', border: 'none' }}
                onClick={() => handleRemoveImage(index)}
              >
                <img src="/static/svg/Delete.svg"></img>
              </button>
              <button
                style={{ backgroundColor: 'transparent', border: 'none' }}
                onClick={() => handleMoveImageUp(index)}
              >
                <img
                  src="/static/svg/Arrow.svg"
                  style={{ transform: 'rotate(-90deg' }}
                ></img>
              </button>
              <button
                style={{ backgroundColor: 'transparent', border: 'none' }}
                onClick={() => handleMoveImageDown(index)}
              >
                <img
                  src="/static/svg/Arrow.svg"
                  style={{ transform: 'rotate(90deg' }}
                ></img>
              </button>
            </div>
          </div>
        ))}
        {showAddNew ? (
          <div>
            <AddImageComponent
              currentImage={newImage.src}
              setNewImage={(src) => {
                setNewImage((prev) => ({ ...prev, src: src }));
              }}
            />
            <TMHInput
              label="What do you want the image description to be? (accessibility)"
              labelStyle={{ flex: 0 }}
              placeholder='e.g. "Two people talking outdoors"'
              value={newImage.alt}
              onChange={(e: any) => {
                setNewImage({ ...newImage, alt: e.target.value });
              }}
            />
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
          }}
        >
          <LocationsTMHButton
            disabled={showAddNew && !newImage.src}
            link={!showAddNew}
            style={!showAddNew ? { paddingLeft: 0 } : { marginTop: 20 }}
            onClick={() => {
              if (showAddNew) handleAddNewImage();
              else {
                setErrorMessage('');
                setShowAddNew(true);
              }
            }}
          >
            {showAddNew ? 'Add image' : 'Add a new image'}
          </LocationsTMHButton>
          {showAddNew ? (
            <LocationsTMHButton
              outline
              style={{ marginTop: 20 }}
              onClick={() => setShowAddNew(false)}
            >
              Cancel
            </LocationsTMHButton>
          ) : null}
        </div>
        {errorMessage ? (
          <span style={{ color: 'tomato' }}>{errorMessage}</span>
        ) : null}
      </div>
    </div>
  );
}

function LocationHeroEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [locations, setLocations] = React.useState<TMHLocation[]>([]);
  React.useEffect(() => {
    (async () => {
      const locations = await DataLoader.loadLocations();
      setLocations(locations);
    })();
  }, []);
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label>Site ID</label>
            <Select
              value={{
                label: component?.filterValue,
                value: component?.filterValue,
              }}
              options={locations.map((location) => ({
                value: location.id,
                label: location.id,
              }))}
              onChange={function (
                newValue: SingleValue<{ label: string; value: string }>
              ): void {
                console.log({ newValue });
                if (!newValue) return;
                setComponent((prev: any) => ({
                  ...prev,
                  filterValue: newValue.value,
                }));
              }}
            ></Select>
          </div>
          <TMHInput
            label="Would you like to show the add to calendar button?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.addToCalendar}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                addToCalendar: e.target.checked,
              }))
            }
          />
          <TMHInput
            label="Would you like to show the contact pastor button?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.contactPastor}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                contactPastor: e.target.checked,
              }))
            }
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="Would you like to hide the horizontal line?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.hideHr}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                hideHr: e.target.checked,
              }))
            }
          />
          <TMHInput
            label="Would you like to show a special message?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.showSpecial}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                showSpecial: e.target.checked,
              }))
            }
          />

          {component.showSpecial ? (
            <div
              style={{
                flex: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <TMHInput
                label="Where would you like the special button to link to?"
                labelStyle={{ flex: 0 }}
                value={component?.showSpecialNavigateTo}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    showSpecialNavigateTo: e.target.value,
                  }))
                }
              />
              <TMHInput
                label="What would you like the special button label to be?"
                labelStyle={{ flex: 0 }}
                value={component?.showSpecialText}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    showSpecialText: e.target.value,
                  }))
                }
              />
            </div>
          ) : null}
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function FullHeroEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const [pages, setPages] = React.useState<string[]>([]);
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [ctaType, setCtaType] = React.useState<'button' | 'link'>(
    component?.link1Action ? 'link' : 'button'
  );
  const [isFileLink, setIsFileLink] = React.useState(false);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  const oldCTALinkValue = React.useMemo(
    () => ({
      link1Text: component.link1Text ?? 'Browse Home Churches in Brampton',
      link1Action: component.link1Action ?? '/find-homechurch',
      link1AriaLabel:
        component.link1AriaLabel ?? 'Navigate to home churches in brampton',
    }),
    []
  );
  const oldCTAButtonValue = React.useMemo(
    () => ({
      text: component.button1?.text ?? 'Why Jesus?',
      action: component.button1?.action ?? '/spirituality',
      description:
        component.button1?.description ?? 'Got questions about Spirituality?',
    }),
    []
  );
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="Do you want to include a sub-heading? What would you like it to say?"
            labelStyle={{ flex: 0 }}
            maxLength={100}
            placeholder='e.g. "Sundays at 10:30am"'
            value={component?.header2}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header2: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            type="checkbox"
            checked={ctaType === 'link'}
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            label="Would you like the button to be a link?"
            onChange={(e) => {
              setCtaType(e.target.checked ? 'link' : 'button');
              if (e.target.checked) {
                setComponent((prev: any) => ({
                  ...prev,
                  button1: undefined,
                  link1Action: oldCTALinkValue.link1Action,
                  link1Text: oldCTALinkValue.link1Text,
                  link1AriaLabel: oldCTALinkValue.link1AriaLabel,
                }));
              } else {
                console.log('setting', oldCTAButtonValue);
                setComponent((prev: any) => ({
                  ...prev,
                  button1: { ...oldCTAButtonValue },
                  link1Action: undefined,
                  link1Text: undefined,
                  link1AriaLabel: undefined,
                }));
              }
            }}
          />
          {ctaType === 'link' ? (
            <>
              <TMHInput
                value={component?.link1Text}
                labelStyle={{ flex: 0 }}
                label="What do you want the button label to be?"
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    link1Text: e.target.value,
                  }))
                }
              />
              <div>
                {!isFileLink ? (
                  <div>
                    <label>Where do you want the button to link to?</label>
                    <CreatableSelect
                      formatCreateLabel={(inputValue) =>
                        `Add external link "${inputValue}"`
                      }
                      name="location"
                      styles={{
                        control: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                          marginTop: 4,
                        }),
                        container: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                        }),
                      }}
                      value={{
                        label: component?.link1Action,
                        value: component?.link1Action,
                      }}
                      onChange={(newValue) => {
                        console.log({ newValue });
                        if (!newValue) return;
                        setComponent((prev: any) => ({
                          ...prev,
                          link1Action: newValue.value,
                        }));
                      }}
                      placeholder="Select Page/Enter Link"
                      options={pages.map((item: any) => ({
                        label: item,
                        value: item,
                      }))}
                    ></CreatableSelect>
                  </div>
                ) : null}
                <AddFileComponent
                  setIsFileLink={setIsFileLink}
                  setNewLink={(s) => {
                    setComponent((prev: any) => ({
                      ...prev,
                      link1Action: s,
                    }));
                  }}
                />
              </div>
              <TMHInput
                label="What do you want the button description to be? (accessibility)"
                labelStyle={{ flex: 0 }}
                value={component?.link1AriaLabel}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    link1AriaLabel: e.target.value,
                  }))
                }
              />
            </>
          ) : (
            <>
              <TMHInput
                value={component?.button1?.text}
                labelStyle={{ flex: 0 }}
                label="What do you want the button label to be?"
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    button1: {
                      ...prev.button1,
                      text: e.target.value,
                    },
                  }))
                }
              />
              <div>
                {!isFileLink ? (
                  <div>
                    <label>Where do you want the button to link to?</label>
                    <CreatableSelect
                      formatCreateLabel={(inputValue) =>
                        `Add external link "${inputValue}"`
                      }
                      name="location"
                      styles={{
                        control: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                          marginTop: 4,
                        }),
                        container: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                        }),
                      }}
                      value={{
                        label: component?.button1?.action,
                        value: component?.button1?.action,
                      }}
                      onChange={(newValue) => {
                        console.log({ newValue });
                        if (!newValue) return;
                        setComponent((prev: any) => ({
                          ...prev,
                          button1: {
                            ...prev.button1,
                            action: newValue.value,
                          },
                        }));
                      }}
                      placeholder="Select Page/Enter Link"
                      options={pages.map((item: any) => ({
                        label: item,
                        value: item,
                      }))}
                    ></CreatableSelect>
                  </div>
                ) : null}
                <AddFileComponent
                  setIsFileLink={setIsFileLink}
                  setNewLink={(s) => {
                    setComponent((prev: any) => ({
                      ...prev,
                      button1: {
                        ...prev.button1,
                        action: s,
                      },
                    }));
                  }}
                />
              </div>
              <TMHInput
                label="What do you want the button description to be? (accessibility)"
                labelStyle={{ flex: 0 }}
                value={component?.button1?.description}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    button1: {
                      ...prev.button1,
                      description: e.target.value,
                    },
                  }))
                }
              />
            </>
          )}
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {ctaType !== 'link' ? (
            <TMHInput
              type="checkbox"
              checked={component?.button1?.buttonColor === 'yellow'}
              labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
              label="Would you like to make the button yellow?"
              onChange={(e) =>
                setComponent((prev: any) => ({
                  ...prev,
                  button1: {
                    ...prev.button1,
                    buttonColor: e.target.checked ? 'yellow' : undefined,
                  },
                }))
              }
            />
          ) : null}
          <TMHInput
            label="Would you like to hide the horizontal line?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.hideHr}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                hideHr: e.target.checked,
              }))
            }
          />
          <TMHInput
            label="Would you like to show a special message?"
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            type="checkbox"
            checked={component?.showSpecial}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                showSpecial: e.target.checked,
              }))
            }
          />

          {component.showSpecial ? (
            <div
              style={{
                flex: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <TMHInput
                label="Where would you like the special button to link to?"
                labelStyle={{ flex: 0 }}
                value={component?.showSpecialNavigateTo}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    showSpecialNavigateTo: e.target.value,
                  }))
                }
              />
              <TMHInput
                label="What would you like the special button label to be?"
                labelStyle={{ flex: 0 }}
                value={component?.showSpecialText}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    showSpecialText: e.target.value,
                  }))
                }
              />
            </div>
          ) : null}
        </div>
      ) : step === 3 ? (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 3) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 3 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function SignUpHero({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="Do you want to include a sub-heading? What would you like it to say?"
            labelStyle={{ flex: 0 }}
            maxLength={100}
            placeholder='e.g. "Sundays at 10:30am"'
            value={component?.header2}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header2: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text2}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text2: e.target.value,
              }))
            }
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 1) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              console.log({ newContent });
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 1 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}
function PartialHeroEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const [pages, setPages] = React.useState<string[]>([]);
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  const [ctaType, setCtaType] = React.useState<'button' | 'link'>('link');
  const [isFileLink, setIsFileLink] = React.useState(false);
  React.useEffect(() => {
    (async function loadPageList() {
      try {
        const content = await Storage.list('savedContent/');
        const pageNames = content.map((item: any) =>
          item.key.replace('savedContent', '').replace('.json', '')
        );
        setPages(pageNames);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  const oldCTALinkValue = React.useMemo(
    () => ({
      link1Text: component.link1Text ?? 'Browse Home Churches in Brampton',
      link1Action: component.link1Action ?? '/find-homechurch',
      link1AriaLabel:
        component.link1AriaLabel ?? 'Navigate to home churches in Brampton',
    }),
    []
  );
  const oldCTAButtonValue = React.useMemo(
    () => ({
      text: component.button1?.text ?? 'Why Jesus?',
      action: component.button1?.action ?? '/spirituality',
      description:
        component.button1?.description ?? 'Got questions about Spirituality?',
    }),
    []
  );
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="Do you want to include a sub-heading? What would you like it to say?"
            labelStyle={{ flex: 0 }}
            maxLength={100}
            placeholder='e.g. "Sundays at 10:30am"'
            value={component?.header2}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header2: e.target.value,
              }))
            }
          />
          <TMHInput
            maxLength={350}
            label="What do you want the body text to say?"
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "We are a church that believes in Jesus & loves God & people"'
            value={component?.text1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                text1: e.target.value,
              }))
            }
          />
        </div>
      ) : step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            type="checkbox"
            checked={ctaType === 'link'}
            labelStyle={{ flex: 0, flexDirection: 'row', gap: 6 }}
            label="Would you like the button to be a link?"
            onChange={(e) => {
              setCtaType(e.target.checked ? 'link' : 'button');
              if (e.target.checked) {
                setComponent((prev: any) => ({
                  ...prev,
                  button1: undefined,
                  link1Action: oldCTALinkValue.link1Action,
                  link1Text: oldCTALinkValue.link1Text,
                  link1AriaLabel: oldCTALinkValue.link1AriaLabel,
                }));
              } else {
                console.log('setting', oldCTAButtonValue);
                setComponent((prev: any) => ({
                  ...prev,
                  button1: { ...oldCTAButtonValue },
                  link1Action: undefined,
                  link1Text: undefined,
                  link1AriaLabel: undefined,
                }));
              }
            }}
          />
          {ctaType === 'link' ? (
            <>
              <TMHInput
                value={component?.link1Text}
                labelStyle={{ flex: 0 }}
                label="What do you want the button label to be?"
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    link1Text: e.target.value,
                  }))
                }
              />
              <div>
                {!isFileLink ? (
                  <div>
                    <label>Where do you want the button to link to?</label>
                    <CreatableSelect
                      formatCreateLabel={(inputValue) =>
                        `Add external link "${inputValue}"`
                      }
                      name="location"
                      styles={{
                        control: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                          marginTop: 4,
                        }),
                        container: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                        }),
                      }}
                      value={{
                        label: component?.link1Action,
                        value: component?.link1Action,
                      }}
                      onChange={(newValue) => {
                        console.log({ newValue });
                        if (!newValue) return;
                        setComponent((prev: any) => ({
                          ...prev,
                          link1Action: newValue.value,
                        }));
                      }}
                      placeholder="Select Page/Enter Link"
                      options={pages.map((item: any) => ({
                        label: item,
                        value: item,
                      }))}
                    ></CreatableSelect>
                  </div>
                ) : null}
                <AddFileComponent
                  setIsFileLink={setIsFileLink}
                  setNewLink={(s) => {
                    setComponent((prev: any) => ({
                      ...prev,
                      link1Action: s,
                    }));
                  }}
                />
              </div>
              <TMHInput
                label="What do you want the button description to be? (accessibility)"
                labelStyle={{ flex: 0 }}
                value={component?.link1AriaLabel}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    link1AriaLabel: e.target.value,
                  }))
                }
              />
            </>
          ) : (
            <>
              <TMHInput
                value={component?.button1?.text}
                labelStyle={{ flex: 0 }}
                label="What do you want the button label to be?"
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    button1: {
                      ...prev.button1,
                      text: e.target.value,
                    },
                  }))
                }
              />
              <div>
                {!isFileLink ? (
                  <div>
                    <label>Where do you want the button to link to?</label>
                    <CreatableSelect
                      formatCreateLabel={(inputValue) =>
                        `Add external link "${inputValue}"`
                      }
                      name="location"
                      styles={{
                        control: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                          marginTop: 4,
                        }),
                        container: (provided: any) => ({
                          ...provided,
                          display: 'flex',
                          flex: 1,
                        }),
                      }}
                      value={{
                        label: component?.button1?.action,
                        value: component?.button1?.action,
                      }}
                      onChange={(newValue) => {
                        console.log({ newValue });
                        if (!newValue) return;
                        setComponent((prev: any) => ({
                          ...prev,
                          button1: {
                            ...prev.button1,
                            action: newValue.value,
                          },
                        }));
                      }}
                      placeholder="Select Page/Enter Link"
                      options={pages.map((item: any) => ({
                        label: item,
                        value: item,
                      }))}
                    ></CreatableSelect>
                  </div>
                ) : null}
                <AddFileComponent
                  setIsFileLink={setIsFileLink}
                  setNewLink={(s) => {
                    setComponent((prev: any) => ({
                      ...prev,
                      button1: {
                        ...prev.button1,
                        action: s,
                      },
                    }));
                  }}
                />
              </div>
              <TMHInput
                label="What do you want the button description to be? (accessibility)"
                labelStyle={{ flex: 0 }}
                value={component?.button1?.description}
                onChange={(e) =>
                  setComponent((prev: any) => ({
                    ...prev,
                    button1: {
                      ...prev.button1,
                      description: e.target.value,
                    },
                  }))
                }
              />
            </>
          )}
        </div>
      ) : step === 2 ? (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <HeroEditImageComponent
            component={component}
            setComponent={setComponent}
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 2) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 2 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function TeachingHeroEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

function BlogHeroEdit({
  step,
  component,
  setComponent,
  setStep,
}: {
  step: number;
  component: any;
  setComponent: any;
  setStep: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const { content } = state;
  console.log({ 'a#': component });
  return (
    <div>
      {step === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TMHInput
            label="What do you want the heading text to say?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Welcome to The Meeting House"'
            value={component.header1}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                header1: e.target.value,
              }))
            }
          />
          <TMHInput
            label="What blog status do you want to use?"
            maxLength={100}
            labelStyle={{ flex: 0 }}
            placeholder='e.g. "Live"'
            value={component.status}
            onChange={(e) =>
              setComponent((prev: any) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          />
        </div>
      ) : null}
      <div
        style={{
          gap: 8,
          display: 'flex',
          marginTop: 20,
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <LocationsTMHButton
          onClick={() => {
            if (step !== 0) setStep((prev: any) => prev - 1);
          }}
        >
          Back
        </LocationsTMHButton>
        <LocationsTMHButton
          onClick={() => {
            if (step === 0) {
              const newContent = content;
              if (
                state.editIndex !== undefined &&
                state.editIndex !== null &&
                state.editIndex >= 0
              ) {
                newContent.page.content[state.editIndex] = component;
              } else {
                newContent.page.content.push(component);
              }
              dispatch({
                type: EditorPageActionType.UPDATE_CONTENT,
                payload: newContent,
              });
              dispatch({
                type: EditorPageActionType.SET_SHOW_EDIT_COMPONENT_MODAL,
                payload: null,
              });
            } else setStep((prev: any) => prev + 1);
          }}
        >
          {step === 0 ? 'Save' : 'Next'}
        </LocationsTMHButton>
      </div>
    </div>
  );
}

const EditComponentRouter = ({
  component,
  setComponent,
  step,
  setStep,
}: {
  component: any;
  setComponent: any;
  step: number;
  setStep: any;
}) => {
  const { type, style, filterOptions, class: componentClass } = component;
  if (type === 'hero' && style === 'full') {
    return (
      <FullHeroEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'hero' && style === 'partial') {
    return (
      <PartialHeroEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'blog' && style === 'hero') {
    return (
      <BlogHeroEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'teaching' && style === 'hero') {
    return (
      <TeachingHeroEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'hero' && style === 'locationPage') {
    return (
      <LocationHeroEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'hero' && style === 'connect') {
    return (
      <SignUpHero
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'mad') {
    return (
      <WhiteContainerWithImageEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'greyTwoText') {
    return (
      <GreyContainerWithoutImageEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'oneImageBlackRight') {
    return (
      <BlackContainerWithImageEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'oneImageBlackRightExtended') {
    return (
      <BlackContainerWithImageEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'oneImage') {
    return (
      <GreyContainerWithImageEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'teachingsearch' && style === 'blog') {
    return (
      <TeachingSearchEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'content' && style === 'pieChart') {
    return (
      <FundraisingEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'hero' && style === 'partialNoFooter') {
    return (
      <LocationFinderEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'list' && style === 'staff') {
    return (
      <PeopleEdit
        withSearch={Boolean(filterOptions)}
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'blog' && style === 'multiImage') {
    return (
      <LatestBlogsEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (
    type === 'list' &&
    style === 'grid' &&
    componentClass === 'instagram'
  ) {
    return (
      <InstagramEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'list' && style === 'curious-ui') {
    return (
      <VideoGridEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (
    type === 'list' &&
    style === 'vertical' &&
    componentClass === 'compassion'
  ) {
    return (
      <ImageTextGridEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (
    type === 'list' &&
    style === 'ladder' &&
    componentClass === 'events'
  ) {
    return (
      <EventsEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (
    type === 'list' &&
    style === 'blogs' &&
    componentClass === 'blogs'
  ) {
    return (
      <VerticalBlogEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'list' && style === 'horizontalBig') {
    return (
      <TeachingSeriesEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'list' && style === 'horizontal') {
    return (
      <TeachingVideoEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'list' && style === 'imageList') {
    return (
      <ImagesWithTextEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'horizontal-list') {
    return (
      <ImagesWithTextEdit
        noBodyText
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else if (type === 'faq') {
    return (
      <FAQListEdit
        component={component}
        setComponent={setComponent}
        step={step}
        setStep={setStep}
      />
    );
  } else {
    console.log('unknown component', component);
    return <div>An unknown error occurred.</div>;
  }
};
function EditComponent() {
  const { state } = useEditorPageContext();
  const { content } = state;
  const [component, setComponent] = React.useState(
    state.componentToEdit?.content
  );
  const [step, setStep] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setInterval(() => {
      if (containerRef.current) {
        containerRef.current.style.height =
          containerRef.current.scrollHeight.toString() + 'px';
      }
    }, 100);
  }, [step]);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerRef.current?.scrollHeight.toString() ?? 0,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        // if screen width is less than 992px, make it column
      }}
    >
      <div
        style={{
          minWidth: '50%',
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <EditComponentRouter
          component={component}
          setComponent={setComponent}
          step={step}
          setStep={setStep}
        />
      </div>

      <div
        style={{
          transform: 'scale(0.28)',
          transformOrigin: 'top left',
        }}
      >
        <RenderItem item={component} index={0} content={content} />
      </div>
    </div>
  );
}
