import React, { useEffect, useState } from 'react';
import { Descriptions, Skeleton } from 'antd';
import moment from "moment";

import api from "../../services/api";

import { Container, Content, Card } from './styles';


function MyRegistrations() {

  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("minhasinscricoes").then((response) => {
      setEvents(response.data);
      setLoading(false);
    });
  }, []);


  return (
    <Container>
      <Content>
        {!loading ?
          events.map((evento) => {
            return (
              <Card>
                <Descriptions title={evento.event.title}>
                  <Descriptions.Item label="Data - Horário">{moment(evento.event.data).utc("America/Alagoas").format("DD/MM/YYYY HH:mm:ss")}</Descriptions.Item>
                  <Descriptions.Item label="Local">{evento.event.location}</Descriptions.Item>
                  <Descriptions.Item></Descriptions.Item>
                  <Descriptions.Item label="Descrição">
                  {evento.event.description}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            )
          })
          : <Skeleton />
        }
      </Content>
    </Container>
  );
}

export default MyRegistrations;