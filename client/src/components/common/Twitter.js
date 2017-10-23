import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

class Twitter extends Component {
 
  render() { 

    const { profile, collection } = this.props;

    var dataSource = {};
    var options = {};

    if(profile) {
      dataSource = {
        sourceType: 'profile',
        screenName: profile
      };
      options = {
        chrome: 'nofooter'
      };
    }
    else if(collection) {
      dataSource = {
        sourceType: 'collection',
        id: collection
      };
      options = {
        chrome: 'noheader nofooter'
      };
    }

    return(
      <Timeline
        dataSource={dataSource}
        options={options}
      />
    );
  }
}

export {Twitter};
