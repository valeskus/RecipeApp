import { useCallback } from 'react';
import './FormStatus.style.css';
interface Props {
  status: string;
}

export function FormStatus({ status }: Props): JSX.Element {

  const textColor = useCallback(() => {
    switch (status) {
      case 'Created successful!': return 'greenColor';
      case 'Uploaded': return 'greenColor';
      case 'pending...': return 'yellowColor';
      default:
        return 'redColor';
    }
  }, [status]);

  return (
    <div>
      <p className={[textColor(),
        'status-text'].join(' ')}
      >{status}</p>
    </div>
  );
}
