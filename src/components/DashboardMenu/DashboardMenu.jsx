import { navs } from './navs';
import NavText from '../NavText/NavText';
import Logo from '../../assets/images/logo.jpg';
import DashboardMenuStyle from './DashboardMenuStyle';

const DashboardMenu = ({ layout, activeNav }) => {
  return (
    <DashboardMenuStyle>
      <div className={`logo`}>
        <img src={Logo} alt="logo" />
      </div>
      {navs.map((nav, i) => (
        <NavText key={i} path={nav.path} icon={nav.icon}>
          {nav.name}
        </NavText>
      ))}
    </DashboardMenuStyle>
  );
};

export default DashboardMenu;
