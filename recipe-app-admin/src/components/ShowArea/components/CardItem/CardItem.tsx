import './CardItem.style.css';

interface Props {
  title: string;
  value: string | number;
}

export function CardItem({ title, value }: Props): JSX.Element {
  return (
    <div className="card-item-container">
      <h4 className="card-item-title">{title}:</h4>
      <p className="card-item-value">{value}</p>
    </div>
  );
}
