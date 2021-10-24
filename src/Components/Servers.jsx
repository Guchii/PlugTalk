import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import db from "../firebase";

const Servers = ({ showMessages }) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [serversArray, setServersArray] = useState([]);
    useEffect(() => {
        db.collection("servers").onSnapshot((snapshot) => {
            setServersArray(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        name: doc.data().name,
                    };
                })
            );
        });
    });
    return (
        <div className="card-container">
            {serversArray.map((server) => {
                return (
                    <div
                        class="card d-flex justify-content-center align-items-start m-3 text-wrap bg-warning text-dark"
                        style={{
                            height: "50px",
                            width: "250px",
                        }}
                        onClick={() => {
                            dispatch({
                                type: "SWITCHSERVERS",
                                payload: server.id,
                            });
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
