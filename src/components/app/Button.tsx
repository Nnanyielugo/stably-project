import styled from 'styled-components';

const Button = styled.button`
  color: #000;
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  width: 45%;
  &:hover {
    background-color: ${(props) => props.color || '#e3e3e3'};
  }
  &:active {
    background-color: ${(props) => props.color || '#cecece'};
    box-shadow: 0 5px #grey;
    transform: translateY(1px);
  }
  :first-of-type {
    margin-right: 2px;
    margin-left: 4%;
  }
  :last-of-type {
    margin-left: 2px;
  }

  @media (max-width: 600px) {
    margin: 20px 0;
    width: 45%;
    :first-of-type {
      margin-right: 2px;
      margin-left: 4%;
    }
    :last-of-type {
      margin-left: 2px;
    }
  }
`;

export default Button;
