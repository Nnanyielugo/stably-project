import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 450px;
  height: 400px;
  padding: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default Card;
