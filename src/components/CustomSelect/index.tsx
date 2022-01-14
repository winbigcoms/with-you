import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

import { searchTypeSelectOptions, selectAnimationVariants } from 'consts/search';

import { Triangle } from 'components';
import { CustomInputText } from '..';

const CustomSelectContainer = styled.div`
  max-width: 130px;
  width: 35%;

  max-height: 55px;
  min-height: 50px;
  height: 80%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  z-index: 5;
  background-color: #fff;
  border-radius: 20px;

  @media (max-width: 600px) {
    width: 82px;
  }
`;

const CustomSelctShowCase = styled.div`
  width: 60px;
  text-align: center;
  margin-right: 7px;

  @media (max-width: 600px) {
    margin-right: 5px;
    text-align: start;
  }
`;

const StyledMotionDiv = styled(motion.div)`
  width: 24%;
  min-width: 100px;
  height: 100px;
  position: absolute;
  left: 0px;
  bottom: -100px;
  z-index: 3;
  left: 0.2vw;

  @media (max-width: 600px) {
    left: 1vw;
  }
`;

const CustomSelectOptionShowItem = styled.div<{ idx: number }>`
  width: 90%;
  height: 40px;

  margin: 7px 0px;

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
    setOpenStae(state => !state);
  };

  const onSelectOptionClick = e => {
    if (e.target.dataset.value && e.target.dataset.value !== selectedValue) {
      setValue(e.target.dataset.value);
    }
    onSelectClick();
  };

  const onSelectBlur = () => {
    setOpenStae(false);
  };

  return (
    <>
      <CustomSelectContainer onClick={onSelectClick} onBlur={onSelectBlur} tabIndex={0}>
        {searchTypeSelectOptions
          .filter(option => option.value === selectedValue)
          .map((initVal, idx) => (
            <CustomSelctShowCase key={idx}>{initVal.title}</CustomSelctShowCase>
          ))}
        <Triangle size={7} color='#c9cfff' rotate={isOpen} />
      </CustomSelectContainer>
      <CustomInputText />
      <StyledMotionDiv
        animate={isOpen ? 'open' : 'closed'}
        variants={selectAnimationVariants}
        initial='close'
        onClick={onSelectOptionClick}
      >
        {searchTypeSelectOptions.map((option, idx) => (
          <CustomSelectOptionShowItem key={idx} idx={idx} data-value={option.value}>
            {option.title}
          </CustomSelectOptionShowItem>
        ))}
      </StyledMotionDiv>
    </>
  );
};
