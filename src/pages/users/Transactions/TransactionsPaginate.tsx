import './TransactionsPaginate.scss';
import PaginateButton from './PaginateButton';
type ContainerProps = {
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  paginationIndex: number;
  length: number;
  paginateCount?: number;
};

export default function TransactionPaginate(
  props: ContainerProps
): JSX.Element {
  const { setPaginationIndex, paginationIndex, length } = props;
  const itemsCount = props?.paginateCount ?? 10;
  return (
    <div className="TransactionPaginateContainer">
      <PaginateButton
        direction="Left"
        handlePaginate={() =>
          paginationIndex <= itemsCount
            ? setPaginationIndex(0)
            : setPaginationIndex((prev) => prev - itemsCount)
        }
      ></PaginateButton>
      <PaginateButton
        direction="Right"
        handlePaginate={() =>
          paginationIndex < length - itemsCount
            ? setPaginationIndex((prev) => prev + itemsCount)
            : null
        }
      ></PaginateButton>
    </div>
  );
}
