import React from "react";

const Messages = ({ arrayOfMessages }) => {
    return (
        <div className="MessagesParent">
            <div className="Messages">
                {arrayOfMessages.length === 0 && (
                    <span className="fs-3">
                        I am the messages component & I am currently empty rn
                    </span>
                )}
                {arrayOfMessages.map((message) => (
                    <Message value={message} />
                ))}
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
                />
            </div>
        </div>
    );
};

const Message = ({ value }) => (
    <div className="messageInstance fs-5">{value}</div>
);

export default Messages;
