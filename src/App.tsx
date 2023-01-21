import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Header, Footer } from '@/components';

const Container = styled.div``;

const DarkmodeToggle = styled.button``;

const Section = styled.section`
  /* border: 2px solid limegreen; */
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const titleShow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
  }
`;

const SectionTitle = styled.h1`
  display: block;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-xlarge);
  line-height: 1.5;

  color: var(--header-logo-text-color);

  animation: ${titleShow} ease-in-out 1s;
`;

const titleUnderline = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const SectionTitleName = styled.span`
  display: block;
  width: fit-content;

  position: relative;

  &::after {
    content: '';

    display: block;
    width: 100%;
    height: 4px;

    position: absolute;

    /* background-color: var(--section-title-underline-color); */
    border-radius: 2px;
    background: linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%);

    animation: ${titleUnderline} ease-in-out 1.5s 0.1s;
  }
`;

const ProfileImageWrapper = styled.div`
  /* width: ${(props) => {
    if (props.className === 'hover') {
      return '250px';
    } else {
      return '100px';
    }
  }};

  ${(props) =>
    props.className === 'hover' &&
    css`
      position: absolute;
      right: 0;
    `};
  ${(props) =>
    props.className === '' &&
    css`
      position: absolute;
      right: 80px;
    `}; */
  width: 250px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: ease-in-out 1s;

  border-radius: 16px;
  box-shadow: 10px 10px 1000px 1px rgb(23, 36, 70);
`;
const ProfileImage = styled.img`
  ${(props) =>
    props.className === 'hover' &&
    css`
      width: 350px;
      transition: ease-in-out 1s;
    `};
  ${(props) =>
    props.className === '' &&
    css`
      width: 150px;

      animation: ${imageFloat} 2s infinite;
    `};
`;

const imageFloat = keyframes`
  50% { transform: translateY(-7px) }
`;

function App() {
  const [img, setImg] = useState('/profile.png');
  const [imgHovered, setImgHovered] = useState('');

  useEffect(() => {
    const theme = document.body.getAttribute('data-theme');
    if (theme === '' && !localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    if (localStorage.getItem('theme') === 'light') {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <Container>
      <Header />
      <DarkmodeToggle
        onClick={() => {
          const theme = localStorage.getItem('theme');

          if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          }

          if (theme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
          }
        }}
      >
        다크 모드 토글 버튼
      </DarkmodeToggle>
      <Section>
        <SectionTitle>
          안녕하세요,
          <br />
          프론트엔드 개발자
          <br />
          <SectionTitleName>용준현입니다</SectionTitleName>
        </SectionTitle>
        <ProfileImageWrapper
          className={imgHovered}
          onMouseOver={() => {
            setImgHovered('hover');
            setImg('/profile-unscreen.gif');
          }}
          onMouseLeave={() => {
            setImg('/profile.png');
            setImgHovered('');
          }}
        >
          <ProfileImage src={img} alt="" className={imgHovered} />
        </ProfileImageWrapper>
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
