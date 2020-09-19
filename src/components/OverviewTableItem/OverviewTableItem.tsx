import React from 'react';
import './OverviewTableItem.scoped.scss';

const OverviewTableItem: React.FC<{ label: string; info?: string }> = ({ label, info }) => {
  return (
    <tr style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}>
      <td className="label">{label}</td>
      <td className="info">{info}</td>
    </tr>
  );
};

export default OverviewTableItem;
