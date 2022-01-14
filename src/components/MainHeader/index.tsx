import Link from 'next/link';

import React from 'react';

import styled from 'styled-components';

import { HiddenText, MainSearchBox } from 'src/components';

const MainHeaderElement = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;

  background-color: rgba(201, 207, 255, 0.3);

  max-height: 80px;
  min-height: 50px;
  height: 7%;

  display: flex;
  align-items: center;

  a {
    max-width: 60px;
    max-height: 60px;
    background-color: #ccc;
  }
`;

interface MainHeaderContentProps {
  searchLocation: (keyword: string) => void;
}

const MainHeaderContent = (props: MainHeaderContentProps) => {
  const { searchLocation } = props;
  return (
    <MainHeaderElement>
      <Link href='/'>
        <a>
          <HiddenText>
            <h1>width you 공식홈페이지</h1>
          </HiddenText>
          로고 자리
        </a>
      </Link>
      <MainSearchBox searchLocation={searchLocation} />
    </MainHeaderElement>
  );
};

export const MainHeader = React.memo(MainHeaderContent);
