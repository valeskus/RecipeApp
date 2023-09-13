import './Select.style.css';
interface Props {
  label: string;
  value?: string;
  multiple?: boolean;
  optionArray?: Array<string> | Array<number>;
  optionArrayWithId?: Array<{ id: string; title: string }>;

  placeholder: string;
  onChange: (e: any) => void;
}
export function Select({ label, value, multiple = false,
  optionArray, optionArrayWithId, placeholder, onChange }: Props) {
  //TODO: options array type
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      {optionArray && (<select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        className="select"
        placeholder={placeholder}
                       >
        <option value={'-'}>{'---'}</option>;
        {optionArray.map((option, index) => {
          return <option value={option} key={index}>{option}</option>;
        })
        }
      </select>)
      }
      {optionArrayWithId && (
        <select
          multiple = {multiple}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
          className="select"
          placeholder={placeholder}
        >
          <option value={'-'}>{'---'}</option>;
          {optionArrayWithId.map((option, index) => {
            return <option value={option.id} key={index}>{option.title}</option>;
          })
          }
        </select>)
      }
    </div>
  );
}
