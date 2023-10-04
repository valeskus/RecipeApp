import './Header.style.css';

import { useLocation } from 'react-router-dom';

import { Icons } from '../../Icons';
import { IconButton } from '../common/IconButton';

import { useHeaderController } from './useHeaderController';

export function Header(): JSX.Element {
  const { openMainPage } = useHeaderController();
  const location = useLocation();

  return (
    <div className="header-container">
      {/* eslint-disable-next-line spellcheck/spell-checker */}
      {location.pathname !== '/' && (<div className="header-buttons">
        <IconButton  onClick={openMainPage} icon={Icons.home} big={true}/>
      </div>) }
      <p className="logo">Recipe App</p>
    </div>
  );
}
