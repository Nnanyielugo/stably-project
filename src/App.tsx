import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Container from './components/AppContainer';
import Card from './components/Card';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Input from './components/Input';
import Button from './components/Button';
import InputContainer from './components/InputContainer';
import ResultContainer from './components/ResultContainer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background-color: #282c34;
    > div {
      height: 100%;
    }
  }
`;

function App(): JSX.Element {
  const [input, changeInput] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInput(event.target.value);
  };

  const handleSubmit = (): void => {
    console.log(input);
    setShowResult(true);
  };

  const handleReset = (): void => {
    setShowResult(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Header>Welcome to the Stably Project.</Header>
          <SubHeader>
            To Continue, enter a number in the input box below.
          </SubHeader>
          <InputContainer>
            <Input
              type="number"
              value={input}
              onChange={handleInput}
              placeholder="Enter a number"
            />
            <Button onClick={handleSubmit}>Submit</Button>
            <Button color="#e5cfcf" onClick={handleReset}>
              Reset
            </Button>
          </InputContainer>
          {!!showResult && <ResultContainer>40</ResultContainer>}
        </Card>
      </Container>
    </>
  );
}

export default App;
