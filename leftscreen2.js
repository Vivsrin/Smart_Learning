import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
//import console = require('console');



export default class Hello360 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count : 1,
      info: "NA",
    }
  }

  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
    const matter=['A','B','C']
    this.setState({info: this.state.info=matter[this.state.count%3]})
  };
  


  render() {
    // Reference the count in our UI
    return (
      <View style={styles.panel}>
        <VrButton 
          onClick={this._incrementCount}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
          </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});