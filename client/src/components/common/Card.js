import styled from 'styled-components';

const Card = styled.div`
  color: {props => props.color ? props.color : ''};
  backgroundColor: ${props => props.backgroundColor ? props.backgroundColor : ''};
  padding: 5px;
  margin-bottom: 60px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export {Card};
