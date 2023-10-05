import { MouseEventHandler, useCallback } from 'react';
import './ButtonLink.style.css';

interface Props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonLink({ title, onClick }: Props): JSX.Element {
  const convertTitle = useCallback(() => {
    return  title.replace(/([A-Z])/g, ' $1').trim()[0].toUpperCase() + title.slice(1) || title;
  }, [title]);

  return (
    <button
      type={'button'}
      onClick={onClick}
      className="original-button"
    >
      {convertTitle()}
    </button>
  );
}
