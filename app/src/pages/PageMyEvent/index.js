import React, { useEffect, useState } from 'react';
import { Descriptions, Skeleton, Card, Avatar, Col, Row } from 'antd';
import moment from "moment";

import api from "../../services/api";

import { Container, Content } from './styles';

function PageMyEvent({ match }) {

  const { Meta } = Card;

  const { id } = match.params;

  const [event, setEvent] = useState();
  const [inscritos, setInscritos] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingIncritos, setLoadingIncritos] = useState(true);

  console.log(inscritos);

  useEffect(() => {
    api.get(`evento?id=${id}`).then((response) => {
      setEvent(response.data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    api.get(`inscricao?id=${id}`).then((response) => {
      setInscritos(response.data);
      setLoadingIncritos(false);
    });
  }, [id]);

  return (
    <Container>
      <Content>
        {!loading ?
          <Descriptions title={event.title}>
            <Descriptions.Item label="Data - Horário">{moment(event.data).utc("America/Alagoas").format("DD/MM/YYYY HH:mm:ss")}</Descriptions.Item>
            <Descriptions.Item label="Local">{event.location}</Descriptions.Item>
            <Descriptions.Item></Descriptions.Item>
            <Descriptions.Item label="Descrição">
            {event.description}
            </Descriptions.Item>
          </Descriptions>
          : <Skeleton />
        }
        {!loadingIncritos ?
          
          <div className="site-card-wrapper">
            <h2>Inscritos</h2>
            <Row gutter={10}>
              {inscritos.map((inscricao => {
                return (
                  <Col span={6}>
                    <Card
                      style={{ width: 220 }}
                    >
                      <Meta
                        avatar={<Avatar>{inscricao.inscrito.name.split("")[0]}</Avatar>}
                        title={inscricao.inscrito.name}
                        description={inscricao.inscrito.email}
                      />
                    </Card>
                  </Col>
                )
              }))}
            </Row>
          </div>
          : <Skeleton />
        }
      </Content>
    </Container>
  );
}

export default PageMyEvent;