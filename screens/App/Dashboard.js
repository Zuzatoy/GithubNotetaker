import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import Profile from './Profile';


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

    makeBackground = btn => {
        const obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }
        if(btn === 0) {
            obj.backgroundColor = '#48BBEC';
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        } return obj;
    }

    goToNotes = () => {
        console.log("Going to notes!");
    }

    goToProfile = () => {
        console.log("Going to Profile!");
        this.props.navigator.push({
            title: 'Profile Page',
            component: Profile,
            passProps: {userInfo: this.props.userInfo}
          });
    }

    goToRepos = () => {
        console.log("Go to Repos");
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Profile</Text>    
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Repos</Text>    
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Notes</Text>    
                </TouchableHighlight>
            </View>
        )
    }

}