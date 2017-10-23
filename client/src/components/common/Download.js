import styled from 'styled-components';
import { colors } from './colors';

const Download = styled.a.attrs({
  download: true
})`
  text-decoration: none;
  color: ${props => props.color || colors.link};
`;

export {Download};
