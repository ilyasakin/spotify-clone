import styles from './BigInput.module.scss';

interface Props {
  select?: boolean;
  label: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  value?: string;
}

const BigInput: React.FC<Props> = ({ select, label, children, onChange, value }) => {
  if (!select) {
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
  }

  return (
    <div>
      <label htmlFor={label.toLowerCase()} className={styles.label}>
        {label}
      </label>
      <select id={label.toLowerCase()} className={styles.input} onChange={onChange} value={value}>
        {children}
      </select>
    </div>
  );
};

BigInput.defaultProps = {
  select: false,
  value: '',
};

export default BigInput;
