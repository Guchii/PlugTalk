import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import db, { auth } from "./firebase";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "./useMediaQuery";
import classNames from "classnames";

const App = () => {
    const dispatch = useDispatch();
    const isMobile = !useMediaQuery("(min-width: 768px)");
    const siderbarClassNames = classNames("d-flex justify-content-end p-0", {
        "col": isMobile,
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
                                className={siderbarClassNames}
                                style={{
                                    backgroundColor: "#4CAB78",
                                    width: "280px",
                                }}
                            >
                                <Sidebar />
                            </div>
                            <div className="bg-dark col">
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
