import styles from './TMHInput.module.scss';

type TMHTextAreaProps = {
  label?: string;
  labelStyle?: React.CSSProperties;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function TMHInput(props: TMHTextAreaProps) {
  if (props.label || props.labelStyle) {
    return (
      <label className={styles['TMHInputLabel']} style={props.labelStyle}>
        <span>{props.label}</span>
        <textarea className={styles['TMHInput']} {...props}></textarea>
      </label>
    );
  }
  return <textarea className={styles['TMHInput']} {...props}></textarea>;
}
