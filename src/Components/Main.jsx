import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const app = useSelector((state) => state.app);
    const user = useSelector((state) => state.user);
    const messagesArray =
        app.servers[user.server].channels[user.channel].messages;
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{
                    height: 'auto',
                    maxHeight: "100vh",
                    maxWidth: "calc(100vw - 280px)",
                }}
            >
                {!user.changingServers ? (
                    <Messages arrayOfMessages={messagesArray} />
                ) : (
                    <Servers
                        showMessages={(index) => {
                            dispatch({
                                type: "SWITCHSERVER",
                                payload: index,
                            });
                        }}
                    />
                )}{" "}
            </div>
        </>
    );
};

export default Main;
