import useSpeakers from '../hooks/useSpeakers';
import styles from './ManageSpeaker.module.scss';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import { useState } from 'react';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import { Modal, Spinner } from 'reactstrap';
import * as mutations from '../../../../graphql/mutations';

import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { CreateSpeakerMutation, Speaker, UpdateSpeakerMutation } from 'API';

export default function ManageSpeaker() {
  const { speakers, isLoading, addToSpeakers, removeSpeaker, updateSpeaker } =
    useSpeakers();
  const [page, setPage] = useState(0);
  const [showAddSpeakersModal, setShowAddSpeakersModal] = useState(false);
  const deleteSpeaker = async (speakerId: string) => {
    try {
      const deleteSpeaker: any = await API.graphql({
        query: mutations.deleteSpeaker,
        variables: {
          input: {
            id: speakerId,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.deleteSpeaker: ': deleteSpeaker,
      });
      removeSpeaker(speakerId);
    } catch (e) {
      console.error(e);
    }
  };
  const editSpeaker = async (speakerId: string, hidden: boolean) => {
    try {
      const response = (await API.graphql({
        query: mutations.updateSpeaker,
        variables: {
          input: {
            id: speakerId,
            hidden,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateSpeakerMutation>;
      console.log({
        'Success mutations.updateSpeaker: ': response,
      });
      if (response.data?.updateSpeaker)
        updateSpeaker(response.data.updateSpeaker as Speaker);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles['ManageSpeakerContainer']}>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 400,
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 20,
            }}
          >
            <h1 style={{ flex: 1 }}>Speakers</h1>
            <button
              className="adminButton"
              onClick={() => {
                setShowAddSpeakersModal(true);
              }}
              style={{ padding: 8 }}
            >
              <img
                src="/static/svg/Plus-Expand.svg"
                width={16}
                height={16}
                style={{ marginLeft: 2, marginRight: 8 }}
              />
              Create Speaker
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Hidden</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {speakers.slice(page, page + 10).map((speaker, index) => (
                <tr key={speaker.id}>
                  <td style={{ width: '80%' }}>{speaker.name}</td>
                  <td style={{ width: '20%' }}>
                    <input
                      type="checkbox"
                      checked={Boolean(speaker.hidden)}
                      onChange={(e) => {
                        editSpeaker(speaker.id, e.target.checked);
                      }}
                    />
                    {speaker.hidden ? 'Yes' : 'No'}
                  </td>
                  <td>
                    <LocationsTMHButton
                      onClick={() => deleteSpeaker(speaker.id)}
                      link
                    >
                      Delete
                    </LocationsTMHButton>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
          <TransactionPaginate
            paginationIndex={page}
            setPaginationIndex={setPage}
            paginateCount={10}
            length={speakers.length}
          ></TransactionPaginate>
          <AddSpeakerModal
            showModal={showAddSpeakersModal}
            setShowModal={setShowAddSpeakersModal}
            speakers={speakers}
            addToSpeakers={addToSpeakers}
          />
        </>
      )}
    </div>
  );
}
function AddSpeakerModal({
  showModal,
  setShowModal,
  speakers,
  addToSpeakers,
}: any) {
  const [speakerFieldValue, setSpeakerFieldValue] = useState('');
  const [hiddenSpeaker, setHiddenSpeaker] = useState(false);
  const saveSpeaker = async () => {
    if (!speakerFieldValue) return;
    const exists = speakers.find((speaker: any) => {
      return speaker.id === speakerFieldValue;
    });
    if (!exists) {
      const speakerName: string = speakerFieldValue.trim().replaceAll(' ', '_');
      try {
        const createSpeaker = (await API.graphql({
          query: mutations.createSpeaker,
          variables: {
            input: {
              id: speakerFieldValue.trim(),
              name: speakerFieldValue.trim(),
              hidden: hiddenSpeaker,
              image: `https://themeetinghouse.com/cache/320/static/photos/teachers/${speakerName}_app.jpg`,
            },
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateSpeakerMutation>;
        console.log({
          'Success mutations.createSpeaker: ': createSpeaker,
        });
        addToSpeakers(createSpeaker.data?.createSpeaker);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <Modal isOpen={showModal}>
      <div>
        <div>
          id:{' '}
          <input
            value={speakerFieldValue}
            onChange={(item: any) => {
              setSpeakerFieldValue(item.target.value);
            }}
          />
          <input
            style={{ display: 'inline-block', marginRight: '4px' }}
            type="checkbox"
            onChange={() =>
              setHiddenSpeaker((prev) => {
                return !prev;
              })
            }
            checked={hiddenSpeaker}
          ></input>
          Hide Speaker
        </div>
        <button
          onClick={async () => {
            await saveSpeaker();

            setHiddenSpeaker(false);
            setSpeakerFieldValue('');
            setShowModal(false);
          }}
        >
          Save
        </button>
        <button
          style={{ background: 'red' }}
          onClick={() => {
            setHiddenSpeaker(false);
            setSpeakerFieldValue('');
            setShowModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
