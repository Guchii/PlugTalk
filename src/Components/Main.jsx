import { useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const appData = useSelector((state) => state.app);
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{
                    height: "auto",
                    maxWidth: "calc(100vw - 280px)",
                }}
            >
                <Messages
                arrayOfMessages={appData.servers[0].channels[0].messages}
                />
                {
                // <Servers/>
                }
            </div>
        </>
    );
};

export default Main;
