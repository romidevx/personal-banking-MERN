import React from 'react';
import './Header.css';
// TODAY'S DATE
import {today} from '../../utils/formatUtils';

const Header = () => {

  return (
    <div className="header">
      <div className="header__inner">
        <h4>Personal Baking - Dashboard</h4>
        <h4>{today()}</h4>
      </div>
    </div>
  )
}

export default Header;