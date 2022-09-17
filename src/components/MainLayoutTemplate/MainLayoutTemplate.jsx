import React from 'react';
import MainLayoutTemplateStyle from './MainLayoutTemplateStyle';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

const MainLayoutTemplate = ({ layout, activeNav, children, ...props }) => {
  return (
    <MainLayoutTemplateStyle>
      <div className={`dashboard`}>
        <DashboardMenu activeNav={activeNav} />
        <div className={`dashboard-body`}>
          <DashboardHeader />
          <div className="dashboard-body-content">{children}</div>
        </div>
      </div>
    </MainLayoutTemplateStyle>
  );
};

export default MainLayoutTemplate;
