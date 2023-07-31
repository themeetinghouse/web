import { API, Auth } from 'aws-amplify';
import React from 'react';
import PermissionsModal from './PermissionsModal';
import { Spinner } from 'reactstrap';
import { useDebounce } from 'hooks/useDebounce';
function SearchCognitoUser({ setUsers }: { setUsers: any }) {
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const debouncedSearchTerm = useDebounce(search, 1000);

  const doSearch = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const listUsers = async (
        limit: number,
        nextToken: string | null
      ): Promise<any> => {
        const apiName = 'AdminQueries';
        const path = '/listUsers';
        const myInit = {
          queryStringParameters: {
            limit: limit,
            token: nextToken,
            //eslint-disable-next-line
            filter: `email ^= \"${searchTerm}\"`,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`,
          },
        };
        const z = await API.get(apiName, path, myInit);
        console.log({ z });
        const { NextToken, ...rest } = z;
        nextToken = NextToken;
        return { nextToken, ...rest };
      };
      const users = await listUsers(60, null); // 60 is max api accepts
      setUsers(users.Users);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    if (debouncedSearchTerm) {
      doSearch(debouncedSearchTerm);
    } else {
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);
  const placeHolder = `Search by email`;
  return (
    <div style={{ flexDirection: 'row', display: 'flex', height: 40 }}>
      <div style={{ flexDirection: 'row', flex: 1, display: 'flex' }}>
        <div style={{ alignSelf: 'center', padding: 8, display: 'flex' }}>
          {!isLoading ? (
            <img
              style={{ width: 20, height: 20, zIndex: 1000 }}
              src="/static/svg/Search.svg"
            ></img>
          ) : (
            <Spinner style={{ width: 20, height: 20, borderWidth: 2 }} />
          )}
        </div>

        <input
          style={{
            paddingTop: 6,
            paddingBottom: 6,
            marginLeft: -36,
            paddingLeft: 36,

            borderColor: 'black',
            borderRadius: 4,
            borderWidth: 1,
          }}
          placeholder={placeHolder}
          onChange={(event) => {
            setIsLoading(true);
            setSearch(event.target.value);
          }}
          value={search}
        />
      </div>
    </div>
  );
}

export default function PermissionsManager() {
  const [users, setUsers] = React.useState<any[]>([]);
  const [editUser, setEditUser] = React.useState<string | null>(null);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <span
            style={{
              flex: 1,
              fontWeight: '700',
              fontSize: 20,
              color: '#212529',
            }}
          >
            Manage User Permissions
          </span>
          <span
            style={{
              fontSize: 12,
            }}
          >
            Search for a user by email to update their permissions
          </span>
        </div>

        <SearchCognitoUser setUsers={setUsers} />
      </div>

      {users
        .sort((a, b) => a.Username.localeCompare(b.Username))
        .map((user, index) => {
          return (
            <div
              key={user.Username}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: index % 2 == 0 ? '#F8F9FA' : 'white',
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                }}
              >
                {user.Username}
              </span>
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                }}
                type="button"
                onClick={() => setEditUser(user?.Username)}
              >
                <img
                  style={{ width: 20, height: 20, zIndex: 1000, marginLeft: 4 }}
                  src="/static/svg/Register.svg"
                ></img>
              </button>
            </div>
          );
        })}
      {users.length === 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 100,
          }}
        >
          <img
            style={{ width: 100, height: 150, zIndex: 1000 }}
            src="/static/svg/empty.svg"
          ></img>
          <span style={{ fontSize: 14 }}>Start typing to search for users</span>
        </div>
      ) : null}

      <PermissionsModal user={editUser} handleClose={() => setEditUser(null)} />
    </div>
  );
}
