import { useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import styles from './LocationsModal.module.scss';
import LocationsTMHButton from './LocationsTMHButton';
import * as mutations from '../mutations';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

type AlertModalProps = {
  showModal: string;
  dismiss: () => string | null;
  locationId?: string;
  removeLocation: (locationId: string) => void;
};

export default function DeleteConfirmationModal({
  showModal,
  dismiss,
  locationId,
  removeLocation,
}: AlertModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dismissModal = () => {
    setMsg('');
    dismiss();
  };
  const handleDelete = async (locationId: string) => {
    if (!locationId) return;
    setIsDeleting(true);
    try {
      const response = await API.graphql({
        query: mutations.deleteTMHLocation,
        variables: { input: { id: locationId } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      if ('successful') {
        removeLocation(locationId);
      }
      console.log({ response });
      setMsg('Successfully deleted the location.');
    } catch (error: any) {
      console.error({ errorDeleteLocation: error });
      setMsg(
        `An error occurred while deleting the location. ${
          error?.message || error
        }`
      );
    } finally {
      setIsDeleting(false);
      setIsSubmitted(true);
    }
  };
  return (
    <Modal
      size="lg"
      isOpen={Boolean(showModal)}
      toggle={dismissModal}
      onClosed={() => {
        setIsSubmitted(false);
        setMsg(null);
      }}
    >
      <ModalHeader
        className={styles['LocationsModalHeader']}
        style={{ padding: '16px 32px' }}
        toggle={dismiss}
      >
        <span>Confirm</span>
      </ModalHeader>

      <div className={styles['LocationsModal']}>
        {isSubmitted ? (
          <>{msg}</>
        ) : (
          <div>
            Are you sure you want to delete <strong>{locationId}</strong>?
          </div>
        )}
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px 32px',
          columnGap: 8,
        }}
      >
        <LocationsTMHButton disabled={isDeleting} outline onClick={dismiss}>
          Dismiss
        </LocationsTMHButton>
        {!isSubmitted ? (
          <LocationsTMHButton
            disabled={isDeleting}
            onClick={async () => {
              if (!locationId) return;
              handleDelete(locationId);
            }}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </LocationsTMHButton>
        ) : null}
      </div>
    </Modal>
  );
}
