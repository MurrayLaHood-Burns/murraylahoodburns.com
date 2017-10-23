import styled from 'styled-components';
import { colors } from './colors';

const Page = styled.div`
  margin: auto;
  max-width: 1000px;
  margin-top: 10px;
  color: ${colors.text};
  font-family: 'Open Sans', sans-serif;

  @media (min-width: ${props=>props.mobileWidth ? props.mobileWidth : 900}px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export {Page};
