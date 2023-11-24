import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuthContext } from "../context/AuthContext";
import { Alert } from "antd";


const Register = () => {
  const { signInWithGoogle, register } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",

      }}
    >
    
      {error && <Alert severity="ERROR">{error}</Alert>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "300px",
        }}
      >
        
     
        <h1>Sign up</h1>
        <input
          style={{
            height: "30px",
            marginTop: "15px",
            outline: "none",
          }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            height: "30px",
            marginTop: "15px",
            outline: "none",
          }}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            background: "hsl(88.39deg 49.73% 63.33%)",
            border: "none",
            width: "200px",
            height: "30px",
            margin: "15px auto",
          }}
          onClick={handleSubmit}
        >
          Войти
        </button>
        <button
          style={{
            background: "hsl(227.37deg 12.26% 30.39%)",
            border: "none",
            height: "35px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => signInWithGoogle().catch((error) => setError(error.message))}
        >
          Регистраться
          <GoogleIcon sx={{ marginLeft: "5px" }} />
        </button>
       
       
      </div>
    </div>
  );
};

export default Register;
