import React from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
// import Badge from './Badge';
// import Separator from '../Separator';
import { api } from './utils/api';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    buttonText: {
      fontSize: 18,
      color: 'white'
    },
    button: {
      height: 60,
      backgroundColor: '#48BBEC',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchInput: {
      height: 60,
      padding: 10,
      fontSize: 18,
      color: '#111',
      flex: 10
    },
    awesome: {
        color: 'red',
    },
    rowContainer: {
      padding: 10
    },
    footerContainer: {
      backgroundColor: '#E3E3E3',
      alignItems: 'center',
      flexDirection: 'row'
    }
  });


  export default class Notes extends React.Component {
      state = {
        note: '',
        error: '',
        notes: this.props.notes,  
      }

      handleSubmit = () => {
        const note = this.state.note;
        this.setState({
          note: ''
        });
        api.addNote(this.props.userInfo.login, note)
          .then((data) => {
            api.getNote(this.props.userInfo.login)
              .then((data) => {
                this.setState({
                notes: [data],
                })
              })
          }).catch((error) => {
            console.log('Request failed: ', error);
            this.setState({error})
          });
      }

      handleChange = e => {
        this.setState({
          note: e.nativeEvent.text
        });
      }

      footer = () => {
        return (
          <View>
            <View style={styles.footerContainer}>
              <TextInput
                style={styles.searchInput}
                value={this.state.note}
                onChange={this.handleChange}
                placeholder="New Note"
              />
              <TouchableHighlight
                style={styles.button}
                onPress={this.handleSubmit}
                underlayColor='#88D4F5'
              >
                <Text style={styles.buttonText}>  Submit </Text>
              </TouchableHighlight>
            </View>
          </View>
        )
      }

      _renderItem = ({item}) => (
        // <MyListItem
        <Text style={styles.awesome}>{item.key}</Text>
      );
    

      render() {
          return (
              <View style={styles.container}>
                <Text style={styles.awesome}>HELLO</Text>
                <FlatList
                    data={[this.state.notes]}
                    renderItem={this._renderItem}
                    renderHeader={() => <Badge userInfo={this.props.userInfo}/>}
                    enableEmptySections={true}
                /> 
                 {this.footer()}           
              </View>

          )
      }


  };

  //keyExtractor={this._keyExtractor}