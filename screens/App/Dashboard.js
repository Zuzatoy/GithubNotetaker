import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    container: {
      marginTop: 65,
      flex: 1
    },
    image: {
      height: 350,
    },
    buttonText: {
      fontSize: 24,
      color: 'white',
      alignSelf: 'center'
    }
  });

export default class Dashboard extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Dashboard</Text>
                <Text>{JSON.stringify(this.props.userInfo)}</Text>
            </View>
        )
    }

}