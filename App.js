import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button,Alert } from 'react-native';
import Views from './screens/Views';
import Home from './screens/Home';



export default class HomeScreen extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the 2 button!')
  }

  constructor(props) {
    super(props);
    this.state = {text: ''}, {screen: 'Views'};
  }

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
          return (
              <View style={styles.container}  >
                <Views />
             
                <View style={{flexDirection: 'row'}}>
                  <Button color="red" onPress = { ( ) => { this.setState({screen:'Home'})      } } title = "Call Home" / >
                  <Button color="red" onPress = { ( ) => { this.setState({screen:'Views'})      } } title = "Call Other" / >
                </View>
              </View>
            );

  }

}



class Botones extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Button color="red" onPress = { ( ) => { this.setState({screen:'Home'})      } } title = "Home" / >
        <Button color="red" onPress = { ( ) => { this.setState({screen:'Views'})      } } title = "Lista Cabezal" / >
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
