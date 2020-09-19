import React from 'react';
import './TopbarNavButton.scss';
import { Back, Forward } from '../icons';

interface Props {
  direction: string;
}

const TopbarNavBtn: React.FC<Props> = ({ direction }) => {
  return (
    <div
      className={
        // eslint-disable-next-line no-nested-ternary
        direction === 'left' ? 'nav-back' : direction === 'right' ? 'nav-forward' : undefined
      }
    >
      {direction === 'left' && <Back className="nav-icon" />}
      {direction === 'right' && <Forward className="nav-icon" />}
    </div>
  );
};

export default TopbarNavBtn;
