import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = ({ path = 'login' }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue <= 1) {
          clearInterval(interval);
          navigate(`/${path}`, {
            state: location.pathname,
          });
        }
        return prevValue - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [navigate, location, path]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <h3 className="text-center">
        Redirecting you to the login page in {count} seconds
      </h3>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
