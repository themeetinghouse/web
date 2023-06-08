import { Modal } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import React from 'react';
import { Storage } from 'aws-amplify';
//import { EditorContext } from './EditorContext';
import TMHInput from './components/TMHInput';

export default function UploadModal({
  showUploadModal,
  setShowUploadModal,
}: {
  showUploadModal: boolean;
  setShowUploadModal: (show: boolean) => void;
}) {
  const [pdfFile, setPdfFile] = React.useState<File | null>(null);
  const [resultMessage, setResultMessage] = React.useState('');
  const [showOverwriteMessage, setShowOverwriteMessage] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  //const state = React.useContext(EditorContext);
  const clearSaveModal = () => {
    setResultMessage('');
    setShowOverwriteMessage(false);
    setIsSaving(false);
    setPdfFile(null);
    setShowUploadModal(false);
  };

  const checkFileExists = async (fileName: string) => {
    try {
      const path = 'editor/pdfs/' + fileName;
      const existingURL = await Storage.get(path);
      const response = await fetch(existingURL);
      const json = await response.json();
      return json;
    } catch (e) {
      return;
    }
  };

  const handleSaveFile = async () => {
    if (!pdfFile) return;
    const exists = await checkFileExists(pdfFile.name);
    if (exists) {
      setShowOverwriteMessage(true);
    } else {
      await saveFile();
      setResultMessage('Successfully saved!');
    }
  };

  const saveFile = async () => {
    if (!pdfFile) return;
    try {
      setIsSaving(true);
      console.log('Saving new file', pdfFile?.name);
      await Storage.put(`editor/pdfs/${pdfFile.name}`, pdfFile, {
        contentType: 'application/pdf',
        acl: 'public-read',
      });
      setResultMessage('Successfully saved!');
    } catch (e) {
      console.log({ e: e });
      setResultMessage('An error occurred. Please try again later.');
    } finally {
      setIsSaving(false);
    }
  };
  React.useEffect(() => {
    if (!showUploadModal) clearSaveModal();
  }, [showUploadModal]);

  return (
    <Modal isOpen={showUploadModal} style={{ zIndex: 100000 }}>
      <div
        style={{
          margin: 16,
        }}
      >
        {pdfFile ? (
          <span>
            {resultMessage ? (
              <b>{resultMessage}</b>
            ) : showOverwriteMessage ? (
              <span>
                Are you sure you want to overwrite the following file:
                <b
                  style={{
                    color: 'tomato',
                  }}
                >
                  {' '}
                  {pdfFile?.name}
                </b>
                ?
              </span>
            ) : !resultMessage && !showOverwriteMessage ? (
              <span>
                Are you sure you want to save the following file:
                <b> {pdfFile?.name}</b>?
              </span>
            ) : null}
          </span>
        ) : (
          <TMHInput
            type="file"
            accept="application/pdf"
            onChange={(event) => {
              const file = event?.target?.files?.[0];
              console.log({ file: file });
              if (file) setPdfFile(file);
            }}
          />
        )}

        <div
          style={{
            marginTop: 40,
            columnGap: 8,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {resultMessage ? (
            <>
              <LocationsTMHButton onClick={clearSaveModal} outline>
                Dismiss
              </LocationsTMHButton>
            </>
          ) : showOverwriteMessage ? (
            <>
              <LocationsTMHButton onClick={handleSaveFile}>
                {isSaving ? 'Saving...' : 'Yes'}
              </LocationsTMHButton>
              <LocationsTMHButton onClick={clearSaveModal} outline>
                No
              </LocationsTMHButton>
            </>
          ) : (
            <>
              <LocationsTMHButton onClick={handleSaveFile}>
                {isSaving ? 'Saving...' : 'Save'}
              </LocationsTMHButton>
              <LocationsTMHButton onClick={clearSaveModal} outline>
                Dismiss
              </LocationsTMHButton>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
