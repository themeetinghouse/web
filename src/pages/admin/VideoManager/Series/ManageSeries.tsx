import useSeries from '../hooks/useSeries';

import { useEffect, useState } from 'react';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import { Spinner } from 'reactstrap';
import useVideoTypes from '../hooks/useVideoTypes';
import AddSeriesModal from './AddSeriesModal';
import { Series } from 'API';
import SeriesCard from './SeriesCard/SeriesCard';
import styles from './ManageSeries.module.scss';

export default function ManageSeries() {
  const { series, isLoading, addToSeries, updateSeries } = useSeries();
  const [selected, setSelected] = useState<Series | null>(null);
  const { videoTypes } = useVideoTypes();
  const [showSeriesModal, setShowSeriesModal] = useState(false);
  useEffect(() => {
    if (!showSeriesModal) {
      setSelected(null);
    }
  }, [showSeriesModal]);
  const [page, setPage] = useState(0);
  const paginateAmount = 10;
  const selectSeries = (series: Series) => {
    setSelected(series);
    setShowSeriesModal(true);
  };
  // must calculate how many cards will fit on screen, pagination should occur based on that x2
  if (isLoading)
    return (
      <div className={styles['SpinnerContainer']}>
        <Spinner />
      </div>
    );

  return (
    <div>
      <h1>Series</h1>
      <div className={styles['ManageSeriesContainer']}>
        <div
          onClick={() => setShowSeriesModal(true)}
          className={styles['NewSeriesButton']}
        >
          <span style={{ flex: 1, textAlign: 'center' }}>Add a new series</span>

          <span
            style={{
              display: 'block',
              fontSize: 50,
              paddingBottom: 20,
              textAlign: 'center',
              flex: 1,
            }}
          >
            +
          </span>
        </div>
        {series.slice(page, page + paginateAmount).map((series) => {
          return (
            <SeriesCard
              setSelected={selectSeries}
              key={series.id}
              series={series}
            />
          );
        })}
      </div>
      <TransactionPaginate
        paginationIndex={page}
        setPaginationIndex={setPage}
        paginateCount={paginateAmount}
        length={series.length}
      ></TransactionPaginate>
      {showSeriesModal ? (
        <AddSeriesModal
          updateSeries={updateSeries}
          selectedSeries={selected}
          addToSeries={addToSeries}
          videoTypes={videoTypes}
          toggle={() => setShowSeriesModal((prev) => !prev)}
          isOpen={showSeriesModal}
        />
      ) : null}
    </div>
  );
}
