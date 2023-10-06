import './FormStatus.style.css';
interface Props {
  status: string;
}

export function FormStatus({ status }: Props): JSX.Element {

  return (
    <div>
      <p className={[status.includes('Created successful') ? 'greenColor' : 'redColor',
        'status-text'].join(' ')}
      >{status}</p>
    </div>
  );
}
