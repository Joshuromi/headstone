import CustomButtonStyle from './CustomButtonStyle';

const CustomButton = ({ value, inverted, onClick }) => (
  <CustomButtonStyle
    className={`${inverted ? 'inverted' : ''}`}
    onClick={onClick}
  >
    {value}
  </CustomButtonStyle>
);

export default CustomButton;
