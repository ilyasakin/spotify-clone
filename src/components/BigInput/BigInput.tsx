import styles from './BigInput.module.scss';

interface Props {
  select?: boolean;
  label: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  value?: string;
}

const BigInput: React.FC<Props> = ({ select, label, children, onChange, value }) => {
  switch (select) {
    case false:
      return (
        <div>
          <label htmlFor={label.toLowerCase()} className={styles.label}>
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase()}
            className={styles.input}
            onChange={onChange}
            value={value}
          />
        </div>
      );
    case true:
      return (
        <div>
          <label htmlFor={label.toLowerCase()} className={styles.label}>
            {label}
          </label>
          <select
            id={label.toLowerCase()}
            className={styles.input}
            onChange={onChange}
            value={value}
          >
            {children}
          </select>
        </div>
      );
    default:
      return <h3>Invalid</h3>;
  }
};

BigInput.defaultProps = {
  select: false,
  value: '',
};

export default BigInput;
