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
      <HeaderLogo
        href="#mainPage"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        DevDive
      </HeaderLogo>
      <HeaderNav>
        <NavItem
          href="#aboutMePage"
          onClick={(event) => {
            event.preventDefault();
            const location = document.getElementById('aboutMePage')?.offsetTop;
            window.scrollTo({ top: location, behavior: 'smooth' });
          }}
        >
          About Me
        </NavItem>
        <NavItem href="#skillsPage">Skills</NavItem>
        <NavItem href="#projectsPage">Projects</NavItem>
      </HeaderNav>
    </Container>
  );
}
