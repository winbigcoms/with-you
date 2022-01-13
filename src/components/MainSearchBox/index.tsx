import styled from 'styled-components';
import { CustomSelect } from 'components';

const MainSearchBoxContainer = styled.div`
  max-width: 500px;
  max-height: 70px;
  min-height: 45px;

  width: 50%;

  border-radius: 25px;
  background-color: #fff;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
`;

export const MainSearchBox = () => {
  return (
    <MainSearchBoxContainer>
      <CustomSelect />
    </MainSearchBoxContainer>
  );
};
