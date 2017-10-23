import React from 'react';
import styled from 'styled-components';

const FaIconBanner = ({
  color,
  faIcon
}) => {

  return (
    <Container color={color}>
      <i className={`fa fa-4x fa-${faIcon}`} aria-hidden='true'></i>
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.color ? props.color : ''}; 
  margin-bottom: 10px;
  text-align: center;
`;

export {FaIconBanner}
