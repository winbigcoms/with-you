import Link from 'next/link';

import styled from 'styled-components';

import { CustomSelect, HiddenText, MainSearchBox } from 'components';

const MainHeaderElement = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;

  max-height: 80px;
  min-height: 50px;
  height: 10%;

  display: flex;
  align-items: center;

  a {
    max-width: 60px;
    max-height: 60px;
    background-color: #ccc;
  }
`;

export const MainHeader = () => {
  return (
    <MainHeaderElement>
      <HiddenText>
        <h1>width you 공식홈페이지</h1>
      </HiddenText>
      <Link href='/'>
        <a>로고 자리</a>
      </Link>
      <MainSearchBox></MainSearchBox>
    </MainHeaderElement>
  );
};
