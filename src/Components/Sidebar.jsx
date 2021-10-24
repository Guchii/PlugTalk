import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Sidebar = () => {
    const addServer = () => {
        const name = prompt("Enter a valid name for your new server");
        if (name) {
            let channelName = prompt("Enter name for the first channel");
            if (!channelName) channelName = "New Channel ԅ(≖‿≖ԅ)";
            const newServer = db.collection("servers").doc();
            newServer.set({
                name,
            });
            db.collection("servers")
                .doc(newServer.id)
                .collection("channels")
                .doc()
                .set({
                    name: channelName,
                });
        }
    };
    const addChannel = () => {
        let name = prompt("Enter a valid name for your new channel");
        if (!name) name = "New Channel ԅ(≖‿≖ԅ)";
        db.collection("servers")
            .doc(user.server)
            .collection("channels")
            .doc()
            .set({
                name,
            });
    };
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [channelsArray, setchannelsArray] = useState([]);
    useEffect(() => {
        if (user.server) {
            db.collection("servers")
                .doc(user.server)
                .collection("channels")
                .onSnapshot((snapshot) => {
                    setchannelsArray(
                        snapshot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                name: doc.data().name,
                            };
                        })
                    );
                });
        }
    }, [user.server]);
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success"
                style={{ width: "280px", height: "100vh" }}
            >
                <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white">
                    <span
                        className="fs-4"
                        id="sidebarTitle"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Plug Talk
                    </span>
                    <span className="px-4 d-inline-block text-wrap versionText">
                        dev build<i className="fa-solid fa-wrench"></i>
                    </span>
                </span>
                <hr />
                {user.changingServers ? (
                    <Instructions />
                ) : (
                    <SidebarChatComponent channelsArray={channelsArray} />
                )}
                <hr />
                <div className="dropdown">
                    <span
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={user.image}
                            alt=""
                            width="32"
                            height="32"
                            className="rounded-circle me-2"
                        />
                        <strong>{user.displayName}</strong>
                    </span>
                    <ul
                        className="dropdown-menu dropdown-menu-dark text-small shadow"
                        aria-labelledby="dropdownUser1"
                    >
                        {!user.changingServers && (
                            <>
                                <li>
                                    <span
                                        className="dropdown-item"
                                        onClick={addChannel}
                                    >
                                        New channel
                                    </span>
                                </li>
                            </>
                        )}
                        <li>
                            <span className="dropdown-item" onClick={addServer}>
                                New server
                            </span>
                        </li>
                        <li>
                            <span className="dropdown-item">Settings</span>
                        </li>
                        <li>
                            <span className="dropdown-item">Profile</span>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <span
                                className="dropdown-item"
                                onClick={() => {
                                    dispatch({
                                        type: "LOGOUT",
                                    });
                                }}
                            >
                                Sign out
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const SidebarChatComponent = ({ channelsArray }) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [serverName, setServerName] = useState("My Server");
    const GetServerName = () => {};
    useEffect(() => {
        db.collection("servers")
            .doc(user.server)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setServerName(doc.data().name);
                }
            });
    }, [user.server]);
    GetServerName();
    return (
        <>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <span
                        className="nav-link text-decoration-underline text-center text-light fs-5 position-relative"
                        aria-current="page"
                        onClick={() => {
                            dispatch({ type: "CHANGINGSERVERS" });
                        }}
                    >
                        <i className="fa-solid fa-chevron-left backIcon"></i>
                        {serverName}
                    </span>
                </li>
                <li className="nav-item">
                    {channelsArray.map((channel) => {
                        return (
                            <span
                                className={
                                    channel.id === user.channel
                                        ? "nav-link bg-warning text-dark mt-3 shadow"
                                        : "nav-link text-light mt-3"
                                }
                                onClick={() => {
                                    dispatch({
                                        type: "SWITCHCHANNELS",
                                        payload: channel.id,
                                    });
                                }}
                                key={channel.uniqueID}
                            >
                                {channel.name}
                            </span>
                        );
                    })}
                </li>
            </ul>
        </>
    );
};

const Instructions = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center mb-auto"
            style={{ height: "100%" }}
        >
            <p className="fs-6">
                Hi (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
                <span className="d-block">
                    Choose a server or Create a new one from the dropdown below.
                </span>
            </p>
        </div>
    );
};
export default Sidebar;
