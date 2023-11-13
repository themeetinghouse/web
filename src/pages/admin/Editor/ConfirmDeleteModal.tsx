import React from 'react';
import { Modal } from 'reactstrap';
import LocationsTMHButton from '../locations/LocationsTMHButton';

export default function ConfirmDeleteModal({
  contentKey,
  handleDelete,
  clearDeleteKey,
}: {
  contentKey: string | null;
  handleDelete: () => Promise<boolean>;
  clearDeleteKey: () => void;
}) {
  const [resultMessage, setResultMessage] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const pageType = contentKey?.includes('backup')
    ? 'backup'
    : contentKey?.includes('templates')
    ? 'template'
    : contentKey?.includes('draft')
    ? 'draft'
    : 'public';
  const handleDeletePage = async () => {
    setIsDeleting(true);
    const success = await handleDelete();
    if (success) {
      setResultMessage(`${pageType} page was successfully deleted.`);
    } else {
      setResultMessage(`${pageType} page failed to delete.`);
    }
    setIsDeleting(false);
  };
  const handleClear = () => {
    setResultMessage('');
    setIsDeleting(false);
    setResultMessage('');
    clearDeleteKey();
  };

  return (
    <Modal isOpen={Boolean(contentKey)} onClosed={handleClear}>
      <div
        style={{
          margin: 16,
        }}
      >
        <span>
          {!resultMessage ? (
            <>
              Are you sure you want to delete the following {pageType} page:
              <b>
                {' '}
                {contentKey
                  ?.replace('savedContent/', '')
                  .replace('editor/templates/', '')}
              </b>
              ?
            </>
          ) : (
            resultMessage
          )}
        </span>
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
              <LocationsTMHButton onClick={handleClear} outline>
                Dismiss
              </LocationsTMHButton>
            </>
          ) : (
            <>
              <LocationsTMHButton onClick={handleDeletePage}>
                {isDeleting ? 'Deleting...' : 'Delete'}
              </LocationsTMHButton>
              <LocationsTMHButton onClick={handleClear} outline>
                Dismiss
              </LocationsTMHButton>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
