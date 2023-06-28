import { useEffect, useState } from 'react';
import LocationsTMHButton from '../../locations/LocationsTMHButton';

import TMHInput from '../components/TMHInput';
import { Storage } from 'aws-amplify';
import CreatableSelect from 'react-select/creatable';
import {
  EditorPage,
  EditorPageActionType,
  useEditorPageContext,
} from '../contexts/EditorPageContext';
export default function NavigationSettingsPage() {
  const [navigationData, setNavigationData] = useState<any>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [pages, setPages] = useState<any>([]);
  const { state, dispatch } = useEditorPageContext();
  const [resultMessage, setResultMessage] = useState('');
  useEffect(function loadNavigation() {
    (async function loadPageList() {
      console.log({ state });
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
    (async () => {
      console.log({ state });
      try {
        const url = await Storage.get('editor/navigation.json');
        const response = await fetch(url);
        const json = await response.json();
        console.log({ json });
        setNavigationData(json);
      } catch (error) {
        console.error({ error });
      }
    })();
  }, []);
  const saveNav = async () => {
    try {
      setIsSaving(true);
      const newNavigationData = navigationData.map((navItem: any) => {
        if (!navItem?.children?.length) navItem.children = undefined;
        return navItem;
      });
      const response = await Storage.put(
        `editor/navigation.json`,
        newNavigationData,
        {
          contentType: 'application/json',
          acl: 'public-read',
        }
      );
      console.log({ response });
      setResultMessage('Saved Successfully');
    } catch (error) {
      console.error({ error });
      setResultMessage('An error occurred while saving.');
    } finally {
      setIsSaving(false);
    }
  };
  const handleParentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number
  ) => {
    const newData = [...navigationData];
    newData[parentIndex][e.target.name] = e.target.value;
    setNavigationData(newData);
  };
  const handleChildChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    childIndex: number,
    parentIndex: number
  ) => {
    const newData = [...navigationData];
    newData[parentIndex].children[childIndex][e.target.name] = e.target.value;
    setNavigationData(newData);
  };
  const handleSelectParentChange = (newValue: string, index: number) => {
    const newData = [...navigationData];
    newData[index].location = newValue;
    setNavigationData(newData);
  };
  const handleSelectChildChange = (
    newValue: string,
    parentIndex: number,
    childIndex: number
  ) => {
    const newData = [...navigationData];
    newData[parentIndex].children[childIndex].location = newValue;
    setNavigationData(newData);
  };
  return (
    <div style={{ padding: 16 }}>
      {resultMessage ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontWeight: 700,
            }}
          >
            {resultMessage}
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <LocationsTMHButton
              outline
              disabled={isSaving}
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
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                flex: 1,
              }}
            >
              Navigation
            </span>
            <LocationsTMHButton
              onClick={() => {
                setNavigationData((prev: any) => [
                  ...prev,
                  {
                    location: '',
                    name: '',
                    children: [],
                  },
                ]);
              }}
            >
              Add Link
            </LocationsTMHButton>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              marginTop: 20,
              gap: 8,
            }}
          >
            {navigationData?.length ? (
              navigationData?.map((navItem: any, parentIndex: number) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: navItem.children ? 'column' : 'row',
                      flex: 1,
                      gap: 8,
                    }}
                    key={'navLinks' + parentIndex}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 1,
                        gap: 8,
                      }}
                    >
                      <label
                        style={{
                          display: 'flex',
                          flex: 1,
                          flexDirection: 'column',
                        }}
                      >
                        <span>Link</span>
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
                            label: navItem.location,
                            value: navItem.location,
                          }}
                          onChange={(newValue) =>
                            handleSelectParentChange(
                              newValue?.value,
                              parentIndex
                            )
                          }
                          placeholder="Select Page/Enter Link"
                          options={pages.map((item: any) => ({
                            label: item,
                            value: item,
                          }))}
                        ></CreatableSelect>
                      </label>

                      <TMHInput
                        label="Label"
                        onChange={(e) => handleParentChange(e, parentIndex)}
                        style={{ flex: 1 }}
                        placeholder="Teaching"
                        name="name"
                        value={navItem.name}
                      ></TMHInput>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',

                          gap: 8,
                        }}
                      >
                        <LocationsTMHButton
                          style={{ height: 40, alignSelf: 'flex-end' }}
                          onClick={() => {
                            setNavigationData((prev: any) => {
                              const newData = [...prev];
                              if (!newData[parentIndex].children)
                                newData[parentIndex].children = [];
                              newData[parentIndex].children?.push({
                                location: '',
                                name: '',
                              });
                              return newData;
                            });
                          }}
                        >
                          +
                        </LocationsTMHButton>
                        <LocationsTMHButton
                          outline
                          style={{ height: 40, alignSelf: 'flex-end' }}
                          onClick={() => {
                            setNavigationData((prev: any) => {
                              const newData = [...prev];
                              newData.splice(parentIndex, 1);
                              return newData;
                            });
                          }}
                        >
                          -
                        </LocationsTMHButton>
                      </div>
                    </div>
                    {navItem.children ? (
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 8,
                          flexWrap: 'wrap',
                          marginLeft: 40,
                        }}
                      >
                        {navItem.children
                          ? navItem.children?.map(
                              (child: any, childIndex: number) => {
                                return (
                                  <div
                                    key={'childLink' + childIndex}
                                    style={{
                                      display: 'flex',
                                      gap: 8,
                                      flexDirection: 'row',
                                    }}
                                  >
                                    <label
                                      style={{
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                      }}
                                    >
                                      <span>Link</span>
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
                                          label: child.location,
                                          value: child.location,
                                        }}
                                        onChange={(newValue) =>
                                          handleSelectChildChange(
                                            newValue?.value,
                                            parentIndex,
                                            childIndex
                                          )
                                        }
                                        placeholder="Select Page/Enter Link"
                                        options={pages.map((item: any) => ({
                                          label: item,
                                          value: item,
                                        }))}
                                      ></CreatableSelect>
                                    </label>

                                    <TMHInput
                                      label="Label"
                                      name="name"
                                      placeholder="Playlists"
                                      onChange={(e) =>
                                        handleChildChange(
                                          e,
                                          childIndex,
                                          parentIndex
                                        )
                                      }
                                      value={child.name}
                                    ></TMHInput>

                                    <LocationsTMHButton
                                      outline
                                      style={{
                                        height: 40,
                                        alignSelf: 'flex-end',
                                      }}
                                      onClick={() => {
                                        console.log('removing child', child);
                                        setNavigationData((prev: any) => {
                                          const newData = [...prev];
                                          const parent = newData[parentIndex];
                                          parent.children?.splice(
                                            childIndex,
                                            1
                                          );
                                          return newData;
                                        });
                                      }}
                                    >
                                      -
                                    </LocationsTMHButton>
                                  </div>
                                );
                              }
                            )
                          : null}
                      </div>
                    ) : null}
                  </div>
                );
              })
            ) : (
              <div>No Navigation Data</div>
            )}
          </div>
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <LocationsTMHButton
              disabled={isSaving}
              onClick={() => saveNav()}
              outline
            >
              {isSaving ? 'Saving...' : 'Save'}
            </LocationsTMHButton>
            <LocationsTMHButton
              disabled={isSaving}
              onClick={() =>
                dispatch({
                  type: EditorPageActionType.NAVIGATE_TO,
                  payload: EditorPage.GLOBAL_SETTINGS_PAGE,
                })
              }
            >
              Dismiss
            </LocationsTMHButton>
          </div>
        </>
      )}
    </div>
  );
}
