import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
    const addServer = () => {
        const name = prompt("Enter a valid name for your new server");
        if (name) {
            dispatch({
                type: "CREATESERVER",
                payload: {
                    name,
                    uniqueID: uuidv4(),
                    members: [user],
                    owner: user,
                    channels: [
                        {
                            name: "channel 1",
                            messages: [],
                        },
                    ],
                },
            });
        }
    };
    const addChannel = () => {
        const name = prompt("Enter a valid name for your new channel");
        if (name) {
            dispatch({
                type: "CREATECHANNEL",
                payload: {
                    name,
                    messages: [
                        "Test Message 1",
                    ],
                },
            });
        }
    };
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success"
                style={{ width: "280px", height: "100vh" }}
            >
                <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span
                        className="fs-4"
                        id="sidebarTitle"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Plug Talk
                    </span>
                    <span className="px-4 d-inline-block text-wrap">dev build</span>
                </span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <span
                            className="nav-link bg-warning text-dark"
                            aria-current="page"
                        >
                            Your Servers
                        </span>
                    </li>
                    <li>
                        <span className="nav-link text-white">Channel 1</span>
                        <span className="nav-link text-white">Channel 2</span>
                        <span className="nav-link text-white">Channel 3</span>
                    </li>
                </ul>
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
                            <span className="dropdown-item" onClick={addChannel}>New channel</span>
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

export default Sidebar;
