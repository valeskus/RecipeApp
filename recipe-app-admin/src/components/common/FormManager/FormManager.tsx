import { useLocation, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import './FormManager.style.css';
import { ButtonLink } from '../ButtonLink';

export function FormManager(): JSX.Element {
  const navigation = useNavigate();
  const location = useLocation();
  const locationState = (location.state as { formByItem: string; formByArray: string });
  useEffect(() => {
    if (!locationState) {
      return navigation('/');
    }
  }, [location]);

  return (<div className="formManagerContainer">
    {locationState  && (<div className="formManagerItems">
      <ButtonLink title={locationState.formByItem} onClick={() => { navigation(`/${locationState.formByItem}`); }}/>
      <ButtonLink title={locationState.formByArray} onClick={() => { navigation(`/${locationState.formByArray}`); }}/>
    </div>)}
  </div>
  );
}
