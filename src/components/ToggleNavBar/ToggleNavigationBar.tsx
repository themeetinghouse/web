import styles from './ToggleNavigationBar.module.scss';
type ToggleNavigationBarProps = {
  pages: string[];
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
};
export default function ToggleNavigationBar({
  pages,
  currentPage,
  setCurrentPage,
  style,
}: ToggleNavigationBarProps) {
  if (!pages.length) return null;
  return (
    <div className={styles['ToggleNavigationBar']} style={style}>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${styles['Button']} ${
            currentPage === page ? styles['Active'] : ''
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
