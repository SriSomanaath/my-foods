import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    let userCredentials = {
      email,
      password,
    };

    // Dispatch the loginUser action and handle the result
    const result = await dispatch(loginUser(userCredentials));

    // Assuming the login process sets the user in localStorage
    if (result.payload) {
      setEmail('');
      setPassword('');
      onLogin(); // Call the onLogin callback to update the parent component's state
      navigate('/'); // Redirect to Home after successful login
    }
  };

  return (
    <>
      <form className="form-group custom-form" onSubmit={handleLoginEvent}>
        <label>Email</label>
        <input
          type="email"
          required
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          {loading ? 'Loading.....' : 'Login'}
        </button>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </form>
    </>
  );
};

export default LoginPage;
