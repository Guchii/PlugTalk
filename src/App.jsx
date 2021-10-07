import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const toggleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="app">
      {!login ? (
        <LoginPage toggleLogin={toggleLogin} />
      ) : (
        <>
          <Main />
          <Sidebar toggleLogin={toggleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
