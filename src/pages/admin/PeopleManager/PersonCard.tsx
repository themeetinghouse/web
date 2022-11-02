import { TMHPerson } from 'API';
import FadeImage from 'components/ScaledImage/FadeImage';

type PersonCardProps = {
  personData: TMHPerson;
  openModal: (person: TMHPerson) => void;
};

export default function PersonCard({ personData, openModal }: PersonCardProps) {
  return (
    <div className="PersonCard" onClick={() => openModal(personData)}>
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
