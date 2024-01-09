import { Button } from '../common/buttons';
import './ShowArea.style.css';

export function ShowArea(): JSX.Element {
//   const { onSend, handleChange, status } = useShowAreaController();

  return (
    <div className="showArea-container" >

      <div className="showArea-nav">
        <Button title={'Products'} onClick={() => {}}/>
        <Button title={'Recipes'} onClick={() => {}}/>
        <Button title={'Categories'} onClick={() => {}}/>
      </div>

    </div>
  );
}
