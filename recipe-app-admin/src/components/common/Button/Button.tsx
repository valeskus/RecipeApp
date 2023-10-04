import { MouseEventHandler } from 'react';

import './Button.style.css';
interface Props {
  title: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
  value?: string;
  disabled?: boolean;
}

export function Button({ title, onClick, value, disabled }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="button"
      value={value}
      disabled ={disabled}
    >
      {title}
    </button>
  );
}
