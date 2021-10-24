import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import db from "../firebase";
import firebase from "@firebase/app-compat";

const Messages = () => {
    const user = useSelector((state) => state.user);
    const [arrayOfMessages, setArrayOfMessages] = useState([]);

    useEffect(() => {
        if (user.server && user.channel) {
            db.collection("servers")
                .doc(user.server)
                .collection("channels")
                .doc(user.channel)
                .collection("messages")
                .orderBy("timestamp")
                .onSnapshot((snapshot) => {
                    setArrayOfMessages(snapshot.docs.map((doc) => doc.data()));
                });
        }
    }, [user.server, user.channel]);
    let currentValueOfInput = "";
    const sendMessage = () => {
        db.collection("servers")
            .doc(user.server)
            .collection("channels")
            .doc(user.channel)
            .collection("messages")
            .add({
                user: user,
                message: currentValueOfInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        InputRef.current.value = "Message Sent";
        setTimeout(() => (InputRef.current.value = ""), 200);
        MessagesRef.current.scrollTop = MessagesRef.current.scrollHeight;
    };

    const MessagesRef = useRef();
    const InputRef = useRef();

    return (
        <div className="MessagesParent">
            <div className="Messages" ref={MessagesRef}>
                <div className="spacer"></div>
                {arrayOfMessages.length === 0 && (
                    <span className="fs-3">No Messages in the channel</span>
                )}
                {arrayOfMessages.map((message) => (
                    <Message
                        key={uuidv4()}
                        value={message.message}
                        image={message.user.image}
                        name={message.user.displayName}
                    />
                ))}
            </div>
            <div className="messInput">
                <input
                    type="text"
                    className="form-control bottom-0 mt-3 fs-5 mx-auto"
                    style={{
                        width: "calc(100vw - 360px)",
                        padding: "10px",
                    }}
                    placeholder="Enter your message ..."
                    onChange={(e) => {
                        currentValueOfInput = e.target.value;
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    ref={InputRef}
                />
            </div>
        </div>
    );
};

const Message = ({ image, value, name, date = null }) => {
    return (
        <div className="messageInstance fs-5 shadow">
            <img
                src={image}
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
            />
            <span className="messageValue">{value}</span>
            <span className="messageName"> {name}</span>
            <span>{date}</span>
        </div>
    );
};

export default Messages;
