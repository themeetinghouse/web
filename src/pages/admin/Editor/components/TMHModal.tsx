import React, { ReactElement } from 'react';
import styles from './TMHModal.module.scss';

type TMHModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactElement;
};
export default function TMHModal({ children, onClose, isOpen }: TMHModalProps) {
  const modalRef = React.useRef<HTMLDialogElement>(null);
  const dialogClasses = React.useMemo(() => {
    const _arr = [styles['modal']];
    if (!open) _arr.push(styles['modal--closing']);

    return _arr.join(' ');
  }, [open]);
  const onCancel = React.useCallback(
    (e) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );
  const onClick = React.useCallback(
    ({ target }) => {
      if (!modalRef.current) return;
      const { current: el } = modalRef;
      if (target === el) onClose();
    },
    [onClose]
  );
  const onAnimEnd = React.useCallback(() => {
    if (!modalRef.current) return;
    const { current: element } = modalRef;
    if (!open) element.close();
  }, [open]);
  return (
    <dialog
      onCancel={onCancel}
      open={isOpen}
      className={dialogClasses}
      onClick={onClick}
      onClose={onClose}
      ref={modalRef}
      onAnimationEnd={onAnimEnd}
    >
      <div className={styles['modal__container']}>{children}</div>
    </dialog>
  );
}
