import * as React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Item from './Item';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
`;

const loader: React.FC = (): JSX.Element => {
  return (
    <Loader>
      <Container>
        <Item />
        <Item />
      </Container>
    </Loader>
  );
};

export default loader;
