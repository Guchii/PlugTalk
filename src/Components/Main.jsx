import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const user = useSelector((state) => state.user);
    return (
        <>
            <div
                className="d-flex w-100 justify-content-center h-100 align-items-center"
            >
                {!user.changingServers ? <Messages /> : <Servers />}{" "}
            </div>
        </>
    );
};

export default Main;
