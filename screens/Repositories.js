import React from 'react';
import Badge from './App/Badge';
import Separator from './App/Separator';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rowContainer: {
      flexDirection: 'column',
      flex: 1,
      padding: 10
    },
    name: {
      color: '#48BBEC',
      fontSize: 18,
      paddingBottom: 5
    },
    stars: {
      color: '#48BBEC',
      fontSize: 14,
      paddingBottom: 5
    },
    description: {
      fontSize: 14,
      paddingBottom: 5
    }
  });


export default class Repositories extends React.Component {
    openPage = url => {
        console.log('open URL', url);
    }
    render() {
        const repos = this.props.repos;
        const list = repos.map((repo, index) => {
            const desc = repo.description ? <Text style={styles.description}> {
                repos[index].description } </Text> : <View />;
                return (
                <View key={index}>
                    <View style={styles.rowContainer}>
                    <TouchableHighlight
                        onPress={() => this.openPage(repo.html_url)}
                        underlayColor='transparent'>
                        <Text style={styles.name}>{repo.name}</Text>
                    </TouchableHighlight>
                    <Text style={styles.stars}> Stars: {repos.stargazers_count} </Text>
                    {desc}
                    </View>
                    <Separator />
                </View>
                )
        });
        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={this.props.userInfo} />
                {list}
            </ScrollView>

        )
    }
}