import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MobileDetails from './MobileDetails.js';

class MobileList extends Component {
  state = {
    mobilelist: [] // Initialize mobilelist as an empty array
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/kaloa2025/mobile/mobiles')
      .then(response => {
        // Check if response.data is an array before setting the state
        if (Array.isArray(response.data)) {
          this.setState({ mobilelist: response.data });
        } else {
          console.error("Data received from API is not an array");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  renderList = () => {
    return this.state.mobilelist.map((mobile, index) => (
      <MobileDetails key={index} mobile={mobile} />
    ));
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default MobileList;
