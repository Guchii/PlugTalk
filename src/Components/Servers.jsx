import { useDispatch, useSelector } from "react-redux";

const Servers = ({showMessages}) => {
    const app = useSelector((state) => state.app);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div
            className="d-flex justify-content-start flex-wrap mt-5"
            style={{ height: "100%", maxWidth: "90%" }}
        >
            {app.servers.map((server, index) => {
                return (
                    <div
                        class="card d-flex justify-content-center align-items-start m-3 text-wrap bg-warning text-dark"
                        style={{
                            height: "50px",
                            width: "250px",
                        }}
                        onClick={()=>{
                            showMessages(index);
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
