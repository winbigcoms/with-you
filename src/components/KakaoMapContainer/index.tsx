import React, { forwardRef, Ref } from 'react';

type KakaomapComponentProps = {
  ref: Ref<HTMLDivElement>;
};

const KakaoMapContainer: React.FC<KakaomapComponentProps> = forwardRef((props, ref) => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});

KakaoMapContainer.displayName = 'kakaoMapContainer';

export default KakaoMapContainer;
