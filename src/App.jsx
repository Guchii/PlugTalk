import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import LoginPage from "./LoginPage";
import db, { auth } from "./firebase";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
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
                        server: 0,
                        channel: 0,
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
                            <div className="col bg-dark">
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
};

export default App;
