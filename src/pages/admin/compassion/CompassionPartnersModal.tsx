import TMHModal from '../Editor/components/TMHModal';
import TMHInput from '../Editor/components/TMHInput';
import LocationsTMHButton from '../locations/LocationsTMHButton';
import TMHTextArea from '../Editor/components/TMHTextArea';
import { ContentImage } from 'components/RenderRouter/ContentItem';
import { useState } from 'react';

export default function CompassionPartnersModal({
  selectedPartner,
  onClose,
}: {
  selectedPartner: any;
  onClose: () => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  // Function to navigate to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to navigate to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  if (!selectedPartner) return null;
  const {
    name,
    description,
    website,
    Phone,
    email,
    location,
    address,
    region,
    social,
    imagealt,
  } = selectedPartner;
  return (
    <TMHModal onClose={onClose} isOpen={Boolean(selectedPartner)}>
      <div style={{ minWidth: '40vw' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1 style={{ flex: 1 }}>{name ?? 'Enter a name'}</h1>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'inline',
            }}
            onClick={onClose}
          >
            X
          </button>{' '}
        </div>
        <ContentImage
          className="contentImage"
          image={{ src: selectedPartner.image }}
          style={{
            height: 100,
            objectFit: 'contain',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {currentPage === 1 ? (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <TMHInput
                  onChange={() => null}
                  label="Partner Name"
                  value={name}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Phone"
                  value={Phone}
                ></TMHInput>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <TMHInput
                  onChange={() => null}
                  label="Email"
                  value={email}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Website"
                  value={website}
                ></TMHInput>
              </div>
              <TMHTextArea
                onChange={() => null}
                style={{ minHeight: 140 }}
                label="Partner Description"
                value={description}
              ></TMHTextArea>
            </>
          ) : currentPage === 2 ? (
            <>
              <TMHInput
                onChange={() => null}
                label="Image Accessibility Description"
                value={imagealt}
              ></TMHInput>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <TMHInput
                  onChange={() => null}
                  label="Latitude"
                  value={location?.latitude}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Longitude"
                  value={location?.longitude}
                ></TMHInput>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <TMHInput
                  onChange={() => null}
                  label="Address"
                  value={location?.address}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Address"
                  value={address}
                ></TMHInput>
              </div>
            </>
          ) : currentPage === 3 ? (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <TMHInput
                  onChange={() => null}
                  label="Instagram"
                  value={social?.instagram}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Facebook"
                  value={social?.facebook}
                ></TMHInput>
                <TMHInput
                  onChange={() => null}
                  label="Twitter"
                  value={social?.twitter}
                ></TMHInput>
              </div>
              <TMHInput
                onChange={() => null}
                label="Region"
                value={region}
              ></TMHInput>
            </>
          ) : null}
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <LocationsTMHButton onClick={() => null}>Save</LocationsTMHButton>
            <LocationsTMHButton
              style={{ backgroundColor: 'tomato' }}
              onClick={() => null}
            >
              Delete
            </LocationsTMHButton>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                gap: 20,
              }}
            >
              {currentPage > 1 && (
                <LocationsTMHButton outline onClick={prevPage}>
                  Previous
                </LocationsTMHButton>
              )}
              {currentPage < totalPages && (
                <LocationsTMHButton onClick={nextPage}>Next</LocationsTMHButton>
              )}
            </div>
          </div>
          <></>
        </div>
      </div>
    </TMHModal>
  );
}
