import FormInputStyle from './FormInputStyle';

const FormInput = ({ handleChange, type, name, label, value, error }) => (
  <FormInputStyle className="group">
    <input
      className="form-input"
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
    {error && <label>{error}</label>}
  </FormInputStyle>
);

export default FormInput;
