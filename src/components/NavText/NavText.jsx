import React from 'react';
import { NavLink } from 'react-router-dom';
import NavTextStyle from './NavTextStyle.js';

const NavText = ({ children, path, icon, className }) => {
  return (
    <NavTextStyle className={className}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? `activeClassName` : `link`)}
      >
        <div className={`nav-icon-wrapper`}>{icon && icon}</div>
        <span>{children}</span>
      </NavLink>
    </NavTextStyle>
  );
};

export default NavText;
