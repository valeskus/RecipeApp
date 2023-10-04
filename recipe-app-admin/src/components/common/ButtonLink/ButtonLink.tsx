import { MouseEventHandler } from 'react';
import './ButtonLink.style.css';

interface Props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonLink({ title, onClick }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="original-button"
    >
      {title}
    </button>
  );
}
