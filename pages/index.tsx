import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';

import styled from 'styled-components';

import { toJS } from 'mobx';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import { UserStore } from 'store';

import { MainHeader, Map } from 'src/components';
import { KakaoPlace, PlaceType } from 'src/types/place';
import { useKakaoMap } from 'src/Hooks';

const StyledDiv = styled.div`
  color: red;
`;

interface HomeProps {
  user: UserStore;
}

const Home: NextPage = (props: HomeProps) => {
  const { user } = props;
  const [places, setPlaces] = useState<KakaoPlace[] | PlaceType[]>([]);
  const [selectedKakaoPlace, , setSelectedKakaoplace] = useState<KakaoPlace>({});

  const saveKakaoSearchResult = (result: KakaoPlace[]) => {
    setPlaces(result);
  };

  const { kakaoMap, selectInList, searchLocation, paginationObject } = useKakaoMap({
    setSearchData: saveKakaoSearchResult,
    searchData: places
  });

  return (
    <main>
      <Head>
        <meta name='keyword' content='카페 찾기' />
        <title>with you</title>
      </Head>
      <MainHeader searchLocation={searchLocation} />
      <Map kakaoMapObject={kakaoMap} />
    </main>
  );
};

export default inject('user')(observer(Home));
