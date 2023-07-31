import { API, Auth } from 'aws-amplify';
import { Modal } from 'reactstrap';
import React from 'react';
import Select, { MultiValue } from 'react-select';
import LocationsTMHButton from '../locations/LocationsTMHButton';
export default function PermissionsModal({
  handleClose,
  user,
}: {
  handleClose: () => void;
  user: any;
}) {
  const [userData, setUserData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const removeUserFromGroup = async (
    user: string,
    groupName: string
  ): Promise<any> => {
    if (!user || !groupName) return;
    const apiName = 'AdminQueries';
    const path = '/removeUserFromGroup';
    const myInit = {
      body: {
        username: user,
        groupname: groupName,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    try {
      const { ...rest } = await API.post(apiName, path, myInit);
      console.log({ rest });
      return rest;
    } catch (error) {
      console.log({ errorH: error });
    }
  };
  const addUserToGroup = async (
    user: string,
    groupName: string
  ): Promise<any> => {
    if (!user || !groupName) return;
    const apiName = 'AdminQueries';
    const path = '/addUserToGroup';
    const myInit = {
      body: {
        username: user,
        groupname: groupName,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    try {
      const { ...rest } = await API.post(apiName, path, myInit);
      console.log({ rest });
      return rest;
    } catch (error) {
      console.log({ errorH: error });
    }
  };
  const getUserGroups = async (user: string) => {
    if (!user) return;
    setIsLoading(true);
    const apiName = 'AdminQueries';
    const path = '/listGroupsForUser';
    const myInit = {
      queryStringParameters: {
        username: user,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const z = await API.get(apiName, path, myInit);
    console.log({ adminGetUser: z });
    setIsLoading(false);
    return z;
  };
  const loadUserData = async (username: string) => {
    try {
      const response = await getUserGroups(username);
      setUserData(response);
    } catch (error) {
      console.error({ error });
    }
  };
  React.useEffect(() => {
    if (user) loadUserData(user);
  }, [user]);
  const groups = [
    'LocationManager',
    'Admin',
    'Notes',
    'Bloggers',
    'GlobalContentManager',
    'WebEditorManager',
  ];
  console.log({ userData });
  const handleSelectOnChange = async (
    newValue: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (!newValue) return;
    setIsLoading(true);
    const reducedNewValue = newValue.map((item) => item.value);
    const oldValue = userData.Groups.filter((group: any) =>
      groups.includes(group.GroupName)
    ).map((group: any) => group.GroupName);

    const removed = oldValue.filter((x: any) => !reducedNewValue.includes(x));
    const added = reducedNewValue.filter((x: any) => !oldValue.includes(x));
    const handleRemoved = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log({ currentUser });
      if (removed[0] === 'Admin' && user === currentUser.username) return;
      if (removed.length > 1) {
        await Promise.all(
          removed.map(async (group: string) => {
            if (group === 'Admin' && user === currentUser.username) return;
            await removeUserFromGroup(user, group);
          })
        );
        return;
      } else await removeUserFromGroup(user, removed[0]);
    };
    const handleAdded = async () => {
      await addUserToGroup(user, added[0]);
    };

    await handleRemoved();
    await handleAdded();
    await loadUserData(user);
    setIsLoading(false);
  };
  return (
    <Modal isOpen={Boolean(user)}>
      <div
        style={{
          margin: 16,
        }}
      >
        <span
          style={{
            fontWeight: '700',
            fontSize: 18,
            display: 'block',
          }}
        >
          Manage User Permissions
        </span>
        <span>{user}</span>
        <Select
          value={userData?.Groups?.filter((group: any) =>
            groups.includes(group.GroupName)
          )?.map(
            (group: any) =>
              ({
                label: group.GroupName,
                value: group.GroupName,
              } as any)
          )}
          isMulti
          styles={{
            placeholder: (styles) => {
              return { ...styles, color: '#484848' };
            },
            control: (styles) => ({ ...styles, marginTop: 8 }),
            menuPortal: (styles) => ({ ...styles, zIndex: 999 }), //  >= dialog's z-index
          }}
          loadingMessage={() => 'Loading...'}
          isLoading={isLoading}
          onChange={handleSelectOnChange}
          aria-label="Add or remove user to group"
          placeholder="Select group"
          options={
            groups.map((group) => ({ label: group, value: group })) as any
          }
        />
        <LocationsTMHButton
          style={{
            marginTop: 20,
            marginBottom: 14,
          }}
          onClick={handleClose}
          disabled={isLoading}
        >
          Save
        </LocationsTMHButton>
      </div>
    </Modal>
  );
}
