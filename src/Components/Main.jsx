import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import Servers from "./Servers";

const Main = () => {
    const user = useSelector((state) => state.user);
    return (
        <>
            <div
                className="h-100"
            >
                {!user.changingServers ? <Messages /> : <Servers />}{" "}
            </div>
        </>
    );
};

export default Main;
