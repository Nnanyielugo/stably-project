import styled from 'styled-components';

interface SubHeaderProps {
  size: number;
  marginBottom: number;
}

const SubHeader = styled.span.attrs((props: SubHeaderProps) => ({
  size: props.size,
  marginBottom: props.marginBottom,
}))`
  color: #fff;
  font-size: ${(props) => props.size}px;
  text-align: center;
  display: block;
  margin-bottom: ${(props) => props.marginBottom || 30}px; ;
`;

export default SubHeader;
