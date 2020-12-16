import './NavButton.scoped.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  active?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<Props> = ({ Icon, text, active, onClick }) => {
  return (
    <button className={`navigation-button ${active && 'active'}`} onClick={onClick}>
      <Icon className={`icon ${active && 'icon-active'}`} />
      <span className={`text ${active && 'text-active'}`}>{text}</span>
    </button>
  );
};

export default NavButton;
