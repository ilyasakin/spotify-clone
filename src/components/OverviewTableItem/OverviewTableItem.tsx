import styles from './OverviewTableItem.module.scss';

const OverviewTableItem: React.FC<{ label: string; info?: string }> = ({ label, info }) => {
  return (
    <tr style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}>
      <td className={styles.label}>{label}</td>
      <td className={styles.info}>{info}</td>
    </tr>
  );
};

export default OverviewTableItem;
