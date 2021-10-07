import React from "react";

const Messages = () => {
  const arrayOfMessages = [
    "I'm the oldest message from someone",
    "I'm an older message from someone",
    "This is my message",
    "This is my new message",
    "This is my newest message",
    "OP Bhai OP"
  ];
  return (
    <div>
      <span className="fs-3">I am the messages component</span>
      {arrayOfMessages.map((message)=><Message value={message}/>)}
    </div>
  );
};

const Message = ({value}) => (
  <div className="messageInstance fs-5">
  {value}
  </div>
);

export default Messages;
