import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header, Footer, Main, AboutMe } from '@/components';

const Container = styled.div``;

const DarkmodeToggle = styled.button``;

function App() {
  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    if (theme === '' && !localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    if (localStorage.getItem('theme') === 'light') {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <Container>
      <Header />
      <DarkmodeToggle
        onClick={() => {
          const theme = localStorage.getItem('theme');

          if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          }

          if (theme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
          }
        }}
      >
        다크 모드 토글 버튼
      </DarkmodeToggle>
      <Main />
      <AboutMe />
      <Footer />
    </Container>
  );
}

export default App;
