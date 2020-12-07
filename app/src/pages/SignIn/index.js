import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import { Form, Input, Button } from 'antd';

import { signInRequest } from "../../store/modules/auth/actions";

import { Container, Content, Background } from "./styles";

function SignIn() {
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 17,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = async ({ email, password }) => {
   dispatch(signInRequest({ email, password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Background />
      <Content>
        {/* <img src={logo} alt="Plick" /> */}

        <div className="form">
          <GiPartyPopper size={70} />
          <h3>Login</h3>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: 'Email é obrigatório!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Form>

          <Link to="/cadastro" type="button">
            <FiLogIn />
            Não tem conta ? Experimente grátis!
          </Link>
        </div>
      </Content>

    </Container>
  );
}

export default SignIn;
