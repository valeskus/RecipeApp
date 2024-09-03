import { MouseEventHandler } from 'react';

import './IconButton.style.css';
interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value?: string;
  icon?: string;
  big?: boolean;
}

export function IconButton({  onClick, value, icon, big }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="icon-button-container"
      value={value}
    >
      { icon &&  <img className= {[big ? 'big-icon' : 'icon'].join(' ')} src={icon} alt="home" />
}    </button>
  );
}
