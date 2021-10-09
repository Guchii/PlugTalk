import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
    const addServer = () => {
        const name = prompt("Enter a valid name for your new server");
        if (name) {
            let channelName = prompt("Enter name for the first channel");
            if (!channelName) channelName = "New Channel ԅ(≖‿≖ԅ)";
            dispatch({
                type: "CREATESERVER",
                payload: {
                    name,
                    uniqueID: uuidv4(),
                    members: [user],
                    owner: user,
                    channels: [
                        {
                            name: channelName,
                            uniqueID: uuidv4(),
                            messages: [],
                        },
                    ],
                },
            });
        }
    };
    const addChannel = () => {
        let name = prompt("Enter a valid name for your new channel");
        if (!name) name = "New Channel ԅ(≖‿≖ԅ)";
        dispatch({
            type: "CREATECHANNEL",
            payload: {
                channel: {
                    name,
                    messages: [],
                    uniqueID: uuidv4(),
                },
                server: user.server,
            },
        });
    };
    const user = useSelector((state) => state.user);
    const app = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const currentServer = app.servers[user.server];
    const channelsArray = currentServer.channels;
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
                    <SidebarChatComponent />
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
                        <li>
                            <span
                                className="dropdown-item"
                                onClick={addChannel}
                            >
                                New channel
                            </span>
                        </li>
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

const SidebarChatComponent = () => {
    const user = useSelector((state) => state.user);
    const app = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const currentServer = app.servers[user.server];
    const channelsArray = currentServer.channels;
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
                        {currentServer.name}
                    </span>
                </li>
                <li className="nav-item">
                    {channelsArray.map((channel, index) => {
                        return (
                            <span
                                className={
                                    index === user.channel
                                        ? "nav-link bg-warning text-dark mt-3"
                                        : "nav-link text-light mt-3"
                                }
                                onClick={() => {
                                    dispatch({
                                        type: "SWITCHCHANNEL",
                                        payload: index,
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
