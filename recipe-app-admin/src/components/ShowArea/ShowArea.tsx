import { Button } from '../common/buttons';

import './ShowArea.style.css';
// import { useShowAreaController } from './useShowAreaController';

export function ShowArea(): JSX.Element {
  // const {  } = useShowAreaController();

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
