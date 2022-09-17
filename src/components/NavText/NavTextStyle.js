import styled from 'styled-components';
import Colors from '../../utils/colors';

const NavTextStyle = styled.div`
.link {
  text-decoration: none;
  color: ${Colors.white};
  display: flex;
  font-size: 18px;
  line-height: 1rem;
  align-items: center;
  padding: 20px;
}

.activeClassName {
  text-decoration: none;
  background-color:${Colors.transparent};
  color: ${Colors.brand};
  display: flex;
  font-size: 18px;
  line-height: 1rem;
  align-items: center;
  padding: 20px;
}

.nav-icon-wrapper {
  margin-right: 10px;
}`

export default NavTextStyle;
