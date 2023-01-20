import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '@/components';

const Container = styled.div``;

const DarkmodeToggle = styled.button``;

const Section = styled.section`
  height: 3000px;
`;

function App() {
  return (
    <Container>
      <Header />
      <Section>
        <DarkmodeToggle
          onClick={() => {
            const theme = document.body.getAttribute('data-theme');
            if (theme === 'dark') {
              document.body.setAttribute('data-theme', 'light');
            }

            if (theme === 'light') {
              document.body.setAttribute('data-theme', 'dark');
            }
          }}
        >
          다크 모드 토글 버튼
        </DarkmodeToggle>
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
