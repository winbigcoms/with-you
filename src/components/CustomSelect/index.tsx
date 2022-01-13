import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const CustomSelectContainer = styled.div`
  max-width: 130px;
  min-width: 120px;
  width: 20%;

  max-height: 55px;
  min-height: 50px;
  height: 80%;

  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const CustomSelctShowCase = styled.div`
  max-width: 95px;
  min-width: 50px;
  width: 100%;
  margin-right: 5px;
`;

const CustomSelectTriangle = styled.div<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 12px solid #c9cfff;

  transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
  transition: transform 0.3s;
`;

const CustomSelectOptionShowBox = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100px;

  position: absolute;
  left: 0px;
  bottom: -100px;

  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const CustomSelectOptionShowItem = styled.div<{ idx: number }>`
  width: 90%;
  height: 40px;
  border-radius: 17px;
  position: absolute;

  left: -5px;
  top: calc(10px + ${props => props.idx * 50}px);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  border-radius: 20px;
`;

interface CustomSelectProps {
  initValue?: string;
  options: { title: string; value: string }[];
}

export const CustomSelect = () => {
  const [isOpen, setOpenStae] = useState(false);
  const [selectedValue, setValue] = useState('new');

  const onSelectClick = (e, data) => {
    console.log(e, data);
    setOpenStae(state => !state);
  };

  const onSelectOptionClick = e => {
    e.stoppropagation();
  };

  const selectOptions = [
    {
      title: '신규 카페 검색',
      value: 'new'
    },
    {
      title: '내 장소 검색',
      value: 'old'
    }
  ];

  return (
    <CustomSelectContainer onClick={onSelectClick}>
      {selectOptions
        .filter(option => option.value === selectedValue)
        .map((initVal, idx) => {
          return <CustomSelctShowCase key={idx}>{initVal.title}</CustomSelctShowCase>;
        })}
      <CustomSelectTriangle isOpen={isOpen} />
      <CustomSelectOptionShowBox isOpen={isOpen}>
        {selectOptions.map((option, idx) => (
          <CustomSelectOptionShowItem key={idx} idx={idx} defaultValue={option.value}>
            {option.title}
          </CustomSelectOptionShowItem>
        ))}
      </CustomSelectOptionShowBox>
    </CustomSelectContainer>
  );
};
