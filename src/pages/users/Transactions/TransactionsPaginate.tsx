import './TransactionsPaginate.scss';
import PaginateButton from './PaginateButton';
type ContainerProps = {
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  paginationIndex: number;
  length: number;
  paginateCount?: number;
  showPageCount?: boolean;
};

export default function TransactionPaginate(
  props: ContainerProps
): JSX.Element {
  const {
    setPaginationIndex,
    paginationIndex,
    length,
    paginateCount = 10,
    showPageCount,
  } = props;
  return (
    <div className="TransactionPaginateContainer">
      {showPageCount ? (
        <span>
          {`Page ${paginationIndex / paginateCount + 1} of ${Math.ceil(
            length / paginateCount
          )}`}
        </span>
      ) : null}

      <PaginateButton
        direction="Left"
        handlePaginate={() =>
          paginationIndex <= paginateCount
            ? setPaginationIndex(0)
            : setPaginationIndex((prev) => prev - paginateCount)
        }
      ></PaginateButton>
      <PaginateButton
        direction="Right"
        handlePaginate={() =>
          paginationIndex < length - paginateCount
            ? setPaginationIndex((prev) => prev + paginateCount)
            : null
        }
      ></PaginateButton>
    </div>
  );
}
