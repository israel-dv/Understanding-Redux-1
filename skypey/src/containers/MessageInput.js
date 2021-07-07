import React from "react";

import { setTypingValue, sendMessage } from "../actions";
import store from "../store";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();

  const handleChange = (event) => {
    store.dispatch(setTypingValue(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
