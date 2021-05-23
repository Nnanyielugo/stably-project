import styled from 'styled-components';

interface SubHeaderProps {
  size: number;
  marginBottom: number;
  marginTop: number;
}

const SubHeader = styled.span.attrs((props: SubHeaderProps) => ({
  size: props.size,
  marginBottom: props.marginBottom,
  marginTop: props.marginTop,
}))`
  color: #fff;
  font-size: ${(props) => props.size}px;
  text-align: center;
  display: block;
  margin-bottom: ${(props) => props.marginBottom || 30}px;
  margin-top: ${(props) => props.marginTop || 0}px;

  @media (max-width: 600px) {
    :last-of-type {
      margin-bottom: 40px;
    }
  }
`;

export default SubHeader;
