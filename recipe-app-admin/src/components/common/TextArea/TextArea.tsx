import  './TextArea.style.css';

interface Props {
  label: string;
  value: string;
  onChange: (e: string) => void;
}

export function TextArea({ label, value, onChange }: Props): JSX.Element {
  return (
    <div className="text-area-container">
      <label className="input-label">{label}</label>
      <textarea className="text-area-input" value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  );
}
