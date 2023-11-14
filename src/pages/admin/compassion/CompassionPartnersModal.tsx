import TMHModal from '../Editor/components/TMHModal';
import TMHInput from '../Editor/components/TMHInput';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import TMHTextArea from '../Editor/components/TMHTextArea';
import { useEffect, useRef, useState } from 'react';
import { Storage } from '@aws-amplify/storage';
import Select from 'react-select';
import {
  CreateTMHCompassionMutation,
  TMHCompassion,
  UpdateTMHCompassionMutation,
} from 'API';
import { API, GraphQLResult } from '@aws-amplify/api';
import * as customMutations from '../../../graphql-custom/customMutations';
type ModifiedCompassion = Omit<
  TMHCompassion,
  '__typename' | 'createdAt' | 'updatedAt'
>;

const ProfileImage = ({
  url,
  large,
  setFile,
  isOpen,
}: {
  url: string;
  setFile: any;
  large?: boolean;
  isOpen?: boolean;
}) => {
  const [uri, setUri] = useState(url);
  const uploadRef = useRef<any>(null);
  useEffect(() => {
    setUri(url);
  }, [url, isOpen]);
  return (
    <div style={{ position: 'relative', alignSelf: 'center' }}>
      <img
        onError={() => {
          setUri('/static/NoCompassionLogo.png');
        }}
        width={large ? '100' : '45'}
        height={large ? '100' : '45'}
        style={{ objectFit: 'cover' }}
        src={uri}
      ></img>
      {large ? (
        <div
          onClick={() => uploadRef?.current?.click()}
          style={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '1px 1px 1px 1px',
            borderRadius: '50px',
            transition: 'all 0.3s',
          }}
        >
          <img style={{ padding: 8 }} src={'/static/svg/Edit.svg'} />
        </div>
      ) : null}
      {uploadRef ? (
        <input
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const file = e.target.files[0];
              if (file.size > 2097152) {
                alert('File must be smaller than 2mb');
              } else if (e?.target?.files?.[0]) {
                setUri(URL.createObjectURL(e.target.files[0]));
                setFile(e.target.files[0]);
              }
            }
          }}
          ref={uploadRef}
          name="upload"
          type="file"
          id="file"
          style={{ display: 'none' }}
        ></input>
      ) : null}
    </div>
  );
};
const validateModifiedCompassion = (data: ModifiedCompassion) => {
  const isValidPhoneNumber = (phone: string | undefined | null) => {
    if (!phone) return true; // allows empty
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/; // adjust the regex as per your requirement
    return phoneRegex.test(phone);
  };

  const isValidURL = (url: any) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };
  const isValidDescription = (description: string | undefined | null) => {
    if (!description) return false;
    return description.length > 0;
  };
  const isValidEmail = (email: string | undefined | null) => {
    if (!email) return true; // allows empty
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidName = (name: string | undefined | null) => {
    if (!name) return false;
    return name.length > 0;
  };
  const isValidLongitude = (longitude: number | undefined | null) => {
    if (longitude === 0) return true;
    if (!longitude) return true;
    return longitude >= -180 && longitude <= 180;
  };
  const isValidLatitude = (latitude: number | undefined | null) => {
    if (latitude === 0) return true;
    if (!latitude) return true;
    return latitude >= -90 && latitude <= 90;
  };
  const isValidSites = (sites: string[]) => {
    return sites.length;
  };
  const errors = [];
  if (!isValidPhoneNumber(data.Phone)) {
    errors.push('Invalid phone number. Expecting 10 digits');
  }

  if (!isValidURL(data.website)) {
    errors.push('Invalid website URL. Must include http:// or https://');
  }

  if (!isValidEmail(data.email)) {
    errors.push('Invalid email address.');
  }
  if (!isValidDescription(data.description)) {
    errors.push('Invalid description. Must not be empty.');
  }
  if (!isValidName(data.name)) {
    errors.push('Invalid name. Must not be empty.');
  }
  if (!isValidLongitude(data?.location?.longitude)) {
    errors.push('Invalid longitude. Must be between -180 and 180');
  }
  if (!isValidLatitude(data?.location?.latitude)) {
    errors.push('Invalid latitude. Must be between -90 and 90');
  }
  if (!isValidSites(data?.sites as string[])) {
    errors.push('Invalid sites. Partner must belong to at least one location.');
  }
  return errors;
};
const initialData: ModifiedCompassion = {
  id: '',
  name: '',
  description: '',
  website: '',
  Phone: '',
  email: '',
  location: {
    latitude: 0,
    longitude: 0,
    address: '',
  } as any,
  address: '',
  region: '',
  sites: [],
  social: {
    instagram: '',
    facebook: '',
    twitter: '',
  } as any,
  imagealt: '',
};

