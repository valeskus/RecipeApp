import './Loader.style.css';

interface Props {
  isInBox?: boolean;
}
export function Loader({ isInBox }: Props): JSX.Element {
  return (
    <div className={[isInBox && 'width', 'loaderContainer'].join(' ')}>
      <figure>
        <div className="dot white" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </figure>
    </div>
  );
}
