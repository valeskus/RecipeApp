import './Select.style.css';
interface Props {
  label: string;
  value?: string;
  optionArray: Array<string>;
  id?: string;
  placeholder: string;
  onChange: (e: any) => void;
}
export function Select({ label, value, optionArray, id, placeholder, onChange }: Props) {
  //TODO: options array type
  return (
    <div className="select-container">
      <label htmlFor="search">{label}</label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        id={id}
        className="select"
        placeholder={placeholder}
      >{optionArray.map((option) => {
        return <option value={option}>{option}</option>;
      })
        }
      </select>
    </div>
  );
}
