import { useEffect, useState } from 'react';
import { Modal } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import { Storage } from 'aws-amplify';

import CreatableSelect from 'react-select/creatable';
import TMHInput from './components/TMHInput';
import {
  EditorPage,
  EditorPageActionType,
  useEditorPageContext,
} from './contexts/EditorPageContext';

export default function FooterSettings() {
  const [footerData, setFooterData] = useState<any>(null);
  const { state, dispatch } = useEditorPageContext();
  const { currentPage } = state;
  const [pages, setPages] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  useEffect(function loadNavigation() {
    (async function loadFooter() {
      console.log({ state });
      try {
        const url = await Storage.get('editor/footer.json');
        const response = await fetch(url);
        const json = await response.json();
        console.log({ json });
        setFooterData(json);
      } catch (error) {
        console.error({ error });
      }
    })();
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
  }, []);
  const saveFooter = async () => {
    try {
      setIsSaving(true);
      console.log('saving', footerData);
      const response = await Storage.put(`editor/footer.json`, footerData, {
        contentType: 'application/json',
        acl: 'public-read',
      });
      console.log({ response });
      setResultMessage('Successfully updated footer.');
    } catch (error) {
      console.error({ error });
      setResultMessage(
        'An error occured while updating the footer. Please try again later'
      );
    } finally {
      setIsSaving(false);
    }
  };
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFooterData((prev: any) => ({
      ...prev,
      contact: { ...prev.contact, [e.target.name]: e.target.value },
    }));
  };
  const handleSelectPage = (e: any, index: number) => {
    console.log({ e });
    setFooterData((prev: any) => ({
      ...prev,
      navLinks: prev.navLinks.map((item: any, index1: number) => {
        if (index === index1) {
          return {
            ...item,
            link: e.value,
          };
        }
        return item;
      }),
    }));
  };
  const handleNavLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setFooterData((prev: any) => ({
      ...prev,
      navLinks: prev.navLinks.map((item: any, index1: number) => {
        if (index === index1) {
          return {
            ...item,
            [e.target.name]: e.target.value,
          };
        }
        return item;
      }),
    }));
  };
  const handleSocialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    const temp = footerData.socials;
    temp[index][fieldName] = value;
    setFooterData((prev: any) => ({
      ...prev,
      socials: temp,
    }));
  };
  if (!footerData) return <div>no footer data</div>;
  return (
    <Modal
      size="lg"
      isOpen={Boolean(currentPage === EditorPage.FOOTER_SETTINGS_PAGE)}
    >
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
                    payload: EditorPage.GLOBAL_SETTINGS_PAGE,
                  })
                }
              >
                Dismiss
              </LocationsTMHButton>
            </div>
          </div>
        ) : (
          <>
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Footer
            </span>
            <div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    flex: 1,
                  }}
                >
                  Navigation Links {footerData.navLinks.length}/6
                </span>
                {footerData.navLinks.length < 6 ? (
                  <LocationsTMHButton
                    onClick={() =>
                      setFooterData((prev: any) => ({
                        ...prev,
                        navLinks: [
                          ...prev.navLinks,
                          {
                            label: `New Link ${prev.navLinks.length + 1}`,
                            link: `/new-link-${prev.navLinks.length + 1}`,
                          },
                        ],
                      }))
                    }
                  >
                    Add new
                  </LocationsTMHButton>
                ) : null}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <span style={{ flex: 2, fontWeight: 700, fontSize: 14 }}>
                    Label
                  </span>
                  <span style={{ flex: 2, fontWeight: 700, fontSize: 14 }}>
                    Link
                  </span>
                </div>
                {footerData?.navLinks?.map((item: any, index1: number) => {
                  return (
                    <div
                      key={item.link}
                      style={{
                        flex: 1,
                        display: 'flex',
                        gap: 16,
                      }}
                    >
                      <TMHInput
                        type="text"
                        name="label"
                        value={item.label}
                        style={{ flex: 1 }}
                        onChange={(e) => {
                          e.preventDefault();
                          handleNavLinkChange(e, index1);
                        }}
                      />
                      <CreatableSelect
                        formatCreateLabel={(inputValue) =>
                          `Add external link "${inputValue}"`
                        }
                        name="link"
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
                        value={{ label: item.link, value: item.link }}
                        onChange={(e) => handleSelectPage(e, index1)}
                        placeholder="Select Page/Enter Link"
                        options={pages.map((item) => ({
                          label: item,
                          value: item,
                        }))}
                      ></CreatableSelect>

                      <img
                        onClick={() =>
                          setFooterData((prev: any) => ({
                            ...prev,
                            navLinks: prev.navLinks.filter(
                              (item: any, index: number) => index !== index1
                            ),
                          }))
                        }
                        src="/static/svg/Delete.svg"
                        width={20}
                        height={20}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  flex: 1,
                }}
              >
                Socials
              </span>
              <LocationsTMHButton
                onClick={() =>
                  setFooterData((prev: any) => ({
                    ...prev,
                    socials: [
                      ...prev.socials,
                      {
                        platform: `New Platform ${prev.socials.length + 1}`,
                        link: `/new-link-${prev.socials.length + 1}`,
                        svg: '/static/svg/Instagram.svg',
                      },
                    ],
                  }))
                }
              >
                Add new
              </LocationsTMHButton>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 20,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <span style={{ flex: 1, fontWeight: 700, fontSize: 14 }}>
                  Label
                </span>
                <span style={{ flex: 1, fontWeight: 700, fontSize: 14 }}>
                  Link
                </span>
                <span style={{ flex: 1, fontWeight: 700, fontSize: 14 }}>
                  Image
                </span>
              </div>
              {footerData?.socials?.map((item: any, index1: number) => {
                return (
                  //do not use index as key
                  <div key={index1} style={{ display: 'flex', gap: 16 }}>
                    <TMHInput
                      type="text"
                      name="platform"
                      style={{ flex: 1 }}
                      value={item.platform}
                      onChange={(e) => handleSocialsChange(e, index1)}
                    />
                    <TMHInput
                      type="text"
                      name="link"
                      style={{ flex: 1 }}
                      value={item.link}
                      onChange={(e) =>
                        setFooterData((prev: any) => ({
                          ...prev,
                          socials: prev.socials.map(
                            (item: any, index2: number) => {
                              if (index2 === index1) {
                                return {
                                  ...item,
                                  link: e.target.value,
                                };
                              }
                              return item;
                            }
                          ),
                        }))
                      }
                    />
                    <TMHInput
                      type="text"
                      name="svg"
                      style={{ flex: 1 }}
                      value={item.svg}
                      onChange={(e) => handleSocialsChange(e, index1)}
                    />
                    <img
                      onClick={() =>
                        setFooterData((prev: any) => ({
                          ...prev,
                          socials: prev.socials.filter(
                            (item: any, index: number) => index !== index1
                          ),
                        }))
                      }
                      src="/static/svg/Delete.svg"
                      width={20}
                      height={20}
                    />
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <h6>Contact</h6>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    gap: 8,
                    flexDirection: 'column',
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>Location Name</span>
                    <TMHInput
                      type="text"
                      name="name"
                      value={footerData?.contact?.name}
                      onChange={handleContactChange}
                    />
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>Address 1</span>
                    <TMHInput
                      type="text"
                      name="address1"
                      value={footerData?.contact?.address1}
                      onChange={handleContactChange}
                    />
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>City, Postal Code</span>
                    <TMHInput
                      type="text"
                      name="address2"
                      value={footerData?.contact?.address2}
                      onChange={handleContactChange}
                    />
                  </label>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    gap: 8,
                    flexDirection: 'column',
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>Phone</span>
                    <TMHInput
                      type="text"
                      name="phone"
                      value={footerData?.contact?.phone}
                      onChange={handleContactChange}
                    />
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>Country</span>
                    <TMHInput
                      type="text"
                      name="country"
                      value={footerData?.contact?.country}
                      onChange={handleContactChange}
                    />
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>Email</span>
                    <TMHInput
                      type="text"
                      name="email"
                      value={footerData?.contact?.email}
                      onChange={handleContactChange}
                    />
                  </label>
                </div>
              </div>
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
                onClick={saveFooter}
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
    </Modal>
  );
}
