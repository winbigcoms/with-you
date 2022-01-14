import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { borderBottomAnmaitionVariants } from './animate';

const CustomInputTextElement = styled(motion.input)`
  width: 100%;
  margin: 11px 5px;
  border: none;
  border-bottom: 1px solid #c9cfff;
  font-size: 18px;
`;

export const CustomInputText = () => {
  const [isFocused, setFocused] = useState(false);

  const onBulrInput = () => {
    setFocused(false);
  };

  const onFocusInput = () => {
    setFocused(true);
  };

  return (
    <CustomInputTextElement
      animate={isFocused ? 'focus' : 'blur'}
      variants={borderBottomAnmaitionVariants}
      initial='blur'
      onFocus={onFocusInput}
      onBlur={onBulrInput}
      placeholder='검색하기~'
    />
  );
};
