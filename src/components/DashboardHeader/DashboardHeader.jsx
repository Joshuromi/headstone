import React from 'react';
import DashboardHeaderStyle from './DashboardHeaderStyle';
import SearchIcon from '../../assets/icons/Search.svg';
import Avatar from '../../assets/images/avatar.svg';

const DashboardHeader = () => {
  return (
    <DashboardHeaderStyle>
      <div className={`dashboard-header`}>
        <div className={`search-bar`}>
          <input type="text" placeholder="Search for" />
          <img src={SearchIcon} alt="search" />
        </div>
        <div className={`dashboard-header-items`}>
          <p className={`user`}>Pastor Uchenna</p>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </DashboardHeaderStyle>
  );
};

export default DashboardHeader;
