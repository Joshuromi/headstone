import styled from 'styled-components';
import Colors from '../../utils/colors';
// import { maxWidth } from '../../../helpers/mixins';
const DashboardMenuStyle = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.black};
  position: fixed;
  top: 0px;
  width: 213px;
  height: 100%;
  transition: 0.5s;
  padding-bottom: 100px;
  // overflow-y: scroll;
  // overflow-x: hidden;

  .logo {
    margin: 57px auto;
    width: 100px;
    img {
      border: 3px solid ${Colors.purple};
        border-radius: 50%;
        width: 100%;
    }
  }
  .d-tech {
    border-radius: 24px;
    margin-left: 20px;
    margin-top: 50vh;
    font-weight: 700;
    
  }
  a {
    width: 100%;
  }
`;

export default DashboardMenuStyle;