import './Button.style.css';

interface Props {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: Props): JSX.Element {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className="button"
    >
      {title}
    </button>
  );
}
