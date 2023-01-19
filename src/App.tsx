import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const HeaderNav = styled.nav`
  display: flex;
  gap: 16px;

  margin-left: auto;

  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    display: none;
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

const DarkmodeToggle = styled.button``;

const Section = styled.section`
  height: 3000px;
`;

const Footer = styled.footer`
  display: none;

  @media (max-width: 485px) {
    display: block;

    padding: 16px 32px;

    position: sticky;
    bottom: 0;
  }
`;

const FooterNav = styled.nav`
  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: absolute;
    bottom: 100px;
    right: 45px;
  }
`;

const DropDownButtonContainer = styled.div`
  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 45px;
    height: 45px;

    position: absolute;
    bottom: 45px;
    right: 45px;

    border-radius: ${(props) =>
      props.className === 'dropdown-active' ? '50%' : '12px'};

    background-color: gray;

    transition: ease-in-out 0.2s;

    &:active {
      background-color: var(--dropdown-color-hover);
    }
  }
`;

const dropDownButtonClickAnimation = keyframes`
  100% {
    transform: rotate(45deg);
  }
`;

const DropDownButtonItem = styled.div`
  width: 20px;
  height: 4px;

  visibility: ${(props) =>
    props.className === 'dropdown-active' ? 'hidden' : ''};

  border-radius: 8px;

  background-color: var(--dropdown-color);

  &::before {
    content: '';

    position: absolute;
    top: 10px;
    width: 20px;
    height: 4px;

    border-radius: 8px;

    background-color: var(--dropdown-color);

    ${(props) =>
      props.className === 'dropdown-active' &&
      css`
        top: 20px;
        transform: rotate(45deg);
        visibility: visible;
      `}
  }

  &::after {
    content: '';

    position: absolute;
    top: 30px;
    width: 20px;
    height: 4px;

    border-radius: 8px;

    background-color: var(--dropdown-color);

    ${(props) =>
      props.className === 'dropdown-active' &&
      css`
        top: 20px;
        transform: rotate(-45deg);
        visibility: visible;
      `}
  }
`;

function App() {
  const [dropDownToggleClicked, setDropDownToggleClicked] = useState(false);
  return (
    <Container>
      <Header>
        <HeaderLogo href="#">DevDive</HeaderLogo>
        <HeaderNav>
          <NavItem href="#About Me">About Me</NavItem>
          <NavItem href="#Skills">Skills</NavItem>
          <NavItem href="#Projects">Projects</NavItem>
        </HeaderNav>
      </Header>
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
      <Footer>
        <DropDownButtonContainer
          className={`${dropDownToggleClicked ? 'dropdown-active' : ''}`}
          onClick={() => {
            setDropDownToggleClicked((prev) => !prev);
          }}
        >
          <DropDownButtonItem
            className={`${dropDownToggleClicked ? 'dropdown-active' : ''}`}
          ></DropDownButtonItem>
        </DropDownButtonContainer>
        {dropDownToggleClicked ? (
          <FooterNav>
            <NavItem href="#About Me">About Me</NavItem>
            <NavItem href="#Skills">Skills</NavItem>
            <NavItem href="#Projects">Projects</NavItem>
          </FooterNav>
        ) : null}
      </Footer>
    </Container>
  );
}

export default App;
