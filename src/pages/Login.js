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
      {/* <form className="form-group custom-form" onSubmit={handleLoginEvent}>
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
      </form> */}
   <div className='flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br'>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div className='max-w-md mx-auto space-y-3'>
          <h3 className="text-lg font-semibold">&#128540; My Account</h3>
          <form className="form-group custom-form" onSubmit={handleLoginEvent}>
          <div>
            <label className="block py-1">Your email</label>
            <input type="email" className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <p className="text-sm mt-2 px-2 text-gray-600">Text helper</p>
          </div>
          <div>
            <label className="block py-1">Password</label>
            <input type="password" className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="flex gap-3 pt-3 items-center">
            <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">Login</button>
            <a href="#">Forgot Password</a>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
