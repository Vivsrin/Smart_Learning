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

  _incrementCount1 = () => {
    this.setState({count: this.state.count + 1});
    const matter=['A','B','C']
    this.setState({info: this.state.info=matter[this.state.count%3]})
  };

  _incrementCount2 = () => {
    this.setState({count: this.state.count - 1});
    const matter=['A','B','C']
    this.setState({info: this.state.info=matter[this.state.count%3]})
  };
  _incrementCount3 = () => {
    this.setState({info: this.state.info="Index"})
  };
  


  render() {
    // Reference the count in our UI
    return (
      <View style={styles.panel}>
          {/* <Text>
              {`${this.state.info}`}
          </Text> */}
        <VrButton 
          onClick={this._incrementCount1}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            A
          </Text>
          </VrButton>
          <VrButton 
          onClick={this._incrementCount2}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            B
          </Text>
          </VrButton>
          <VrButton 
          onClick={this._incrementCount3}
        style={styles.greetingBox}>
          <Text style={styles.greeting}>
            I
          </Text>
          </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
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