import { useState } from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

import { borderBottomAnmaitionVariants } from './animate';

const CustomInputTextElement = styled(motion.input)`
  width: 100%;
  margin: 11px 5px;
  border: none;
  border-bottom: 1px solid #c9cfff;
  font-size: 18px;
  padding-top: 2px;
`;

interface CustomInputTextProps {
  onSubmit: (keyword: string) => void;
}

export const CustomInputText = (props: CustomInputTextProps) => {
  const { onSubmit } = props;

  const [isFocused, setFocused] = useState(false);

  const onBulrInput = () => {
    setFocused(false);
  };

  const onFocusInput = () => {
    setFocused(true);
  };

  const onPressEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(e.target.value);
    }
  };

  return (
    <CustomInputTextElement
      animate={isFocused ? 'focus' : 'blur'}
      variants={borderBottomAnmaitionVariants}
      initial='blur'
      onFocus={onFocusInput}
      onBlur={onBulrInput}
      placeholder='검색하기~'
      onKeyPress={onPressEnter}
    />
  );
};
