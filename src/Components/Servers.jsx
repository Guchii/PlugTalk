import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import db from "../firebase";

const Servers = () => {
    const dispatch = useDispatch();
    const [serversArray, setServersArray] = useState([]);
    const [numOfUsers, setNumOfUsers] = useState([0]);
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
    },[]);
    return (
        <div className="d-flex flex-column justify-content-center h-100">
            
            <div className="h-auto w-100 my-5 d-flex justify-content-center align-items-center text-wrap flex-wrap">
                {serversArray.map((server) => {
                    return (
                        <div
                            className="card h-auto d-flex justify-content-center m-3 text-wrap bg-success text-dark shadow"
                            style={{
                                width: "250px",
                                cursor:"pointer"
                            }}
                            onClick={() => {
                                // Below code gets the first channelid from the selected server from firestore.

                                db.collection("servers")
                                    .doc(server.id)
                                    .collection("channels")
                                    .limit(1)
                                    .get()
                                    .then((querySnapshot) => {
                                        querySnapshot.forEach((doc) => {
                                            dispatch({
                                                type: "SWITCHSERVERS",
                                                payload: {
                                                    server: server.id,
                                                    channel: doc.id,
                                                },
                                            });
                                        });
                                    });
                            }}
                        >
                            <div className="card-body">{server.name}</div>
                        </div>
                    );
                })}
            </div>
          2
        </div>
    );
};

export default Servers;
