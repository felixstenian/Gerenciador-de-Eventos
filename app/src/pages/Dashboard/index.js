import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Descriptions, Button, Skeleton, message, Popconfirm } from 'antd';
import moment from "moment";

import api from "../../services/api";

import AddEvent from "../../components/Addevent";

import { Container, Header, Content, Card } from './styles';

function Dashboard() {

  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("eventos").then((response) => {
      setEvents(response.data);
      setLoading(false);
    });
  }, []);

  const handleEvent = async (id) => {
    try {
      const response = await api.post(`inscricao?id=${id}`);
      message.success(response.data.message);      
    } catch (err) {
      message.warn(err.response.data.error);
    }
  }
  
  function cancel() {
    message.error('Inscrição não confirmada.');
  }

  return (
    <Container>
      <Header>
        <AddEvent />

        <div>
          <Link to="meuseventos">
            <Button>
              Meus Eventos
            </Button>
          </Link>

          <Link to="minhasincricoes">
            <Button>
              Minhas Incrições
            </Button>
          </Link>
        </div>
        
      </Header>
      <Content>
        {!loading ?
          events.map((event) => {
            return (
              <Card>
                <Descriptions title={event.title}>
                  <Descriptions.Item label="Data - Horário">{moment(event.data).utc("America/Alagoas").format("DD/MM/YYYY HH:mm:ss")}</Descriptions.Item>
                  <Descriptions.Item label="Local">{event.location}</Descriptions.Item>
                  <Descriptions.Item></Descriptions.Item>
                  <Descriptions.Item label="Descrição">
                  {event.description}
                  </Descriptions.Item>
                </Descriptions>
                <Popconfirm
                  title="Confirmar Inscrição?"
                  onConfirm={() => handleEvent(event.id)}
                  onCancel={cancel}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button>Participar</Button>
                </Popconfirm>
              </Card>
            )
          })
          : <Skeleton />
        }
      </Content>
    </Container>
  );
}

export default Dashboard;