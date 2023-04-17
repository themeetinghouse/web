import { useState, useRef } from 'react';
import styles from './UploadPicture.module.scss';
type UploadPictureProps = {
  url: string;
  width?: number;
  height?: number;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};
export default function UploadPicture({
  width = 100,
  height = 100,
  url,
  setFile,
}: UploadPictureProps) {
  const [uri, setUri] = useState(url);
  const uploadRef = useRef<HTMLInputElement>(null);
  return (
    <button
      type="button"
      onClick={() => uploadRef.current?.click()}
      style={{
        position: 'relative',
        width,
        height,
        border: 'none',
        padding: 0,
      }}
    >
      <img
        onError={() => {
          setUri('/static/photos/series/series-fallback-app.jpg');
        }}
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        src={uri}
      ></img>

      {width >= 80 ? (
        <div className={styles['UploadImageEditButton']}>
          <img style={{ padding: 8 }} src={'/static/svg/Edit.svg'} />
        </div>
      ) : null}

      <input
        onChange={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (e.target.files?.[0]) {
            const file = e.target.files[0];
            if (file.size > 2097152) {
              alert('File must be smaller than 2mb');
            } else if (e?.target?.files?.[0]) {
              const url = URL.createObjectURL(e.target.files[0]);
              console.log('new url: ', url);
              setUri(url);
              setFile(e.target.files[0]);
            }
          }
        }}
        ref={uploadRef}
        type="file"
        style={{ display: 'none' }}
      ></input>
    </button>
  );
}
