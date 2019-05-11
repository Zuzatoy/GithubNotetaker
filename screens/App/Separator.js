import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        height: 1,
        flex: 1,
        marginLeft: 15,
        backgroundColor: '#E4E4E4'
    }
});

export default class Separator extends React.Component {
    render() {
        return (
            <View style={styles.container} />
        )
    }
}