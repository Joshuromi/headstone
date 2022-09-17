import styled from 'styled-components';
import Colors from '../../utils/colors';
import bg from '../../assets/images/bg.avif';

const SignInStyle = styled.div`
  background-image: url(${bg});
  background-color: ${Colors.grey};
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .logo {
    max-width: 250px;
    margin: auto;
    padding: 50px;
    img {
        border: 3px solid ${Colors.purple};
        border-radius: 50%;
        width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signin-welcome {
    width: 50%;
    max-width: 40rem;
    margin: 4%;
    color: ${Colors.white};
    &-text {
      font-size: 40px;
    }
  }
  .signin-div {
    width: 50%;
    max-width: 30rem;
    margin: 4%;
    &-form {
      background-color: ${Colors.white};
      padding: 2rem;
      border-radius: 4px;
      width: 100%;
      &-heading {
        color: ${Colors.purple};
      }
    }
  }
`;

export default SignInStyle;
