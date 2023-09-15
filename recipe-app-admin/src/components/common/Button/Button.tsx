import { MouseEventHandler } from 'react';
import './Button.style.css';

interface Props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  value?: string;
}

export function Button({ title, onClick, value }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="button"
      value={value}
    >
      {title}
    </button>
  );
}
