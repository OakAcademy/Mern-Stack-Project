import React, { useState, useEffect } from "react";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../img/Instaverse.png";
import styles from "./style";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";

const { Header } = Layout;
const { Title } = Typography;
const AppBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/authform");
    setUser(null);
  };
  return (
    <Header style={styles.header}>
      <Link to="/">
        <div style={styles.homeLink}>
          <Image preview={false} width={45} src={Logo} />
          &nbsp;
          <Title style={styles.title}>Instaverse</Title>
        </div>
      </Link>
      {!user ? (
        <Link to="/authform">
          <Button style={styles.login} htmlType="button">
            Log In
          </Button>
        </Link>
      ) : (
        <div style={styles.userInfo}>
          <Avatar style={styles.avatar} alt="username" size="large">
            {user.result.username.charAt(0).toUpperCase()}
          </Avatar>
          <Title style={styles.title} level={4}>
            {user.result.username}
          </Title>
          <Button htmlType="button" onClick={logout}>
            Log Out
          </Button>
        </div>
      )}
    </Header>
  );
};

export default AppBar;
