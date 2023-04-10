import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './LocationsTMHButton.module.scss';

interface LocationsTMHButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outline?: boolean;
  link?: boolean;
}
export default function LocationsTMHButton({
  outline,
  link,
  children,
  ...props
}: LocationsTMHButtonProps) {
  const className = link
    ? `${styles['LocationsModalButton']} ${styles['link']}`
    : outline
    ? `${styles['LocationsModalButton']} ${styles['outline']}`
    : `${styles['LocationsModalButton']} ${styles['solid']}`;
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}
