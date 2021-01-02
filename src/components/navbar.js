import React from "react";
import { menuConfig } from "../UI-settings/antdProps";
import { Menu } from "antd";
import {
  MessageOutlined,
  TabletOutlined,
  SignalFilled
} from "@ant-design/icons";

const { Item } = Menu;
const { menuC } = menuConfig();
const itemConfigChat = menuConfig(MessageOutlined, 0).itemC;
const itemConfigPost = menuConfig(TabletOutlined, 1).itemC;
const itemConfigLive = menuConfig(SignalFilled, 2).itemC;

const Navbar = () => {
  return (
    <div className="navbar container-menu">
      <div className="main-items">
        <Menu {...menuC}>
          <Item {...itemConfigPost}>Posts</Item>
          <Item {...itemConfigChat}>Chat</Item>
          <Item {...itemConfigLive}>Live</Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
