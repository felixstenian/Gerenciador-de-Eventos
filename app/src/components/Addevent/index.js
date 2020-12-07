import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, DatePicker, message } from 'antd';
import moment from 'moment';

import api from "../../services/api";

function Addevent() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  const onFinish = async (data) => {
    try {
      const response = await api.post("evento", data);
      setIsModalVisible(false);
      message.success(response.data.message);      
    } catch (err) {
      message.error(err.response.data.error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Cadastrar Evento
      </Button>
      <Modal
        title="Cadastro de Evento"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={ 
          <Button onClick={handleCancel} danger>Cancelar</Button>
        }
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Título"
            name="title"
            rules={[{ required: true, message: 'Titulo é obrigatório!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Data e Horário"
            name="data"
            rules={[{ required: true, message: 'Data é Obrigatória!' }]}
          >
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Form.Item>

          <Form.Item
            label="Descrição"
            name="description"
            rules={[{ required: true, message: 'Descrição é obrigatório!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Local"
            name="location"
            rules={[{ required: true, message: 'Local é obrigatório!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Cadsatrar Evento
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Addevent;