import { useLocation, useNavigate  } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

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

  const titleCreator = useCallback((string: string) => {
    return string.split(/(?=[A-Z])/).join(' ');
  }, []);

  return (<div className="formManagerContainer">
    {locationState  && (<div className="formManagerItems">
      <ButtonLink title={titleCreator(locationState.formByItem)}
        onClick={() => { navigation(`/${locationState.formByItem}`); }}
      />
      <ButtonLink title={titleCreator(locationState.formByArray)}
        onClick={() => { navigation(`/${locationState.formByArray}`); }}
      />
    </div>)}
  </div>
  );
}
