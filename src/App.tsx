import React from 'react';
import { createGlobalStyle } from 'styled-components';

import worker from 'workerize-loader!./worker';

import Container from './components/app/AppContainer';
import Card from './components/app/Card';
import Header from './components/app/Header';
import SubHeader from './components/app/SubHeader';
import Input from './components/app/Input';
import Button from './components/app/Button';
import InputContainer from './components/app/InputContainer';
import ResultContainer from './components/app/ResultContainer';
import Loader from './components/loader';

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
  const [result, setResult] = React.useState(0);
  const [loading, setIsLoading] = React.useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInput(event.target.value);
  };

  const handleReset = (): void => {
    setShowResult(false);
    setResult(0);
  };

  const handleSubmit = async (): Promise<void> => {
    setIsLoading(true);
    handleReset();
    // optimization 5
    const instance = new worker();
    const result: number = await instance.findHighestPrime(+input);
    setResult(result);
    setShowResult(true);
    setIsLoading(false);
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

          {!!showResult && !!result && (
            <ResultContainer>{result}</ResultContainer>
          )}

          {loading && <Loader />}
        </Card>
      </Container>
    </>
  );
}

export default App;
