import { TMHPerson } from 'API';
import FadeImage from 'components/ScaledImage/FadeImage';

type PersonCardProps = {
  disabled?: boolean;
  personData: TMHPerson;
  openModal: (person: TMHPerson) => void;
};

export default function PersonCard({
  personData,
  openModal,
  disabled,
}: PersonCardProps) {
  return (
    <div
      className="PersonCard"
      onClick={() => (disabled ? null : openModal(personData))}
      style={{
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <FadeImage
        className="PersonImage"
        imageSrc={personData?.image ?? ''}
        fallbackUrl={'/static/svg/Profile.svg'}
      />
      <span className="PersonCardName">
        {personData.firstName} {personData.lastName}
      </span>
      <span className="PersonCardPosition">
        {personData.isStaff === 'true' && 'Staff'}
      </span>
      <span className="PersonCardPosition">
        {personData.isCoordinator === 'true' && 'Coordinator'}
      </span>
      <span className="PersonCardPosition">
        {personData.isTeacher === 'true' && 'Teacher'}
      </span>
      <span className="PersonCardPosition">
        {personData.isOverseer === 'true' && 'Overseer'}
      </span>
    </div>
  );
}
