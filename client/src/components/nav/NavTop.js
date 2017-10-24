import React, { Component } from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import Drawer from 'react-motion-drawer';

class NavTop extends Component {

  constructor(props){
    super(props);

    this.state = {open: false, canOpen: true};
  }

  onMenuButtonClick() {
    this.setState({open: true});
  }

  onDrawerClick() {
    this.setState({open: false});
  }

  render() {

    const {
      header,
      children,
      color,
      backgroundColor,
      barWidth
    } = this.props;

    return (
      <PageContainer>
        <Drawer 
          open={this.state.open}
          drawerStyle={{backgroundColor: backgroundColor}}
          className='w3-card-4'
          width={barWidth}
          right
          onChange={open => this.setState({ open: open })}
        >
          <div onClick={this.onDrawerClick.bind(this)}>
            {children}
          </div>
        </Drawer>
        <Headroom>
          <Bar 
            className='w3-card-4'
            color={color}
            backgroundColor={backgroundColor}
          >
            <Container>
              <Header>
                {header}
              </Header>
              <MenuButton 
                color={color}
                onClick={this.onMenuButtonClick.bind(this)}
              >
                <i className='fa fa-bars fa-2x' aria-hidden='true'></i>
              </MenuButton>
            </Container>
          </Bar>
        </Headroom>
      </PageContainer>
    );
  }
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Header = styled.div`
  margin-right: auto;
`;

const MenuButton = styled.button`
  display: inline;
  float: right;
  background-color: transparent;
  color: ${props => props.color};
  border: 0;
`;

const Container = styled.div`
  margin: auto;
  padding: 5px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

const Bar = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  margin-bottom: 10px;
`;

export default NavTop;
