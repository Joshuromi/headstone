import styled from 'styled-components';
import Colors from '../../utils/colors';

const DashboardHeaderStyle = styled.div`
  height: 64px;
  margin-bottom: 16px;
  display: flex;
  background: ${Colors.white};
  box-shadow: 0px 4px 16px rgba(89, 85, 84, 0.15);
  .dashboard-header {
    padding: 0 33px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-bar {
      position: relative;
      input[type='text'] {
        background: rgba(159, 162, 180, 0.2);
        border-radius: 4px;
        width: 476px;
        height: 40px;
        padding-left: 48px;
        border: none;
      }
      img {
        position: absolute;
        left: 16px;
        top: 10px;
      }
    }
    .dashboard-header-items {
      display: flex;
      align-items: center;
      .tower {
        background: ${Colors.black};
        margin-right: 27px;
        padding: 4px 8px;
        p {
          color: ${Colors.white};
        }
      }
      .user {
        margin-right: 27px;
      }
    }
  }
`;

export default DashboardHeaderStyle;
