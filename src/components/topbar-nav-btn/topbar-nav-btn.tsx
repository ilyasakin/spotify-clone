import React from 'react';
import './topbar-nav-btn.scss';
import { Back, Forward } from '../icons';

interface Props {
  direction: string;
}

const TopbarNavBtn: React.FC<Props> = ({ direction }) => {
  return (
    <div
      className={
        // eslint-disable-next-line no-nested-ternary
        direction === 'left'
          ? 'topbar-nav-back'
          : direction === 'right'
          ? 'topbar-nav-forward'
          : undefined
      }
    >
      {direction === 'left' && <Back className="topbar-nav-icon" />}
      {direction === 'right' && <Forward className="topbar-nav-icon" />}
    </div>
  );
};

export default TopbarNavBtn;
