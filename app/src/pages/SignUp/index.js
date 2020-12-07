import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import { Form, Input, Button, message } from 'antd';

import api from "../../services/api";
import history from "../../services/history";

import { Container, Content, Background } from "./styles";

function SignUp() {

  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 15,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = async (data) => {
  try {
    const response = await api.post("signup", data);

    history.push("/sucess", response.data);
  } catch (error) {
      message.error(`${error.response.data.error}`);
    }
  };

  return (
    <Container>
      <Background />
      <Content>
        {/* <img src={logo} alt="Plick" /> */}

        <div className="form">
          <GiPartyPopper size={70} />
          <h3>Cadastro</h3>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Nome"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Email é obrigatório!',
                },
              ]}
            >
              <Input />
            </Form.Item>

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
                  min: 8,
                  message: 'Password deve ter no mínimo 8 caracteres.!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confime"
              dependencies={['password']}
              name="confirm"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Confirmação do password é obrigatória!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Password não confere!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Cadastrar
              </Button>
            </Form.Item>
          </Form>

          <Link to="/cadastro" type="button">
            <FiLogIn />
            Já tem conta ? Faça seu login!
          </Link>
        </div>
      </Content>

    </Container>
  );
}

export default SignUp;