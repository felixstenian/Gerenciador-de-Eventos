import React, { useEffect, useState } from 'react';
import { Descriptions, Skeleton } from 'antd';
import { Link } from "react-router-dom";
import moment from "moment";

import api from "../../services/api";

import AddEvent from "../../components/Addevent";

import { Container, Header, Content, Card } from './styles';

function MyEvents() {

  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("myevents").then((response) => {
      setEvents(response.data);
      setLoading(false);
    });
  }, []);


  return (
    <Container>
      <Header>
        <AddEvent />
      </Header>
      <Content>
        {!loading ?
          events.map((event) => {
            return (
              <Link to={`/meuevento/${event.id}`}>
                <Card>
                  <Descriptions title={event.title}>
                    <Descriptions.Item label="Data - Horário">{moment(event.data).utc("America/Alagoas").format("DD/MM/YYYY HH:mm:ss")}</Descriptions.Item>
                    <Descriptions.Item label="Local">{event.location}</Descriptions.Item>
                    <Descriptions.Item></Descriptions.Item>
                    <Descriptions.Item label="Descrição">
                    {event.description}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Link>
            )
          })
          : <Skeleton />
        }
      </Content>
    </Container>
  );
}

export default MyEvents;