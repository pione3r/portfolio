import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  padding: 32px;

  min-height: 90vh;

  opacity: 0;

  // 세로모드 모바일 디바이스 (가로 해상도가 485px 보다 작은 화면에 적용)
  @media (max-width: 485px) {
    flex-direction: column;
    gap: 40px;
  }

  ${(props) =>
    props.className === 'visible' &&
    css`
      animation: ${sectionShow} ease-in-out 1s;
      opacity: 1;
    `}
`;

const sectionShow = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const SectionTitle = styled.h1`
  display: block;

  position: relative;

  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-2xlarge);
  line-height: 1.5;

  color: var(--header-logo-text-color);

  @media (max-width: 485px) {
    font-size: var(--base-text-size-xlarge);
  }

  &::after {
    content: '';

    display: block;
    width: 100%;
    height: 4px;

    position: absolute;
    bottom: 8px;

    border-radius: 2px;
    background: linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%);
  }
`;

const SectionBody = styled.div`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);
  line-height: 1.5;

  color: var(--section-body-text-color);

  white-space: pre-wrap;

  @media (max-width: 485px) {
    font-size: var(--base-text-size-small);
  }
`;

export function AboutMe() {
  const target = useRef(null);

  const [sectionVisible, setSectionVisible] = useState('');

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: [0, 0.1, 0.3, 1.0],
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0.2) {
        setSectionVisible('visible');
      }
    }, observerOptions);

    if (target.current !== null) {
      observer.observe(target.current);
    }
  }, []);

  return (
    <Container id="aboutMePage" ref={target} className={sectionVisible}>
      <SectionTitle>ABOUT ME</SectionTitle>
      <SectionBody>
        {`프론트엔드 엔지니어로서 가져야할 역량 중 하나는
끊임없이 변화하는 개발 생태계에서 고이지 않고

개발, 테스팅, 서비스, 성능 등에
지속적으로 고민하고 적용하는 자세를 
가지는 것이라 생각합니다.

이를 위해 한 줄의 더 나은 코드를 작성하고,
사용자의 입장에서 더 나은 사용성을 위해,
더 깊이 탐험하는 프론트엔드 엔지니어입니다.`}
      </SectionBody>
    </Container>
  );
}
