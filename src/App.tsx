import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 16px 32px;

  border: 2px solid limegreen;
`;

const HeaderLogo = styled.div`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);

  cursor: pointer;

  &:hover {
    color: var(--base-text-color-hover);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;

  margin-left: auto;
`;

const NavItem = styled.div`
  font-weight: var(--base-text-weight-semibold);
  font-size: var(--base-text-size-medium);

  cursor: pointer;
`;

const DarkmodeToggle = styled.button``;

function App() {
  return (
    <Container>
      <Header>
        <HeaderLogo>DevDive</HeaderLogo>
        <Nav>
          <NavItem>About Me</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Projects</NavItem>
        </Nav>
      </Header>
      <DarkmodeToggle
        onClick={() => {
          const theme = document.body.getAttribute('data-theme');
          if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
          }

          if (theme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
          }

          console.log(window.matchMedia('(prefers-color-scheme)'));
        }}
      >
        다크 모드 토글 버튼
      </DarkmodeToggle>
    </Container>
  );
}

export default App;
