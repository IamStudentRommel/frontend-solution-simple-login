import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ChuckNorris from "./components/ChuckNorris";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState("");

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "-50px" }}>
        Web Application Security - Front-End Implementation
      </h2>
      <div className="app">
        {!token ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <div>
            <div className="fact">
              <ChuckNorris token={token} />
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
