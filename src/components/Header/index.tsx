import React from 'react';
import styled from 'styled-components';
import { NavItem, HeaderNav } from '@/components';

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
