import './FileInput.style.css';

interface Props {
  label: string;
  onChange: (e: any) => void ;
}

export function FileInput({ label, onChange }: Props): JSX.Element {
  return (
    <div className="textArea-container">
      <label>{label}</label>

      <input type="file" className="textArea" onChange={onChange}/>

    </div>
  );

}