export function CompassionCreatePartnersModal({
  locations,
  isLocationManager,
  setPartners,
  isOpen,
  setIsOpen,
}: {
  locations: any[];
  isLocationManager: boolean;
  setPartners: React.Dispatch<React.SetStateAction<TMHCompassion[]>>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [file, setFile] = useState<any>(null);
  const [userData, setUserData] = useState<ModifiedCompassion>(initialData);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  const handleChange = (e: any) => {
    if (e.target.name.includes('.')) {
      const [first, second] = e.target.name.split('.');
      const firstData = userData[first as keyof ModifiedCompassion];
      if (typeof firstData === 'object' && firstData !== null) {
        setUserData({
          ...userData,
          [first as keyof ModifiedCompassion]: {
            ...firstData,
            [second]: e.target.value,
          },
        });
      } else {
        setUserData({
          ...userData,
          [first as keyof ModifiedCompassion]: {
            [second]: e.target.value,
          },
        });
      }
      return;
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const uploadToS3 = async (name: string) => {
    const S3_BUCKET =
      'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';
    if (!file || !name) return;
    try {
      if (userData?.image) {
        const oldKey = `editor/compassion-images/${userData?.image}`
          .split('/')
          .pop();
        if (oldKey) await Storage.remove(oldKey);
      }
      const extension = file.name.split('.').pop();
      const path = 'editor/compassion-images/';
      const key = `${path}${name.replaceAll(
        /\s/g,
        '_'
      )}-${new Date().getTime()}.${extension}`;
      const result = await Storage.put(key, file, {
        acl: 'public-read',
        cacheControl: 'max-age=604800',
      });
      console.log({ result });
      if (!result) return;
      return S3_BUCKET + key;
    } catch (error) {
      console.log({ error });
    }
  };

  const handleSave = async () => {
    const errors = validateModifiedCompassion(userData);
    if (errors.length) {
      setErrorMessage(errors);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...restOfUser } = userData;
    try {
      let s3Result = null;
      if (file) s3Result = await uploadToS3(userData?.name ?? '');
      if (s3Result) restOfUser.image = s3Result;
      if (isLocationManager && locations[0])
        restOfUser.sites = [locations?.[0]?.id];
      const createPartner = (await API.graphql({
        query: customMutations.createTMHCompassion,
        variables: { input: restOfUser },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<CreateTMHCompassionMutation>;
      console.log({ createPartner });
      if (createPartner.data?.createTMHCompassion) {
        const data = createPartner.data?.createTMHCompassion;
        setPartners((partners) => [data as TMHCompassion, ...partners]);
        handleClose();
      } else {
        setErrorMessage(['Unknown error']);
      }
    } catch (error) {
      const e = error as { message?: string; errors?: { message?: string }[] };
      console.error({ error });
      setErrorMessage([e.message ?? 'Unknown error']);
    }
  };
  const handleClose = () => {
    setFile(null);
    setErrorMessage([]);
    setUserData(initialData);
    setCurrentPage(1);
    setIsOpen(false);
  };
  return (
    <TMHModal onClose={handleClose} isOpen={isOpen}>
      <div style={{ minWidth: '45vw', padding: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1 style={{ flex: 1 }}>Create a new partner</h1>
          <button
            onClick={handleClose}
            type="button"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'inline',
            }}
          >
            X
          </button>{' '}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <ProfileImage
            isOpen={isOpen}
            setFile={setFile}
            large
            url={userData?.image ?? ''}
          />
          {currentPage === 1 ? (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  label="Name"
                  placeholder="New Life Girls Home"
                  name="name"
                  value={userData?.name ?? ''}
                ></TMHInput>
                <TMHInput
                  onChange={handleChange}
                  name="Phone"
                  placeholder="4165552222"
                  label="Phone"
                  value={userData?.Phone ?? ''}
                ></TMHInput>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  placeholder="person@themeetinghouse.com"
                  name="email"
                  label="Email"
                  value={userData?.email ?? ''}
                ></TMHInput>
                <TMHInput
                  onChange={handleChange}
                  placeholder="https://themeetinghouse.com"
                  name="website"
                  label="Website"
                  value={userData?.website ?? ''}
                ></TMHInput>
              </div>
              <TMHTextArea
                onChange={handleChange}
                style={{ minHeight: 100 }}
                placeholder="A description of the partner..."
                name="description"
                label="Partner Description"
                value={userData?.description ?? ''}
              ></TMHTextArea>
            </>
          ) : currentPage === 2 ? (
            <>
              <TMHInput
                onChange={handleChange}
                label="Image Accessibility Description"
                placeholder="Two people talking in room"
                name="imagealt"
                value={userData?.imagealt ?? ''}
              ></TMHInput>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  label="Latitude"
                  placeholder="43.6532"
                  name="location.latitude"
                  value={userData?.location?.latitude ?? ''}
                ></TMHInput>
                <TMHInput
                  onChange={handleChange}
                  placeholder="-79.3832"
                  name="location.longitude"
                  label="Longitude"
                  value={userData?.location?.longitude ?? ''}
                ></TMHInput>
              </div>
              <TMHInput
                onChange={handleChange}
                placeholder="123 Main St, Toronto, ON"
                name="location.address"
                label="Address"
                value={userData?.location?.address ?? ''}
              ></TMHInput>
            </>
          ) : currentPage === 3 ? (
            <>
              <TMHInput
                onChange={handleChange}
                label="Instagram"
                name="social.instagram"
                placeholder="https://instagram.com/themeetinghouse"
                value={userData?.social?.instagram ?? ''}
              ></TMHInput>
              <TMHInput
                onChange={handleChange}
                name="social.facebook"
                label="Facebook"
                placeholder="https://facebook.com/themeetinghouse"
                value={userData?.social?.facebook ?? ''}
              ></TMHInput>
              <TMHInput
                onChange={handleChange}
                label="Twitter"
                placeholder={'https://twitter.com/themeetinghouse'}
                name="social.twitter"
                value={userData?.social?.twitter ?? ''}
              ></TMHInput>

              <label>
                Locations associated with this partner (select all that apply)
              </label>
              <Select
                value={userData?.sites?.map((site) => ({
                  value: site,
                  label:
                    locations.find((location) => location.id === site)?.name ??
                    site,
                }))}
                name="sites"
                isMulti
                options={
                  (locations?.map((location) => ({
                    value: location.id,
                    label: location.name,
                  })) as any) ?? []
                }
                onChange={(newValue) => {
                  console.log({ newValue });
                  handleChange({
                    target: {
                      value: newValue.map((value) => value.value),
                      name: 'sites',
                    },
                  });
                }}
              />
            </>
          ) : null}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <LocationsTMHButton
              style={currentPage > 1 ? {} : { visibility: 'hidden' }}
              outline
              onClick={prevPage}
            >
              {'<'}
            </LocationsTMHButton> */}

            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <PageBubbles
                setPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
            {/* <LocationsTMHButton
              style={currentPage < totalPages ? {} : { visibility: 'hidden' }}
              onClick={nextPage}
            >
              {'>'}
            </LocationsTMHButton> */}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              gap: 8,
            }}
          >
            <LocationsTMHButton outline onClick={handleClose}>
              Dismiss
            </LocationsTMHButton>
            <LocationsTMHButton
              onClick={() => {
                if (currentPage === totalPages) handleSave();
                else nextPage();
              }}
            >
              {currentPage === totalPages ? 'Save' : 'Next'}
            </LocationsTMHButton>
          </div>
          {errorMessage.length
            ? errorMessage.map((error) => (
                <span key={error} style={{ color: 'tomato' }}>
                  {error}
                </span>
              ))
            : null}
        </div>
      </div>
    </TMHModal>
  );
}

export function CompassionEditPartnersModal({
  setSelectedPartner,
  locations,
  isLocationManager,
  selectedPartner,
  setPartners,
}: {
  locations: any[];
  selectedPartner: any;
  isLocationManager: boolean;
  setSelectedPartner: (partner: any) => void;
  setPartners: React.Dispatch<React.SetStateAction<TMHCompassion[]>>;
}) {
  const [file, setFile] = useState<any>(null);
  const uploadToS3 = async (name: string) => {
    const S3_BUCKET =
      'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';
    if (!file || !name) return;
    try {
      if (userData?.image) {
        const oldKey = `editor/compassion-images/${userData?.image}`
          .split('/')
          .pop();
        if (oldKey) await Storage.remove(oldKey);
      }
      const extension = file.name.split('.').pop();
      const path = 'editor/compassion-images/';
      const key = `${path}${name.replaceAll(
        /\s/g,
        '_'
      )}-${new Date().getTime()}.${extension}`;
      const result = await Storage.put(key, file, {
        acl: 'public-read',
        cacheControl: 'max-age=604800',
      });
      console.log({ result });
      if (!result) return;
      return S3_BUCKET + key;
    } catch (error) {
      console.log({ error });
    }
  };
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const handleDelete = async (id: string) => {
    try {
      await API.graphql({
        query: customMutations.deleteTMHCompassion,
        variables: { input: { id } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      setPartners((partners) =>
        partners.filter((partner) => partner.id !== id)
      );
      handleClose();
    } catch (e: unknown) {
      const error = e as { message?: string; errors?: { message?: string }[] };
      console.error(error);
      setErrorMessage([
        error.message ?? error.errors?.[0].message ?? 'Unknown error',
      ]);
    }
  };
  const [userData, setUserData] = useState<ModifiedCompassion>(
    selectedPartner ?? initialData
  );
  useEffect(() => {
    setUserData(selectedPartner);
  }, [selectedPartner]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  const handleChange = (e: any) => {
    if (e.target.name.includes('.')) {
      const [first, second] = e.target.name.split('.');
      const firstData = userData[first as keyof ModifiedCompassion];

      if (typeof firstData === 'object' && firstData !== null) {
        setUserData({
          ...userData,
          [first as keyof ModifiedCompassion]: {
            ...firstData,
            [second]: e.target.value,
          },
        });
      } else {
        setUserData({
          ...userData,
          [first as keyof ModifiedCompassion]: {
            [second]: e.target.value,
          },
        });
      }
      return;
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const errors = validateModifiedCompassion(userData);
    if (errors.length) {
      setErrorMessage(errors);
      return;
    }
    const clonedData = { ...userData };
    try {
      let s3Result = null;
      if (file) s3Result = await uploadToS3(userData?.name ?? '');
      if (s3Result) clonedData.image = s3Result;
      if (isLocationManager && locations[0]) clonedData.sites = [locations[0]];
      const updatePartner = (await API.graphql({
        query: customMutations.updateTMHCompassion,
        variables: { input: clonedData },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<UpdateTMHCompassionMutation>;
      console.log({ updatePartner });
      if (updatePartner.data?.updateTMHCompassion) {
        const data = updatePartner.data?.updateTMHCompassion;
        setPartners((partners) =>
          partners.find((partner) => partner.id === data?.id)
            ? (partners.map((partner) =>
                partner.id === data?.id ? data : partner
              ) as TMHCompassion[])
            : ([data, ...partners] as TMHCompassion[])
        );
        handleClose();
      } else {
        setErrorMessage(['Unknown error']);
      }
    } catch (error: unknown) {
      const e = error as { message?: string; errors?: { message?: string }[] };
      console.error({ error });
      setErrorMessage([e?.message ?? 'Unknown error']);
    }
    console.log({ saving: userData });
  };
  const handleClose = () => {
    setFile(null);
    setErrorMessage([]);
    setUserData(initialData);
    setCurrentPage(1);
    setSelectedPartner(null);
  };
  return (
    <TMHModal onClose={handleClose} isOpen={selectedPartner}>
      <div style={{ minWidth: '45vw', padding: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1 style={{ flex: 1 }}>{userData?.name ?? 'Enter a name'}</h1>
          <button
            type="button"
            onClick={handleClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'inline',
            }}
          >
            X
          </button>{' '}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 20,
          }}
        >
          <ProfileImage setFile={setFile} large url={userData?.image ?? ''} />
          {currentPage === 1 ? (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  label="Partner Name"
                  name="name"
                  value={userData?.name ?? ''}
                ></TMHInput>
                <TMHInput
                  onChange={handleChange}
                  name="Phone"
                  label="Phone"
                  value={userData?.Phone ?? ''}
                ></TMHInput>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  value={userData?.email ?? ''}
                ></TMHInput>
                <TMHInput
                  onChange={handleChange}
                  name="website"
                  label="Website"
                  value={userData?.website ?? ''}
                ></TMHInput>
              </div>
              <TMHTextArea
                onChange={handleChange}
                style={{ minHeight: 100 }}
                name="description"
                label="Partner Description"
                value={userData?.description ?? ''}
              ></TMHTextArea>
            </>
          ) : currentPage === 2 ? (
            <>
              <TMHInput
                onChange={handleChange}
                label="Image Accessibility Description"
                name="imagealt"
                value={userData?.imagealt ?? ''}
              ></TMHInput>

              <TMHInput
                onChange={handleChange}
                label="Latitude"
                name="location.latitude"
                value={userData?.location?.latitude ?? ''}
              ></TMHInput>
              <TMHInput
                onChange={handleChange}
                name="location.longitude"
                label="Longitude"
                value={userData?.location?.longitude ?? ''}
              ></TMHInput>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <TMHInput
                  onChange={handleChange}
                  name="location.address"
                  label="Address"
                  value={userData?.location?.address ?? ''}
                ></TMHInput>
              </div>
            </>
          ) : currentPage === 3 ? (
            <>
              <TMHInput
                onChange={handleChange}
                label="Instagram"
                name="social.instagram"
                placeholder="https://instagram.com/themeetinghouse"
                value={userData?.social?.instagram ?? ''}
              ></TMHInput>
              <TMHInput
                onChange={handleChange}
                name="social.facebook"
                label="Facebook"
                placeholder="https://facebook.com/themeetinghouse"
                value={userData?.social?.facebook ?? ''}
              ></TMHInput>
              <TMHInput
                onChange={handleChange}
                label="Twitter"
                placeholder={'https://twitter.com/themeetinghouse'}
                name="social.twitter"
                value={userData?.social?.twitter ?? ''}
              ></TMHInput>

              <label>
                Locations associated with this partner (select all that apply)
              </label>
              <Select
                value={userData?.sites?.map((site) => ({
                  value: site,
                  label:
                    locations.find((location) => location.id === site)?.name ??
                    site,
                }))}
                name="sites"
                isMulti
                options={
                  (locations?.map((location) => ({
                    value: location.id,
                    label: location.name,
                  })) as any) ?? []
                }
                onChange={(newValue) => {
                  console.log({ newValue });
                  handleChange({
                    target: {
                      value: newValue.map((value) => value.value),
                      name: 'sites',
                    },
                  });
                }}
              />
            </>
          ) : null}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <LocationsTMHButton
              style={currentPage > 1 ? {} : { visibility: 'hidden' }}
              outline
              onClick={prevPage}
            >
              {'<'}
            </LocationsTMHButton> */}

            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20,
                gap: 20,
              }}
            >
              <PageBubbles
                setPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
            {/* <LocationsTMHButton
              style={currentPage < totalPages ? {} : { visibility: 'hidden' }}
              onClick={nextPage}
            >
              {'>'}
            </LocationsTMHButton> */}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              gap: 8,
            }}
          >
            {' '}
            <LocationsTMHButton
              style={{ backgroundColor: 'tomato' }}
              onClick={() => {
                const shouldDelete = confirm(
                  `Are you sure you want to delete ${
                    selectedPartner.name ?? userData?.name
                  } partner?`
                );
                if (shouldDelete) {
                  handleDelete(selectedPartner.id ?? userData?.id);
                }
              }}
            >
              Delete
            </LocationsTMHButton>
            <LocationsTMHButton outline onClick={handleClose}>
              Dismiss
            </LocationsTMHButton>
            <LocationsTMHButton onClick={handleSave}>Save</LocationsTMHButton>
          </div>
          {errorMessage.length
            ? errorMessage.map((error) => (
                <span key={error} style={{ color: 'tomato' }}>
                  {error}
                </span>
              ))
            : null}
        </div>
      </div>
    </TMHModal>
  );
}

const PageBubbles = ({
  currentPage,
  totalPages,
  setPage,
}: {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index + 1 === currentPage;
        return (
          <div
            key={'bubble-' + index}
            onClick={() => setPage(index + 1)}
            style={{
              cursor: 'pointer',
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: isActive ? '#1a1a1a' : 'white',
              border: '1px solid #1a1a1a',
            }}
          />
        );
      })}
    </div>
  );
};
