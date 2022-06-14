import React from "react";
import Swal from 'sweetalert2'
import {useNavigate, useLocation} from 'react-router-dom';

export const AuthContext = React.createContext(null);
const axios = require("axios").default;
  
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const navigateToLogin = useNavigate();
  const location = useLocation();

  const handleLogin = async (username, pass) => {
    const userData = { email: username, password: pass };
    axios
      .post("http://localhost:8000/api/v1/token-auth/", userData)
      .then(function (response) {
        sessionStorage.setItem('token', response.data.access)
        console.log(sessionStorage.getItem('token'))
        const origin = location.state?.from?.pathname || '/incidents';
        navigate(origin);
      }).catch(
        function (error){
          Swal.fire(
            {
              title: 'Wrong username or password!',
              text: '',
              icon: 'error',
              confirmButtonText: 'Retry'
            }
          )
        }
      );
  };

  const handleLogout = () => {
    sessionStorage.setItem('token', null);
    console.log("Im Logged out");
    navigateToLogin("/login");
  };

  const value = {
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
