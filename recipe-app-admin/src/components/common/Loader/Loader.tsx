import './Loader.style.css';

export function Loader(): JSX.Element {
  return (
    <div className="loaderContainer">
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
