import './Header.style.css';

import { useLocation } from 'react-router-dom';

import { Button } from '../common/Button';

import { useHeaderController } from './useHeaderController';

export function Header(): JSX.Element {
  const { openMainPage } = useHeaderController();
  const location = useLocation();

  return (
    <div className="header-container">
      {/* eslint-disable-next-line spellcheck/spell-checker */}
      {location.pathname !== '/' && (<div className="header-buttons">
        <Button title="#x1F3E0" onClick={openMainPage} />
      </div>) }
      <p className="logo">Recipe App</p>
    </div>
  );
}
