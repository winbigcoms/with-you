import styled from 'styled-components';

const HiddenTextContainer = styled.div`
  & > * {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0); /* IE 6,7 */
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
`;

export const HiddenText = ({ children }) => {
  return <HiddenTextContainer>{children}</HiddenTextContainer>;
};
