import styled, { keyframes } from 'styled-components';

const underline = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const NavItem = styled.a`
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

export const HeaderNav = styled.nav`
  display: flex;
  gap: 16px;

  margin-left: auto;

  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    display: none;
  }
`;

const footerNavAnimation = keyframes`
  0% {
    bottom: 75px;

    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const FooterNav = styled.nav`
  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: absolute;
    bottom: 85px;
    right: 60px;

    background-color: var(--footer-background-color);

    border-radius: 16px 16px 0px 16px;

    padding: 16px;

    animation: ${footerNavAnimation} ease-in-out 0.5s;
  }
`;
