import styles from './TMHInput.module.scss';
type TMHInputProps = {
  label?: string;
  labelStyle?: React.CSSProperties;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function TMHInput(props: TMHInputProps) {
  if (props.label || props.labelStyle) {
    return (
      <label className={styles['TMHInputLabel']} style={props.labelStyle}>
        <span>{props.label}</span>
        <input className={styles['TMHInput']} {...props}></input>
      </label>
    );
  }
  return <input className={styles['TMHInput']} {...props}></input>;
}
