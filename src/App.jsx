import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import { auth } from "./firebase";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const [login, setLogin] = useState(true);
    const toggleLogin = () => {
        setLogin(!login);
    };
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("user is", authUser);
            if (authUser) {
                dispatch({
                    type: "LOGIN",
                    payload: {},
                });
            } else {
                dispatch({
                    type: "LOGOUT",
                });
            }
        });
    }, [dispatch]);

    return (
        <div className="app">
            {!user ? (
                <LoginPage toggleLogin={toggleLogin} />
            ) : (
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div
                                className="col"
                                style={{ backgroundColor: "black" }}
                            >
                                <Main />
                            </div>
                            <div
                                className="col-auto d-flex justify-content-end p-0"
                                style={{ backgroundColor: "#4CAB78" }}
                            >
                                <Sidebar
                                    toggleLogin={toggleLogin}
                                    style={{ width: "280px" }}
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
