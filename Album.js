import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
 class Album extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.bigGreen}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

});
export default Album
