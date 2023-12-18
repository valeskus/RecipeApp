import './Input.style.css';
interface Props {
  label: string;
  value?: string;
  step?: string;
  type: string;
  id?: string;
  placeholder: string;
  onChange: (value: string) => void ;
  onBlur?: () => void ;
}
export function Input(props: Props): JSX.Element {
  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      <input
        onChange={(e) => {
				  props.onChange(e.target.value);
        }}
        value={props.value}
        type={props.type}
        step={props.step}
        id={props.id}
        className="input"
        placeholder={props.placeholder}
        onBlur={props.onBlur}
      />
    </div>
  );
}
