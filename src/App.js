import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
`;

const Title = styled.h3`
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
`;

const Joke = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
`;

const Button = styled.button`
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }
`;

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json',
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <Container>
      <Title>Don't Laugh Challenge</Title>
      <Joke>{joke}</Joke>
      <Button onClick={getJoke}>Get Another Joke</Button>
    </Container>
  );
}

export default App;
