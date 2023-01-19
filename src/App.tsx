import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  border: 2px solid limegreen;
`;

const Header = styled.header`
  border: 2px solid limegreen;
`;

const Main = styled.main`
  border: 2px solid limegreen;
`;

function App() {
  return (
    <Container>
      <Header>이건 헤더다</Header>
      <Main>이건 메인이다</Main>
    </Container>
  );
}

export default App;
