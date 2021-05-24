import styled from 'styled-components';

const ResultContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 50px;
  background-color: whitesmoke;
  padding: 15px;
  border-radius: 4px;
  color: #000;
  text-align: center;

  @media (max-width: 600px) {
    width: 55%;
  }
`;

export default ResultContainer;
