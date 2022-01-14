import styled from 'styled-components';

interface TriangleProps {
  color: string;
  size: number;
  rotate?: boolean;
}
const CustomSelectTriangle = styled.div<{ rotate: boolean; color: string; size: number }>`
  width: 0;
  height: 0;
  border-left: ${props => props.size}px solid transparent;
  border-right: ${props => props.size}px solid transparent;
  border-top: ${props => props.size + 5}px solid ${props => props.color};

  transform: rotate(${props => (props.rotate ? 180 : 0)}deg);
  transition: transform 0.3s;

  margin-bottom: 2px;
`;

export const Triangle = (props: TriangleProps) => {
  const { size, color, rotate } = props;

  return <CustomSelectTriangle size={size} color={color} rotate={rotate ? 1 : 0} />;
};
