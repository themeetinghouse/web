import React, { ReactElement, useEffect } from 'react';
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
    if (!isOpen) _arr.push(styles['modal--closing']);
    return _arr.join(' ');
  }, [isOpen]);

  const trapFocus = (event: KeyboardEvent) => {
    if (!modalRef.current || event.key !== 'Tab') return;

    // Your logic to trap the focus inside the modal
    // For example, focusing the first focusable element when Tab is pressed
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', trapFocus);
    } else {
      document.removeEventListener('keydown', trapFocus);
    }

    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen]);

  const onCancel = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const onClick = ({ target }: any) => {
    if (target === modalRef.current) onClose();
  };

  const onAnimEnd = () => {
    if (!isOpen) modalRef.current?.close();
  };

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
