import React from 'react';
import './BigInput.scss';

interface Props {
  select?: boolean;
  label: string;
  children?: React.ReactNode;
}

const BigInput: React.FC<Props> = ({ select, label, children }) => {
  switch (select) {
    case false:
      return (
        <>
          <label htmlFor={label.toLowerCase()} className="overview-page-label">
            {label}
          </label>
          <input type="text" id={label.toLowerCase()} className="overview-big-input" />
        </>
      );
    case true:
      return (
        <>
          <label htmlFor={label.toLowerCase()} className="overview-page-label">
            {label}
          </label>
          <select id={label.toLowerCase()} className="overview-big-input">
            {children}
          </select>
        </>
      );
    default:
      return <h3>Invalid</h3>;
  }
};

BigInput.defaultProps = {
  select: false,
};

export default BigInput;
