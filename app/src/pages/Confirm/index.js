import React from 'react';
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";

import { Container } from './styles';

function Confirm() {
  return (
    <Container>
      <Result
        status="success"
        title="Cadsatro Realizado com Sucesso!"
        // subTitle="Faça seu Login."
        extra={[
          <Link to="/">
            <Button type="primary" key="console">
              Login
            </Button>
          </Link>
        ]}
      />
    </Container>
  );
}

export default Confirm;