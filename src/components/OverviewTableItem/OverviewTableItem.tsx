import React from 'react';
import './OverviewTableItem.scss';

const OverviewTableItem: React.FC<{ label: string; info?: string }> = ({ label, info }) => {
  return (
    <tr style={{ borderBottom: '1px solid rgb(238, 238, 238)' }}>
      <td className="overview-table-item-label">{label}</td>
      <td className="overview-table-item-info">{info}</td>
    </tr>
  );
};

export default OverviewTableItem;
