import './Input.style.css';
interface Props {
  label: string;
  value?: string;
  type: string;
  id?: string;
  placeholder: string;
  onChange: (e: any) => void;
}
export function Input(props: Props): JSX.Element {
  return (
    <div className="input-container">
      <label htmlFor="search">{props.label}</label>
      <input
        onChange={(e) => {
				  props.onChange(e.target.value);
        }}
        value={props.value}
        type={props.type}
        id={props.id}
        className="input"
        placeholder={props.placeholder}
      />
    </div>
  );
}
