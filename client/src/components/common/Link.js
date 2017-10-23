import React from 'react';
import styled from 'styled-components';
import { Link as rrLink } from 'react-router-dom';
import { colors } from './colors';

const Link = ({
  children,
  internal,
  to
}) => {


  if(internal){
    return <InternalLink to={to}>{children}</InternalLink>;
  }

  return <ExternalLink href={to} target='_blank'>{children}</ExternalLink>;
};

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${props => props.color || colors.link};
`;

const InternalLink = styled(rrLink)`
  text-decoration: none;
  color: ${props => props.color || colors.link};
`;

export {Link};
