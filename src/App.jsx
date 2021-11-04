import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import db, { auth } from "./firebase";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "./useMediaQuery";
import classNames from "classnames";

const App = () => {
    const dispatch = useDispatch();
    const isMobile = !useMediaQuery("(min-width: 768px)");
    const sidebarClassNames = classNames("p-0 bg-dark", {
        "vw-100": isMobile,
    });
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
                        server: null,
                        channel: null,
                        changingServers: true,
                    },
                });

                //create or change user in users collections in database

                db.collection("users").doc(authUser.uid).set({
                    email: authUser.email,
                    displayName: authUser.displayName,
                    image: authUser.photoURL,
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
                                className={sidebarClassNames}
                                style={{
                                    backgroundColor: "#4CAB78",
                                    width: "300px",
                                }}
                            >
                                <Sidebar />
                            </div>
                            <div
                                className="col"
                                style={{
                                    backgroundColor: "#24283b",
                                }}
                            >
                                <Main />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
