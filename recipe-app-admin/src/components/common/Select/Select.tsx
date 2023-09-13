import './Select.style.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

interface Props {
  label: string;
  multiple: boolean;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  onChange: (e: any) => void;
}

export function SelectComponent({ label, multiple, options, placeholder, onChange }: Props) {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <Select
        isMulti ={multiple}
        options ={options}
        onChange={onChange}
        placeholder={placeholder}
        className="select"
      />
    </div>
  );
}
