import './Select.style.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
export interface OptionModel {
  value: string; label: string;
}
interface Props {
  label: string;
  multiple: boolean;
  options: Array<OptionModel>;
  value?: OptionModel | null | Array<OptionModel>;
  placeholder: string;
  onChange: (e: any) => void;
  onBlur?: () => void;
}

export function SelectComponent({ label, multiple, options, value, placeholder, onChange, onBlur }: Props) {

  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <Select
        isMulti ={multiple}
        options ={options}
        onChange={onChange}
        placeholder={placeholder}
        className="select"
        value={value}
        isClearable={true}
        onBlur={onBlur}
      />
    </div>
  );
}
