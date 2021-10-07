import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import "./App.css";

function App() {
  const [login, setLogin] = useState(true);
  const toggleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="app">
      {!login ? (
        <LoginPage toggleLogin={toggleLogin} />
      ) : (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col" style={{backgroundColor:"black" }}>
                <Main  />
              </div>
              <div className="col-auto d-flex justify-content-end p-0" style={{backgroundColor:"#4CAB78"}}>
                <Sidebar
                  toggleLogin={toggleLogin}
                  style={{
                    width: "280px",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
