import { useDispatch, useSelector } from "react-redux";

const Servers = ({showMessages}) => {
    const app = useSelector((state) => state.app);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div
            className="card-container"
        >
            {app.servers.map((server) => {
                return (
                    <div
                        class="card d-flex justify-content-center align-items-start m-3 text-wrap bg-warning text-dark"
                        style={{
                            height: "50px",
                            width: "250px",
                        }}
                        onClick={()=>{
                            dispatch({
                                type: "SWITCHSERVERS",
                                payload: server.uniqueID
                            })
                        }}
                    >
                        <div class="card-body">{server.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Servers;
