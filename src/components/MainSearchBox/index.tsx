import { useState } from 'react';

import styled from 'styled-components';
import { CustomSelect, CustomInputText } from 'src/components';

const MainSearchBoxContainer = styled.div`
  max-width: 500px;
  min-width: 250px;

  max-height: 70px;
  min-height: 45px;

  width: 50%;

  border-radius: 25px;
  background-color: #fff;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  padding: 0px 1vw;

  @media (max-width: 600px) {
    padding: 0px 4vw;
  }
`;

interface MainSearchBoxProps {
  searchLocation: (keyword: string) => void;
}

export const MainSearchBox = (props: MainSearchBoxProps) => {
  const { searchLocation } = props;

  const [selectedValue, setValue] = useState('new');

  const onChangeSelect = (value: string) => {
    setValue(value);
  };

  return (
    <MainSearchBoxContainer>
      <CustomSelect selectedValue={selectedValue} onChangeSelect={onChangeSelect} />
      <CustomInputText onSubmit={searchLocation} />
    </MainSearchBoxContainer>
  );
};
