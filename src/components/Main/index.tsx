import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  height: 90vh;

  padding: 32px 32px 128px 32px;

  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const pageTitleRiseAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
  }
`;

const PageTitle = styled.h1`
  display: block;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-2xlarge);
  line-height: 1.5;

  color: var(--header-logo-text-color);

  animation: ${pageTitleRiseAnimation} ease-in-out 1s;

  @media (max-width: 485px) {
    font-size: var(--base-text-size-xlarge);
  }
`;

const pageTitleUnderlineAnimation = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const PageTitleUnderline = styled.span`
  display: block;
  width: fit-content;

  position: relative;

  &::after {
    content: '';

    display: block;
    width: 100%;
    height: 4px;

    position: absolute;

    border-radius: 2px;
    background: linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%);

    animation: ${pageTitleUnderlineAnimation} ease-in-out 1.5s 0.1s;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 200px;
  height: 200px;

  border-radius: 16px;
  box-shadow: 10px 10px 1000px 1px rgb(23, 36, 70);

  @media (max-width: 485px) {
    width: 150px;
    height: 150px;
  }
`;

const imageBounceAnimation = keyframes`
  50% { transform: translateY(-7px) }
`;

const ProfileImage = styled.img`
  ${(props) => {
    if (props.className === '') {
      return css`
        width: 40%;
        animation: ${imageBounceAnimation} 2s infinite;
      `;
    }

    if (props.className === 'hover') {
      return css`
        width: 100%;
        transition: ease-in-out 1s;
      `;
    }
  }}
`;

export function Main() {
  const [profileImageURL, setProfileImageURL] = useState('/profile.png');
  const [imgHovered, setImgHovered] = useState('');

  return (
    <Container>
      <PageTitle>
        안녕하세요,
        <br />
        프론트엔드 개발자
        <br />
        <PageTitleUnderline>용준현입니다</PageTitleUnderline>
      </PageTitle>
      <ProfileImageWrapper
        className={imgHovered}
        onMouseOver={() => {
          setImgHovered('hover');
          setProfileImageURL('/profile-unscreen.gif');
        }}
        onMouseLeave={() => {
          setImgHovered('');
          setProfileImageURL('/profile.png');
        }}
      >
        <ProfileImage
          className={imgHovered}
          src={profileImageURL}
          alt="profile"
        />
      </ProfileImageWrapper>
    </Container>
  );
}
