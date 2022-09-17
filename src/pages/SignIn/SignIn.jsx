import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Logo from '../../assets/images/logo.jpg';
import SignInStyle from './SignInStyle';

const SignIn = () => {
  const [signinDetails, setSigninDetails] = useState({
    username: '',
    password: '',
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    window.location.href = 'dashboard';
  };

  const handleChange = (e) => {
    setSigninDetails({ ...signinDetails, [e.target.name]: e.target.value });
  };

  return (
    <SignInStyle>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="content">
        <div className="signin-welcome">
          <h1 className="signin-welcome-text">HEADSTONE CHURCH</h1>
          <br />
          <h3>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
          </h3>
        </div>
        <div className="signin-div">
          <form className="signin-div-form" onSubmit={handleSignIn}>
            <h2 className="signin-div-form-heading">Sign In</h2>
            <FormInput
              label="Username"
              name="username"
              type="text"
              value={signinDetails.username}
              handleChange={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={signinDetails.password}
              handleChange={handleChange}
            />
            <CustomButton value="Submit" />
          </form>
        </div>
      </div>
    </SignInStyle>
  );
};

export default SignIn;
