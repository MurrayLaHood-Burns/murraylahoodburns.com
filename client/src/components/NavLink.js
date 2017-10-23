import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { colors } from './common';

const NavLink = ({to, faIcon, children}) => {

  return (
    <Container exact to={to} activeStyle={activeStyle}>
      <IconContainer>
        <i className={'fa fa-' + faIcon} aria-hidden='true'></i> 
      </IconContainer>
      <Title>
        {children}
      </Title>
    </Container>
  );
}

const activeStyle = {
  backgroundColor: colors.blueDark
};

const IconContainer = styled.h3`
  color: white;
  width: 50px;
  margin: 0;
  text-align: center;
`;

const Title = styled.h3`
  color: white;
  margin: 0;
`;

const Container = styled(Link)`
  margin: 0;
  padding: 5px;
  display: flex;
  text-decoration: none;
  flex-direction: row;
`;

export default NavLink;
