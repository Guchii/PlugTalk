import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const user = useSelector((state) => state.user);
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-end"
                style={{
                    height: "auto",
                    maxHeight: "100vh",
                    maxWidth: "calc(100vw - 280px)",
                }}
            >
                {!user.changingServers ? <Messages /> : <Servers />}{" "}
            </div>
        </>
    );
};

export default Main;
