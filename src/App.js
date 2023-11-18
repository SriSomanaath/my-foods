import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './pages/Login'; // Adjust the path accordingly
import Home from './pages/Home';
import Menu from './pages/Menu'; // Import the Menu component
import Experience from './pages/Experience';
import ContactUs from './pages/contactUs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    // Clear localStorage
    localStorage.removeItem('user');
    // Update the login state
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <nav className="bg-white p-4 border-slate-300">
          <img
            src="./images/TecharionLogo.png"
            alt="Tech Arion Logo"
            className="bg-white mx-auto mt-8 absolute top-0 left-6 right-0 z-50 object-fill rounded-full"
          />
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-gray-800 font-medium">
              <Link to="/" className="ml-4">
                Home
              </Link>
              <Link to={isLoggedIn ? '/' : '/login'} className="ml-4">
                {isLoggedIn ? 'Logged In' : 'Log In/Sign In'}
              </Link>
              <Link to="/reservations" className="ml-4">
                Reservations
              </Link>
              <Link to="/private-parties" className="ml-4">
                Private Parties
              </Link>
            </div>
            <div className="text-gray-800 font-medium">
              <Link to="/events" className="ml-4">
                Events
              </Link>
              <Link to="/contact-us" className="ml-4">
                Contact Us
              </Link>
              <Link to="/about-us" className="ml-4">
                About Us
              </Link>
              {isLoggedIn && (
                <button onClick={handleSignOut} className="ml-4 btn btn-danger">
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </nav>
        <div className="relative">
          <Routes>
            <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
            <Route
              path="/"
              element={isLoggedIn ? (
                <>
                  <Home />
                  <Experience />
                  <Menu />
                  {/* <ContactUs /> */}
                </>
              ) : (
                <>
                <Home />
                <Experience />
                {/* <ContactUs /> */}
                </>
              )}
            />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
