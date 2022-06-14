import React, { useState } from "react";
import logo from "../../assets/logo-sisap-blanco.png";
import { AuthContext } from "../../services/AuthProvider";

const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const { onLogin } = React.useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    onLogin(e.target[0].value, e.target[1].value)
  };

  return (
    <div
      style={{
        background: "linear-gradient(#002C3ED9, #000)",
        position: "absolute",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "15%",
          height: "100px",
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: "15%",
          left: "42.5%",
        }}
      ></div>
      <div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "20%",
          height: "341px",
          top: "30%",
          border: "1.4px solid #888888",
          borderRadius: "4px",
          background: "#404040",
          left: "40%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5
          style={{ color: "white", paddingTop: "20px", fontWeight: "normal" }}
        >
          Login to start
        </h5>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              width: "70%",
              left: "15%",
              position: "relative",
              paddingTop: "5%",
            }}
          >
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder="Email"
              required
              style={{
                padding: "5px",
                margin: "10px",
                borderRadius: "5px",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              width: "70%",
              left: "15%",
              position: "relative",
            }}
          >
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              style={{
                padding: "5px",
                margin: "10px",
                borderRadius: "5px",
                width: "100%",
                marginBottom:"0px"
              }}
            />
          </div>
          <div style={{
                paddingTop: "3px",
                marginTop: "0px",
                paddingBottom:"20px",
                borderRadius: "5px",
                width: "100%",
                marginBottom:"0px",
                textAlign:"right",
              }}>
          <a href="#" style={{textDecoration:"none", fontSize:"12px",  paddingRight:"40px"}}>
           Reset Password
          </a>
          </div>
          <div>
            <button
              style={{
                background: "#303030",
                color: "white",
                padding: "8px 35px",
                borderRadius: "5px",
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
