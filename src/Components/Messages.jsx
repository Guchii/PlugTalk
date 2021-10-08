import React from "react";
import { useSelector } from "react-redux";

const Messages = () => {
    const appData = useSelector((state) => state.app);
    const arrayOfMessages = appData.servers[0].channels[0].messages;
    return (
        <div className="d-flex align-content-end">
            {arrayOfMessages.length === 0 && (
                <span className="fs-3">
                    I am the messages component & I am currently empty rn
                </span>
            )}
            {arrayOfMessages.map((message) => (
                <Message value={message} />
            ))}
        <input
          type="text"
          className="form-control bg-dark text-light position-sticky bottom-0 my-3 fs-5 mx-auto"
          style={{
            width: "calc(100vw - 360px)",
            padding: "10px",
          }}
          placeholder="Enter your message ..."
        />
        </div>
    );
};

const Message = ({ value }) => (
    <div className="messageInstance fs-5">{value}</div>
);

export default Messages;
