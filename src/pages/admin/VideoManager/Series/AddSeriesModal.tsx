import { useMemo, useState } from 'react';
import LocationsTMHButton from '../../locations/LocationsTMHButton';
import API, { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import {
  CreateSeriesInput,
  CreateSeriesMutation,
  Series,
  UpdateSeriesMutation,
} from 'API';
import moment from 'moment';
import { Modal } from 'reactstrap';
import * as adminMutations from '../../mutations';
import styles from './AddSeriesModal.module.scss';
import UploadPicture from '../UploadPicture';
import { Storage } from 'aws-amplify';

type NewSeriesData = CreateSeriesInput;

const uploadToS3 = async (
  file: File,
  seriesTitle: string,
  oldUrl?: string
): Promise<string> => {
  const S3_BUCKET =
    'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';
  if (!file || !seriesTitle) return '';
  try {
    if (oldUrl) {
      const oldKey = `series/${oldUrl.split('/').pop()}`;
      if (oldKey) await Storage.remove(oldKey);
    }
    const extension = file.name.split('.').pop();
    const path = 'series/';
    const key = `${path}${seriesTitle.replaceAll(
      /\s/g,
      '_'
    )}-${new Date().getTime()}.${extension}`;
    const result = await Storage.put(key, file, {
      acl: 'public-read',
      cacheControl: 'max-age=604800',
    });
    console.log({ result });
    if (!result) return '';
    return S3_BUCKET + key;
  } catch (error) {
    console.log({ error });
    return '';
  }
};

export default function AddSeriesModal({
  selectedSeries,
  addToSeries,
  updateSeries,
  isOpen,
  toggle,
  videoTypes,
}: {
  selectedSeries: Series | null;
  addToSeries: (series: Series) => void;
  updateSeries: (series: Series) => void;
  isOpen: boolean;
  videoTypes: any;
  toggle: () => void;
}) {
  const oldSeries: NewSeriesData = useMemo(
    () => ({ ...selectedSeries }),
    [selectedSeries]
  );
  const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);
  const [babyHeroImageFile, setBabyHeroImageFile] = useState<File | null>(null);
  const [newSeriesData, setNewSeriesData] = useState<NewSeriesData>({
    id: selectedSeries?.id ?? '',
    title: selectedSeries?.title ?? '',
    startDate: selectedSeries?.startDate ?? '',
    endDate: selectedSeries?.endDate ?? '',
    seriesType: selectedSeries?.seriesType ?? '',
    babyHeroImage: selectedSeries?.babyHeroImage ?? {
      alt: '',
      src: '',
    },
    bannerImage: selectedSeries?.bannerImage ?? {
      alt: '',
      src: '',
    },
  });
  const { title, startDate, endDate, seriesType } = newSeriesData;
  const clearData = () => {
    setNewSeriesData({
      title: '',
      startDate: '',
      endDate: '',
      seriesType: '',
      babyHeroImage: {
        alt: '',
        src: '',
      },
      bannerImage: {
        alt: '',
        src: '',
      },
    });
  };
  const handleS3Uploads = async () => {
    if (!title) return {};
    try {
      const bannerImage = {
        alt: title + ' banner image',
        src: '',
      };
      const babyHeroImage = {
        alt: title + ' baby hero image',
        src: '',
      };
      if (bannerImageFile) {
        bannerImage.src = await uploadToS3(
          bannerImageFile,
          title,
          newSeriesData.bannerImage?.src ?? ''
        );
      }
      if (babyHeroImageFile) {
        babyHeroImage.src = await uploadToS3(
          babyHeroImageFile,
          title,
          newSeriesData.babyHeroImage?.src ?? ''
        );
      }
      return { bannerImage, babyHeroImage };
    } catch (error) {
      console.log({ error });
      return {};
    }
  };
  const handleUpdateSeries = async () => {
    try {
      const newSeriesValues = { ...newSeriesData };
      const { bannerImage, babyHeroImage } = await handleS3Uploads();
      Object.keys(oldSeries).map((key) => {
        if (
          oldSeries[key as keyof NewSeriesData] ===
          newSeriesData[key as keyof NewSeriesData]
        ) {
          delete newSeriesValues[key as keyof NewSeriesData];
        }
        if (key === 'babyHeroImage' && babyHeroImage?.src) {
          newSeriesValues[key] = babyHeroImage;
        }
        if (key === 'bannerImage' && bannerImage?.src) {
          newSeriesValues[key] = bannerImage;
        }
      });
      if (Object.keys(newSeriesValues).length === 0) return;
      if (!newSeriesData.id) return;
      const input: CreateSeriesInput = {
        id: newSeriesData.id,
        ...newSeriesValues,
      };
      const updateSeriesResponse = (await API.graphql({
        query: adminMutations.updateSeries,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateSeriesMutation>;
      console.log({ updateSeriesResponse });
      if (updateSeriesResponse.data?.updateSeries) {
        console.log({ oldSeries });
        console.log({ newData: updateSeriesResponse.data.updateSeries });
        updateSeries(updateSeriesResponse.data.updateSeries as Series);
        toggle();
      }
      console.log({ newSeriesValues });
    } catch (error) {
      console.log({ error });
    }
  };
  const handleSaveSeries = async () => {
    try {
      if (!title) return;
      const bannerImage = {
        alt: title + ' banner image',
        src: '',
      };
      const babyHeroImage = {
        alt: title + ' baby hero image',
        src: '',
      };
      if (bannerImageFile) {
        babyHeroImage.src = await uploadToS3(
          bannerImageFile,
          title,
          newSeriesData.bannerImage?.src ?? ''
        );
      }
      if (babyHeroImageFile) {
        babyHeroImage.src = await uploadToS3(
          babyHeroImageFile,
          title,
          newSeriesData.babyHeroImage?.src ?? ''
        );
      }
      const input: CreateSeriesInput = {
        id: title,
        title,
        startDate,
        endDate,
        seriesType,
      };
      if (bannerImage.src) input.bannerImage = bannerImage;
      if (babyHeroImage.src) input.babyHeroImage = babyHeroImage;
      const saveSeries = (await API.graphql({
        query: adminMutations.createSeries,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateSeriesMutation>;
      console.log({ saveSeries });
      if (saveSeries.data?.createSeries) {
        addToSeries(saveSeries.data.createSeries as Series);
        clearData();
        toggle();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    if (selectedSeries) {
      handleUpdateSeries();
      return;
    }
    handleSaveSeries();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === 'startDate') {
      const newEndDate = moment(e.target.value).add(7, 'days');
      setNewSeriesData((prev) => ({
        ...prev,
        startDate: e.target.value,
        endDate: newEndDate.format('YYYY-MM-DD'),
      }));
      return;
    }
    setNewSeriesData({
      ...newSeriesData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        clearData();
        toggle();
      }}
      unmountOnClose={true}
    >
      <form
        className={styles['AddSeriesModalContainer']}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        <h4>Add a new series</h4>
        <label>
          Banner Image:
          <UploadPicture
            width={80}
            height={100}
            url={newSeriesData.bannerImage?.src ?? ''}
            setFile={setBannerImageFile}
          />
        </label>
        <label>
          Baby Hero
          <UploadPicture
            width={100}
            height={80}
            url={newSeriesData.babyHeroImage?.src ?? 'ss'}
            setFile={setBabyHeroImageFile}
          />
        </label>
        <label>
          Name:{' '}
          <input name="title" value={title ?? ''} onChange={handleChange} />
        </label>
        <label>
          Start Date:{' '}
          <input
            name="startDate"
            type="date"
            value={startDate ?? ''}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:{' '}
          <input
            name="endDate"
            type="date"
            value={endDate ?? ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Series Type:{' '}
          <select
            name="seriesType"
            value={seriesType ?? ''}
            onChange={handleChange}
          >
            {videoTypes.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
        <div
          style={{ gap: 8, marginTop: 20, marginBottom: 4, display: 'flex' }}
        >
          <LocationsTMHButton type="submit">Save</LocationsTMHButton>
          <LocationsTMHButton outline onClick={toggle}>
            Cancel
          </LocationsTMHButton>
        </div>
      </form>
    </Modal>
  );
}
