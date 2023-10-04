import './TextArea.style.css';

interface Props {
  label: string;
  placeholder: string;
  onChange: (value: (string)) => void ;
}

export function TextArea({ label, placeholder, onChange }: Props): JSX.Element {
  return (
    <div className="textArea-container">
      <label>{label}</label>
      <textarea className="textArea" placeholder={placeholder}  onChange={(e) => {
				  onChange(e.target.value);
      }}
      />
    </div>
  );

}
