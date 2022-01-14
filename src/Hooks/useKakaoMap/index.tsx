import { useCallback, useEffect, useRef, useState } from 'react';
import { KakaoPlace, PlaceType, SearchKakaoResultPagination } from 'src/types/place';

interface useKakaoMapProps {
  setSearchData: (data: KakaoPlace[]) => void;
  searchData: KakaoPlace[] | PlaceType[];
  onSearchLocationDetail: (url: string) => void;
}

export const useKakaoMap = (props: useKakaoMapProps) => {
  const { setSearchData, searchData, onSearchLocationDetail } = props;

  const markers = useRef([]);
  const infoWindows = useRef([]);
  const kakaoMap = useRef<HTMLDivElement>(null);
  const mapObject = useRef(null);
  const paginationObject = useRef<null | SearchResultPagination>(null);
  const kakaoMapSearch = useRef(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      if (searchData.length === 0) {
        const x = 126.914454;
        const y = 37.549913;

        const initCenter = new (window as any).kakao.maps.LatLng(y, x);

        const options = {
          center: initCenter,
          level: 8
        };

        mapObject.current = new (window as any).kakao.maps.Map(kakaoMap.current, options);

        mapObject.current.relayout();
        mapObject.current.setCenter(initCenter);

        const zoomControl = new (window as any).kakao.maps.ZoomControl();

        mapObject.current.addControl(
          zoomControl,
          (window as any).kakao.maps.ControlPosition.BOTTOMRIGHT
        );

        kakaoMapSearch.current = new (window as any).kakao.maps.services.Places();
      } else {
        const target = searchData;

        const x = target[0].x;
        const y = target[0].y;

        markers.current.forEach(mark => {
          mark.setMap(null);
        });

        infoWindows.current.forEach(infoWindowObject => infoWindowObject.close());

        infoWindows.current = [];

        const initCenter = new (window as any).kakao.maps.LatLng(y, x);
        let bounds = new kakao.maps.LatLngBounds();

        const options = {
          center: initCenter
        };

        let markerBucket = [];

        for (let i = 0; i < target.length; i++) {
          const position = new (window as any).kakao.maps.LatLng(target[i].y, target[i].x);

          const imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
          const imageSize = new kakao.maps.Size(36, 37);
          const imgOptions = {
            spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin: new kakao.maps.Point(0, i * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          };

          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);

          const marker = new (window as any).kakao.maps.Marker({
            position: initCenter,
            map: mapObject.current,
            image: markerImage
          });

          const iwContent = `
            <div style="position:relative;padding:5px;">
              ${target[i].place_name}
            </div>
          `;

          const iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: true
          });

          infoWindows.current.push(infowindow);

          kakao.maps.event.addListener(marker, 'mouseout', e => {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.close();
          });

          kakao.maps.event.addListener(marker, 'mouseover', e => {
            const initCenter = new (window as any).kakao.maps.LatLng(target[i].y, target[i].x);
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(mapObject.current, marker);
          });

          kakao.maps.event.addListener(marker, 'click', function (e) {
            const initCenter = new (window as any).kakao.maps.LatLng(target[i].y, target[i].x);

            mapObject.current.setCenter(initCenter);

            infoWindows.current.forEach(infoWindowObject => infoWindowObject.close());

            mapObject.current.setLevel(2);
            // 마커 위에 인포윈도우를 표시합니다
            if (target[i].place_url) {
              onSearchLocationDetail(target[i]);
              infowindow.open(mapObject.current, marker);
            }
          });

          markerBucket.push(marker);

          bounds.extend(position);

          marker.setPosition(position);
        }

        markers.current = markerBucket;

        mapObject.current.setBounds(bounds);
        mapObject.current.relayout();
      }
    }
  }, [onSearchLocationDetail, searchData]);

  const searchLocation = useCallback(
    (keyword: string) => {
      if (kakaoMapSearch.current) {
        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            paginationObject.current = pagination as SearchKakaoResultPagination;
            setSearchData(data);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
          } else if (status === kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
          }
        }

        kakaoMapSearch.current.keywordSearch(keyword, placesSearchCB);
      }
    },
    [setSearchData]
  );

  const selectInList = useCallback((x: string, y: string, idx: number) => {
    if (kakaoMap.current) {
      const initCenter = new (window as any).kakao.maps.LatLng(y, x);

      infoWindows.current.forEach(infoWindowObject => infoWindowObject.close());

      infoWindows.current[idx].open(mapObject.current, markers.current[idx]);
      mapObject.current.setLevel(2);
      mapObject.current.setCenter(initCenter);
    }
  }, []);

  return {
    kakaoMap,
    searchLocation,
    paginationObject: paginationObject.current,
    selectInList
  };
};
