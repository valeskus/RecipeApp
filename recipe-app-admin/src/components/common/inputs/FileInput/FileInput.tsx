import './FileInput.style.css';

interface Props {
  label: string;
  onChange: (e: any) => void ;
}

export function FileInput({ label, onChange }: Props): JSX.Element {
  return (
    <div className="fileInput-container">
      <label>{label}</label>
      <input type="file" id="file-upload" className="fileInput" onChange={onChange}/>
    </div>
  );

}
