import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button,Alert } from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}




class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.alvaro}>{this.props.text}</Text>
    );
  }
}

export default class Home extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
  
      return (
        <View style={styles.container}  >
          
          <View style={{flex:1, backgroundColor: 'powderblue', marginTop:25}}>
            <Text>Hola nuevo mundo en español</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
          </View>
  
          <View style={{alignItems: 'center', flex: 1, backgroundColor: 'skyblue'}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
          </View>
  
          <View style={{flex:0.5, backgroundColor: 'steelblue'}}>
            <Blink  text='I love to blink' />
          </View>
  
          <View style={{flex:1, backgroundColor: 'green', flexDirection: 'row', alignItems:"center"}}>
            <View style={{height: 50, flex:1, backgroundColor: 'powderblue'}} />
            <View style={{height: 50, flex:1,backgroundColor: 'skyblue'}} />
            <View style={{height: 50, flex:1,backgroundColor: 'steelblue'}} />
          </View>
  
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}
            />
            
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>
  
          <View>
            <Button onPress = { ( ) => { Alert.alert ( 'You tapped the button!' ) ; } } title = "Press Me" / >
            <Button color="#841584" onPress = { this._onPressButton } title = "Press 2 Me" / >

          </View>
          
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
  alvaro:{
    color: 'blue',
  },
});
