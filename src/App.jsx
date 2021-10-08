import React, { useEffect} from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import { auth } from "./firebase";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("user is", authUser);
            if (authUser) {
                dispatch({
                    type: "LOGIN",
                    payload: {
                        uid: authUser.uid,
                        email: authUser.email,
                        displayName: authUser.displayName,
                        image: authUser.photoURL,
                    },
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
                <LoginPage />
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
                                <Sidebar style={{ width: "280px" }} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
