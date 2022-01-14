import React, { useEffect } from 'react';

import KakaoMapContainer from './KakaoMapContainer';

export const Map: React.FC = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      const x = 126.914454;
      const y = 37.549913;
      const coords = new (window as any).daum.maps.LatLng(y, x); // 지도의 중심좌표
      const options = {
        center: coords,
        level: 4
      };
      const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
      const marker = new (window as any).daum.maps.Marker({
        position: coords,
        map
      });
      map.relayout();
      map.setCenter(coords);
      marker.setPosition(coords);

      const zoomControl = new (window as any).daum.maps.ZoomControl();
      map.addControl(zoomControl, (window as any).daum.maps.ControlPosition.BOTTOMRIGHT);
    }
  }, [kakaoMap]);

  return <KakaoMapContainer ref={kakaoMap} />;
};
