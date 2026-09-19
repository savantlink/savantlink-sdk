import styles from "./Toggle.module.scss";

import Typography from "@/Typography";


const Toggle = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <label className={styles.toggleField}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
    <span className={styles.toggle} aria-hidden="true" />
    <Typography weight="medium">{label}</Typography>
  </label>
);

export default Toggle;
