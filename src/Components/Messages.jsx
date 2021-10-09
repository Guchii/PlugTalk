import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const GetUserDataFromDatabase = (uniqueID, whatToFind, app) => {
    const user = app.registeredUsers.find(
        (element) => element.uniqueID === uniqueID
    );
    return user[whatToFind];
};

const Messages = ({ arrayOfMessages }) => {
    const app = useSelector((state) => state.app);
    const user = useSelector(state=>state.user)
    let currentValueOfInput = "";
    const dispatch = useDispatch();

    const sendMessage = () => {
        dispatch({
            type: "SENDMESSAGE",
            payload: {
                value: currentValueOfInput,
                uniqueUserID: "12345",
                date: Date.now(),
            },
            userPref: {
                server:user.server,
                channel: user.channel
            }
        });
        InputRef.current.value = "Message Sent";
        setTimeout(() => (InputRef.current.value = ""), 200);
        MessagesRef.current.scrollTop = MessagesRef.current.scrollHeight + 50;
    };

    const MessagesRef = useRef();
    const InputRef = useRef();

    return (
        <div className="MessagesParent">
            <div className="Messages" ref={MessagesRef}>
                <div className="flex">
                    <div className="spacer"> </div>
                    {arrayOfMessages.length === 0 && (
                        <span className="fs-3">
                            No Messages in the channel
                        </span>
                    )}
                    {arrayOfMessages.map((message) => (
                        <Message
                            key={uuidv4()}
                            value={message.value}
                            image={GetUserDataFromDatabase(
                                "12345",
                                "image",
                                app
                            )}
                            name={GetUserDataFromDatabase("12345", "name", app)}
                        />
                    ))}
                </div>
            </div>
            <div className="messInput">
                <input
                    type="text"
                    className="form-control bg-dark text-light bottom-0 my-3 fs-5 mx-auto"
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
