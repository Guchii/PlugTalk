import { useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const app = useSelector((state) => state.app);
    const user = useSelector((state) => state.user);
    const messagesArray =
        app.servers[user.server].channels[user.channel].messages;
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{
                    height: "auto",
                    maxWidth: "calc(100vw - 280px)",
                }}
            >
            <Messages arrayOfMessages={messagesArray}/>
            </div>
        </>
    );
};

export default Main;
