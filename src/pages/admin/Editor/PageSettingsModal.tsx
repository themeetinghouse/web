import { Modal } from 'reactstrap';
import {
  useEditorPageContext,
  EditorPage,
  EditorPageActionType,
} from './contexts/EditorPageContext';
import TMHInput from './components/TMHInput';
import TMHTooltip from 'components/TMHTooltip/TMHTooltip';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import { useState } from 'react';
import styles from './PageSettingsModal.module.scss';
export default function PageSettingsModal({
  draftPages,
  publicPages,
}: {
  draftPages: any;
  publicPages: any;
}) {
  const { state, dispatch } = useEditorPageContext();
  const [pageTitle, setPageTitle] = useState('');
  const [pageName, setPageName] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [pageKeywords, setPageKeywords] = useState('');
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [showLiveBar, setShowLiveBar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [pageTitleError, setPageTitleError] = useState(false);
  const { currentPage } = state;
  const [step, setStep] = useState(0);
  const validateStepOne = () => {
    if (!pageTitle || !pageName) return false;
    return true;
  };
  const validateStepTwo = () => {
    if (!pageDescription || !pageKeywords) return false;
    return true;
  };
  const clearData = () => {
    setPageTitle('');
    setPageName('');
    setPageDescription('');
    setPageKeywords('');
    setShowSearchButton(true);
    setShowLiveBar(true);
    setShowFooter(true);
  };
  return (
    <Modal
      isOpen={currentPage === EditorPage.ENTER_PAGE_SETTINGS_PAGE}
      onClosed={clearData}
    >
      <div>
        <div
          className={`${styles['StepContainer']} ${
            step === 0 ? `${styles['active']}` : ''
          }`}
        >
          <span>Enter page name and title</span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginTop: 20,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Page name</label>
              <TMHTooltip tooltipText="This is the url to the page">
                {!pageName.length || pageTitleError ? (
                  <span style={{ color: 'tomato' }}>*</span>
                ) : null}
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>
            {pageTitleError ? (
              <span style={{ color: 'tomato' }}>
                A page with this name already exists.{' '}
                <span style={{ color: 'black' }}>
                  <button
                    onClick={() => {
                      // determine the page,
                      // set the page to be edited
                      // set the editMode to draft or public
                      // navigate to editor
                      clearData();
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      textDecoration: 'underline',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Click here
                  </button>{' '}
                  to make changes to it.
                </span>
              </span>
            ) : null}
            <TMHInput
              onChange={(e) => {
                setPageName(e.target.value.toLowerCase());
                console.log({ draftPages, publicPages });
                const draftPageNames = draftPages.map((page: any) =>
                  page.key.replace('editor/drafts/', '').replace('.json', '')
                );
                const publicsWithName = publicPages.map((page: any) =>
                  page.key.replace('savedContent/', '').replace('.json', '')
                );
                console.log({ draftPageNames, publicsWithName });
                if (
                  (e.target.value.toLowerCase() &&
                    draftPageNames.find(
                      (page: any) => page === e.target.value
                    )) ||
                  (e.target.value.toLowerCase() &&
                    publicsWithName.find(
                      (page: any) => page === e.target.value
                    ))
                ) {
                  setPageTitleError(true);
                } else {
                  setPageTitleError(false);
                }
              }}
              value={pageName}
              placeholder="about-us"
            />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Title</label>
              <TMHTooltip tooltipText="This is the title of the page. Shows in the browser tab name, and google search results">
                {!pageTitle.length ? (
                  <span style={{ color: 'tomato' }}>*</span>
                ) : null}
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
              placeholder="The Meeting House - Teaching"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              marginTop: 20,
            }}
          >
            <LocationsTMHButton
              onClick={() => {
                if (!validateStepOne()) return;
                setStep((prev) => prev + 1);
              }}
            >
              Next
            </LocationsTMHButton>
          </div>
        </div>

        <div
          className={`${styles['StepContainer']} ${
            step === 1 ? `${styles['active']}` : ''
          }`}
        >
          <span>Enter keywords and page description</span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginTop: 20,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Description</label>
              <TMHTooltip tooltipText="A description of the page used for SEO">
                {!pageDescription.length ? (
                  <span style={{ color: 'tomato' }}>*</span>
                ) : null}
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              value={pageDescription}
              onChange={(e) => setPageDescription(e.target.value)}
              placeholder={`When’s the last time someone asked you what you believe? We’re a church that loves to ask questions, and loves people with questions. We don’t have all the answers, but exploring together is pretty much our favourite thing.`}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Keywords</label>
              <TMHTooltip tooltipText="Comma separated list of terms associated with the topics on this page. Used for SEO">
                {!pageKeywords.length ? (
                  <span style={{ color: 'tomato' }}>*</span>
                ) : null}
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              value={pageKeywords}
              onChange={(e) => setPageKeywords(e.target.value)}
              placeholder="Church, Toronto, Anabaptist, Christian, Jesus"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              marginTop: 20,
            }}
          >
            <LocationsTMHButton onClick={() => setStep((prev) => prev - 1)}>
              Back
            </LocationsTMHButton>
            <LocationsTMHButton
              onClick={() => {
                if (!validateStepTwo()) return;
                setStep((prev) => prev + 1);
              }}
            >
              Next
            </LocationsTMHButton>
          </div>
        </div>

        <div
          className={`${styles['StepContainer']} ${
            step === 2 ? `${styles['active']}` : ''
          }`}
        >
          <span>Page Settings</span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginTop: 20,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Should this page display the search button?</label>
              <TMHTooltip tooltipText="Displays search button at the top right of the page.">
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              type="checkbox"
              checked={showSearchButton}
              style={{
                alignSelf: 'flex-start',
                transform: 'scale(1.5)',
                marginLeft: 4,
              }}
              onChange={(e) => setShowSearchButton(e.target.checked)}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Should this page display the live bar?</label>
              <TMHTooltip tooltipText="Determines whether to display the live events/streams bar on this page.">
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              type="checkbox"
              checked={showLiveBar}
              style={{
                alignSelf: 'flex-start',
                transform: 'scale(1.5)',
                marginLeft: 4,
              }}
              onChange={(e) => setShowLiveBar(e.target.checked)}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Should this page display the footer?</label>
              <TMHTooltip tooltipText="Determines whether to display the footer.">
                <span style={{ marginLeft: 4 }}>ⓘ</span>
              </TMHTooltip>
            </div>

            <TMHInput
              type="checkbox"
              checked={showFooter}
              style={{
                alignSelf: 'flex-start',
                transform: 'scale(1.5)',
                marginLeft: 4,
              }}
              onChange={(e) => setShowFooter(e.target.checked)}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              marginTop: 20,
            }}
          >
            <LocationsTMHButton onClick={() => setStep((prev) => prev - 1)}>
              Back
            </LocationsTMHButton>
            <LocationsTMHButton
              onClick={() => {
                dispatch({
                  type: EditorPageActionType.SET_CURRENT_PAGE,
                  payload: {
                    ...state.content,
                    page: {
                      ...state.content.page,
                      title: pageTitle,
                      name: pageName,
                      description: pageDescription,
                      keywords: pageKeywords,
                      pageConfig: {
                        ...state.content.page.pageConfig,
                        showSearch: showSearchButton,
                        showLive: showLiveBar,
                      },
                    },
                  },
                });
              }}
            >
              Complete
            </LocationsTMHButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}
