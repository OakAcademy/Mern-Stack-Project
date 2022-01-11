import React, { useState } from "react";
import { Form, Input, Button, Card, Layout, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../actions/authentication";
import { useDispatch } from "react-redux";

const { Title } = Typography;
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const onSubmit = (formValues) => {
    if (isLogin) {
      dispatch(login(formValues, navigate));
    } else dispatch(signup(formValues, navigate));
  };

  return (
    <Layout style={styles.container}>
      <Card
        style={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center" }}>
            {isLogin ? "Login to" : "Join"} Instaverse
          </Title>
        }
      >
        <Form
          name="authform"
          form={form}
          size="large"
          wrapperCol={{ span: 20, offset: 2 }}
          onFinish={onSubmit}
        >
          {isLogin || (
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="E-mail address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {isLogin || (
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please repeat your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isLogin ? "Login" : "Join"}
            </Button>
            <span style={{ margin: "0 10px 0 20px" }}>Or</span>
            <Button type="link" onClick={switchMode}>
              {isLogin ? "register now!" : "have an account?"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default AuthForm;
