import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
    const secondsToDate = (message) => {
        let currentDate = new Date();
        try {
            let timeStampDate = message.timestamp.toDate();
            return `${timeStampDate
                .getHours()
                .toString()
                .padStart(2, "0")}:${timeStampDate
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;
        } catch (e) {
            let hours = currentDate.getHours().toString().padStart(2, "0");
            let minutes = currentDate.getMinutes().toString().padStart(2, "0");
            return `${hours}:${minutes}`;
        }
    };
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
    };

    useEffect(() => {
        MessagesRef.current.scrollTop = MessagesRef.current.scrollHeight;
    });

    const MessagesRef = useRef();
    const InputRef = useRef();

    return (
        <div className="d-flex flex-column justify-content-end flex-grow-1 vh-100">
            <div
                className="overflow-auto justify-content-end chat__messages"
                ref={MessagesRef}
            >
                {arrayOfMessages.length === 0 && (
                    <span className="fs-3 text-light mx-2">
                        No Messages in the channel (╥﹏╥)
                    </span>
                )}
                {arrayOfMessages.map((message) => (
                    <Message
                        key={uuidv4()}
                        value={message.message}
                        image={message.user.image}
                        name={message.user.displayName}
                        time={secondsToDate(message)}
                    />
                ))}
            </div>
            <div className="my-3 mx-2">
                <input
                    type="text"
                    className="form-control bg-dark text-light fs-5 p-3 w-100 border-bottom messInput"
                    placeholder="Enter your message ⏎"
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

const Message = ({ image, value, name, time }) => {
    return (
        <div className="mt-3 p-3 mx-2 d-flex align-items-center rounded fs-5 bg-dark text-light shadow">
            <span className="fs-6 me-3">{time}</span>
            <img
                src={image}
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
            />
            <span className="messageValue text-break text-wrap text-white px-1 w-50">
                {value}
            </span>
            <span className="messageName"> {name}</span>
        </div>
    );
};

export default Messages;
