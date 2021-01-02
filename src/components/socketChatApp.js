import React, { useEffect } from "react";
import "./chatCSS/style.css";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { Authentication } from "../functions/authentication";

const subscribe = new Authentication();

const handleLogin = () => {
  subscribe.login();
};

const handleLogOut = () => {
  subscribe.logout();
};

const handleCheckLogin = () => {
  subscribe.currentLoginState();
};

const SocketChatApp = () => {
  useEffect(() => {
    addResponseMessage("Welcome!");
  }, []);
  return (
    <div>
      <Widget />
      <button onClick={handleLogin}>LoginTESTER</button>
      <button onClick={handleLogOut}>LogoutTESTER</button>
      <button onClick={handleCheckLogin}>CheckLoginTESTER</button>
    </div>
  );
};

export default SocketChatApp;
