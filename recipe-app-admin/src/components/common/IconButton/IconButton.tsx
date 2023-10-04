import { MouseEventHandler } from 'react';

import './IconButton.style.css';
interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value?: string;
  icon?: string;
}

export function IconButton({  onClick, value, icon }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="icon-button-container"
      value={value}
    >
      { icon &&  <img className= "button-icon" src={icon} alt="home" />
}    </button>
  );
}
