import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 16px 32px;

  position: sticky;
  top: 0;
`;

const HeaderLogo = styled.a`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);

  color: var(--header-logo-text-color);

  &:hover {
    color: var(--header-logo-text-color-hover);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;

  margin-left: auto;

  // 세로모드 모바일 디바이스 (가로 해상도가 415px 보다 작은 화면에 적용)
  @media (max-width: 414px) {
    flex-direction: column;

    position: absolute;
    top: 70px;
    right: 20px;

    display: ${(props) =>
      props.className === 'dropdown-toggle-active' ? '' : 'none'};
  }
`;

const underline = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const NavItem = styled.a`
  position: relative;

  width: fit-content;

  font-weight: var(--base-text-weight-semibold);
  font-size: var(--base-text-size-medium);

  color: var(--navbar-item-text-color);

  &:hover {
    color: var(--navbar-item-text-color-hover);
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -2px;

    width: 100%;
    height: 3px;

    background: red;

    animation: ${underline} 0.5s;
  }
`;

const DropDownButtonContainer = styled.div`
  display: none;

  // 세로모드 모바일 디바이스 (가로 해상도가 415px 보다 작은 화면에 적용)
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-left: auto;

    &:active {
      background-color: var(--dropdown-color-hover);
    }
  }
`;

const DropDownButtonItem = styled.div`
  width: 20px;
  height: 5px;

  border-radius: 6px;

  background-color: var(--dropdown-color);
`;

const DarkmodeToggle = styled.button``;

function App() {
  const [dropDownToggleClicked, setDropDownToggleClicked] = useState(false);
  return (
    <Container>
      <Header>
        <HeaderLogo href="#">DevDive</HeaderLogo>
        <DropDownButtonContainer
          onClick={() => {
            setDropDownToggleClicked((prev) => !prev);
          }}
        >
          <DropDownButtonItem></DropDownButtonItem>
          <DropDownButtonItem></DropDownButtonItem>
          <DropDownButtonItem></DropDownButtonItem>
        </DropDownButtonContainer>
        <Nav
          className={`${dropDownToggleClicked ? 'dropdown-toggle-active' : ''}`}
        >
          <NavItem href="#About Me">About Me</NavItem>
          <NavItem href="#Skills">Skills</NavItem>
          <NavItem href="#Projects">Projects</NavItem>
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
        }}
      >
        다크 모드 토글 버튼
      </DarkmodeToggle>
    </Container>
  );
}

export default App;
