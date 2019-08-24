import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset
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
  


  render() {
    // Reference the count in our UI
    return (
      <View style={styles.panel}>
        <Image source={asset("eic-coin.jpg")} />
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