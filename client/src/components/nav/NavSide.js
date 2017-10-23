import React from 'react';
import styled from 'styled-components';

const NavSide = ({
  header,
  children, 
  barWidth,
  color,
  backgroundColor
}) => {

  return (
    <Bar 
      className='w3-card-4' 
      barWidth={barWidth}
      color={color}
      backgroundColor={backgroundColor}
    >
      {header}
      <LinkContainer>
        {children}
      </LinkContainer>
    </Bar>
  );
};

const LinkContainer = styled.div`

`;

const Bar = styled.div`
  width: ${props => `${props.barWidth}px`};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  display: inline;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  padding: 5px;
`;

export default NavSide;
