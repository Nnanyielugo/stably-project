import styled from 'styled-components';

const Button = styled.button`
  color: #000;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
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
    margin-left: 4px;
  }
  :last-of-type {
    margin-left: 2px;
  }
`;

export default Button;
