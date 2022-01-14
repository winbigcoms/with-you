import React, { forwardRef, Ref } from 'react';

import styled from 'styled-components';

type KakaomapComponentProps = {
  ref: Ref<HTMLDivElement>;
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const KakaoMapContainer: React.FC<KakaomapComponentProps> = forwardRef((props, ref) => {
  return (
    <MapContainer>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
    </MapContainer>
  );
});

KakaoMapContainer.displayName = 'kakaoMapContainer';

export default KakaoMapContainer;
