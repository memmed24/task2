import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <Link to={"/"}>Users </Link>
      </Menu.Item>
      <Menu.Item name="messages">
        <Link to={"/posts"}>Posts </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
