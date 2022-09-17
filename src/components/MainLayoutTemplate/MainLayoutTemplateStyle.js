import styled from 'styled-components';
import Colors from '../../utils/colors';

const MainLayoutTemplateStyle = styled.div`
  width: 100%;
  .dashboard {
    .dashboard-body {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      margin-left: 213px;
      transition: 0.5s;
      overflow-y: scroll;
      padding-bottom: 100px;
      background: ${Colors.backgroundWhite} !important;
      &-content {
        padding: 30px;
      }
    }
    .greyBg {
      background: ${Colors.white} !important;
    }
  }
`;

export default MainLayoutTemplateStyle;
