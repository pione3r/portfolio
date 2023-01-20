import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavItem, FooterNav } from '@/components';

const Container = styled.footer`
  display: none;

  @media (max-width: 485px) {
    display: block;

    padding: 16px 32px;

    position: sticky;
    bottom: 0;
  }
`;

const DropDownButtonContainer = styled.div`
  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    width: 45px;
    height: 45px;

    position: absolute;
    bottom: 35px;
    right: 35px;

    border-radius: ${(props) =>
      props.className === 'dropdown-active' ? '50%' : '12px'};

    background-color: var(--footer-background-color);

    transition: ease-in-out 0.1s;

    &:active {
      background-color: var(--footer-dropdown-text-color-hover);
    }
  }
`;

const DropDownButtonItem = styled.div`
  width: 20px;
  height: 4px;

  visibility: ${(props) =>
    props.className === 'dropdown-active' ? 'hidden' : ''};

  border-radius: 8px;

  background-color: var(--footer-dropdown-text-color);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: '';

    position: absolute;
    top: -10px;
    width: 20px;
    height: 4px;

    border-radius: 8px;

    background-color: var(--footer-dropdown-text-color);

    transition: ${(props) =>
      props.className === 'dropdown-active' && 'ease-in-out 0.3s'};

    ${(props) =>
      props.className === 'dropdown-active' &&
      css`
        top: 0px;
        transform: rotate(45deg);
        visibility: visible;
      `}
  }

  &::after {
    content: '';

    position: absolute;
    top: 10px;
    width: 20px;
    height: 4px;

    border-radius: 8px;

    background-color: var(--footer-dropdown-text-color);

    transition: ${(props) =>
      props.className === 'dropdown-active' && 'ease-in-out 0.3s'};

    ${(props) =>
      props.className === 'dropdown-active' &&
      css`
        top: 0px;
        transform: rotate(-45deg);
        visibility: visible;
      `}
  }
`;

export function Footer() {
  const [dropDownToggleClicked, setDropDownToggleClicked] = useState(false);

  return (
    <Container>
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
    </Container>
  );
}
