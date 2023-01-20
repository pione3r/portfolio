import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.header`
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

export function Header() {
  return (
    <Container>
      <HeaderLogo href="#">DevDive</HeaderLogo>
      <HeaderNav>
        <NavItem href="#About Me">About Me</NavItem>
        <NavItem href="#Skills">Skills</NavItem>
        <NavItem href="#Projects">Projects</NavItem>
      </HeaderNav>
    </Container>
  );
}
