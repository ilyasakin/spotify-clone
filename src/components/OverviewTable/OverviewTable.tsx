import React from 'react';
import './OverviewTable.scss';

const OverviewTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <table className="overview-table">
      <colgroup>
        <col style={{ width: '50%' }} />
        <col style={{ width: '50%' }} />
      </colgroup>
      <tbody>{children}</tbody>
    </table>
  );
};

export default OverviewTable;
