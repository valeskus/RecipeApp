import { useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import { Button } from '../Button';

export function FormManager(): JSX.Element {
  const navigation = useNavigate();
  const location = useLocation();
  const locationState = (location.state as { formByItem: string; formByArray: string });
  useEffect(() => {
    if (!locationState) {
      return navigation('/');
    }

  }, [location]);

  return (<div>
    {locationState  && (<div>
      <Button title={locationState.formByItem} onClick={() => { navigation(`/${locationState.formByItem}`); }}/>
      <Button title={locationState.formByArray} onClick={() => { navigation(`/${locationState.formByArray}`); }}/>
    </div>)}
  </div>
  );
}
