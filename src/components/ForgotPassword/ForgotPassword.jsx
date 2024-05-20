import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sendResetEmail } from '../../redux/auth/operations';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetEmail(email));
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
