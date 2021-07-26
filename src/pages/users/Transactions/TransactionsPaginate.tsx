import './TransactionsPaginate.scss';
import PaginateButton from './PaginateButton';
type ContainerProps = {
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  paginationIndex: number;
  length: number;
};

export default function TransactionPaginate(
  props: ContainerProps
): JSX.Element {
  const { setPaginationIndex, paginationIndex, length } = props;
  return (
    <div className="TransactionPaginateContainer">
      <PaginateButton
        direction="Left"
        handlePaginate={() =>
          paginationIndex <= 10
            ? setPaginationIndex(0)
            : setPaginationIndex((prev) => prev - 10)
        }
      ></PaginateButton>
      <PaginateButton
        direction="Right"
        handlePaginate={() =>
          paginationIndex < length - 10
            ? setPaginationIndex((prev) => prev + 10)
            : null
        }
      ></PaginateButton>
    </div>
  );
}
