import styled from 'styled-components';
import Colors from '../../utils/colors';

const FormInputStyle = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: ${Colors.darkGrey};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${Colors.purple};
    margin: 25px 0;

    &:focus {
      outline: none; 
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: 12px;
      color: ${Colors.black};
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${Colors.grey};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
      color: $main-color;
    }
  }
`;

export default FormInputStyle;
