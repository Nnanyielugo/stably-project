import styled from 'styled-components';

const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 32px;
  outline: none;
  padding: 5px 15px;
  display: block;
  border-radius: 3px;
  border: none;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`;

export default Input;
