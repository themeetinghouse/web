import { DeleteCustomPlaylistMutation } from 'API';
import { useEffect, useState } from 'react';
import { Modal, Spinner } from 'reactstrap';
import * as mutations from '../../../../graphql/mutations';

import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import styles from './ManageCustomPlaylists.module.scss';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import useCustomPlaylists from '../hooks/useCustomPlaylists';

export default function ManageCustomPlaylists() {
  const { customPlaylists, isLoading, deleteFromPlaylist, addToPlaylist } =
    useCustomPlaylists();

  const [showAddCustomPlaylist, setShowAddCustomPlaylist] = useState(false);
  const [showDeletePlaylist, setShowDeletePlaylist] = useState('');
  const [page, setPage] = useState(0);
  return (
    <div>
      <div>
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
          <div className={styles['ManagePlaylistsContainer']}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 20,
              }}
            >
              <h1 style={{ flex: 1 }}>Custom Playlists</h1>
              <button
                className="adminButton"
                onClick={() => {
                  setShowAddCustomPlaylist(true);
                }}
                style={{ padding: 8 }}
              >
                <img
                  src="/static/svg/Plus-Expand.svg"
                  width={16}
                  height={16}
                  style={{ marginLeft: 2, marginRight: 8 }}
                />
                Create Custom Playlist
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customPlaylists
                  .slice(page, page + 10)
                  .map((customPlaylist) => (
                    <tr key={customPlaylist.id}>
                      <td style={{ width: '80%' }}>{customPlaylist.id}</td>
                      <td>
                        <LocationsTMHButton
                          link
                          onClick={() =>
                            setShowDeletePlaylist(customPlaylist.id)
                          }
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
              length={customPlaylists.length}
            ></TransactionPaginate>
          </div>
        )}
      </div>
      {showAddCustomPlaylist ? (
        <AddCustomPlaylistModal
          addToPlaylist={addToPlaylist}
          showModal={showAddCustomPlaylist}
          setShowModal={setShowAddCustomPlaylist}
        />
      ) : null}
      {showDeletePlaylist ? (
        <DeletePlaylistModal
          deleteFromPlaylist={deleteFromPlaylist}
          showModal={showDeletePlaylist}
          setShowModal={setShowDeletePlaylist}
        />
      ) : null}
    </div>
  );
}

function DeletePlaylistModal({
  showModal,
  setShowModal,
  deleteFromPlaylist,
}: any) {
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePlaylist = async () => {
    if (!showModal) return;

    try {
      setIsDeleting(true);
      const deletePlaylist = (await API.graphql({
        query: mutations.deleteCustomPlaylist,
        variables: { input: { id: showModal } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<DeleteCustomPlaylistMutation>;
      console.log({ 'Success mutations.deletePlaylist: ': deletePlaylist });
      setShowModal('');
      deleteFromPlaylist(deletePlaylist.data?.deleteCustomPlaylist);
      setShowModal(false);
    } catch (e: any) {
      if (e.data && e.data.deleteCustomPlaylist) {
        setShowModal('');
        setShowModal(false);
      }
      console.error(e);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal isOpen={Boolean(showModal)}>
      <div>
        <div>Are you sure you want to delete {showModal}</div>
        <button
          disabled={isDeleting}
          style={{ background: 'orange' }}
          onClick={() => deletePlaylist()}
        >
          Confirm
        </button>
        <button
          disabled={isDeleting}
          style={{ background: 'grey' }}
          onClick={() => {
            setShowModal('');
          }}
        >
          Dismiss
        </button>
      </div>
    </Modal>
  );
}

function AddCustomPlaylistModal({
  showModal,
  setShowModal,
  addToPlaylist,
}: any) {
  const [customPlaylistTypes, setCustomPlaylistTypes] = useState([]);
  const [toSavePlaylist, setToSavePlaylist] = useState({
    id: '',
    title: '',
    seriesType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === 'title')
      setToSavePlaylist({
        ...toSavePlaylist,
        id: e.target.value,
        [e.target.name]: e.target.value,
      });
    else
      setToSavePlaylist({ ...toSavePlaylist, [e.target.name]: e.target.value });
  };

  const savePlaylist = async () => {
    if (!toSavePlaylist.title) return;
    try {
      const savePlaylist: any = await API.graphql({
        query: mutations.createCustomPlaylist,
        variables: { input: toSavePlaylist },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.createCustomPlaylist: ': savePlaylist,
      });
      addToPlaylist(toSavePlaylist);
      setToSavePlaylist({
        id: '',
        title: '',
        seriesType: '',
      });
      setShowModal(false);
    } catch (e) {
      console.error(e);
      setToSavePlaylist({
        id: '',
        title: '',
        seriesType: '',
      });
      setShowModal(false);
    }
  };
  useEffect(() => {
    (async function (): Promise<void> {
      try {
        const response = await fetch('/static/data/custom-playlists.json');
        const json = await response.json();
        setCustomPlaylistTypes(json.types);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <Modal isOpen={showModal}>
      <div>
        <div>id: {toSavePlaylist.id}</div>
        <div>
          Name:{' '}
          <input
            name="title"
            value={toSavePlaylist.title}
            onChange={handleChange}
          />
        </div>
        <div>
          Playlist Type:{' '}
          <select
            name="seriesType"
            className="importvideoDropdown"
            value={toSavePlaylist.seriesType}
            onChange={handleChange}
          >
            <option key="null" value="null">
              None Selected
            </option>
            {customPlaylistTypes.map((item: string, index: number) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={() => {
            savePlaylist();
          }}
        >
          Save
        </button>
        <button
          style={{ background: 'red' }}
          onClick={() => {
            setShowModal(false);
            setToSavePlaylist({
              id: '',
              title: '',
              seriesType: '',
            });
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
