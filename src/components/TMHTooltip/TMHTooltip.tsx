import styles from './TMHTooltip.module.scss';
type TMHTooltipType = {
  tooltipText: string;
  children: React.ReactNode;
};

function TMHTooltip({ tooltipText, children }: TMHTooltipType) {
  return (
    <div className={styles['TMHTooltipContainer']}>
      <div className={styles['TMHTooltipItem']}>{children}</div>
      <span className={styles['TMHTooltipBox']}>{tooltipText}</span>
    </div>
  );
}

export default TMHTooltip;
