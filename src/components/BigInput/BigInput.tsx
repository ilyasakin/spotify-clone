import React from 'react';
import './BigInput.scss';

interface Props {
  select?: boolean;
  label: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const BigInput: React.FC<Props> = ({ select, label, children, onChange }) => {
  switch (select) {
    case false:
      return (
        <>
          <label htmlFor={label.toLowerCase()} className="overview-page-label">
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase()}
            className="overview-big-input"
            onChange={onChange}
          />
        </>
      );
    case true:
      return (
        <>
          <label htmlFor={label.toLowerCase()} className="overview-page-label">
            {label}
          </label>
          <select id={label.toLowerCase()} className="overview-big-input" onChange={onChange}>
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
