import type { NextPage } from 'next';
import Head from 'next/head';

import { toJS } from 'mobx';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import { UserStore } from 'store';

import { Map, MainHeader } from 'components';

import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

interface HomeProps {
  user: UserStore;
}

const Home: NextPage = (props: HomeProps) => {
  const { user } = props;

  const { userData } = user;
  console.log(toJS(userData));

  return (
    <main>
      <Head>
        <meta name='keyword' content='카페 찾기' />
        <title>with you</title>
      </Head>
      <MainHeader />
      <Map />
    </main>
  );
};

export default inject('user')(observer(Home));
