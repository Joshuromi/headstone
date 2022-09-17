import styled from 'styled-components';
import Colors from '../../utils/colors';

const CustomButtonStyle = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: ${Colors.purple};
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color:  ${Colors.purple};
    border: 1px solid  ${Colors.purple};
  }

  &.inverted {
    background-color: white;
    color:  ${Colors.purple};
    border: 1px solid ${Colors.purple};

    &:hover {
      background-color:  ${Colors.purple};
      color: white;
      border: none;
    }
  }
`;

export default CustomButtonStyle;
