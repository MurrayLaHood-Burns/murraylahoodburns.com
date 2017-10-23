import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import NavTop from './NavTop';
import NavSide from './NavSide';

const Nav = ({
  header,
  children,
  links,
  barWidth,
  color,
  backgroundColor,
  mobileWidth
}) => {

  color = color || 'black';
  backgroundColor = backgroundColor || 'white';
  barWidth = barWidth || 300;  
  mobileWidth = mobileWidth || 900;

  return (
    <Media query={`(max-width: ${mobileWidth}px)`}>
      {matches => matches ? (
        <TopContainer>
          <NavTop
            header={header}
            color={color}
            backgroundColor={backgroundColor}
            barWidth={barWidth}
          >
            {links}
          </NavTop>
          {children}
        </TopContainer>
      ) : (
        <SideContainer barWidth={barWidth}>
          <NavSide 
            header={header}
            color={color}
            backgroundColor={backgroundColor}
            barWidth={barWidth}
          >
            {links}
          </NavSide>
          {children}
        </SideContainer>
      )}
    </Media>
  );
};

const TopContainer = styled.div`
  
`;

const SideContainer = styled.div`
  margin-left: ${props => `${props.barWidth}px`};
`;

export { Nav };
