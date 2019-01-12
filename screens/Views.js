import React from 'react';
import { View, Text, Picker, Switch, Slider, FlatList, TouchableHighlight, Button, Alert, Modal, StatusBar } from 'react-native';

export default class Views extends React.Component {


  constructor(props) {
    super(props);
    this.state = { language: '', switch: false, selected: (new Map()) };
  }


  _onPressButton(evento) {
    // Alert.alert('You tapped the 2 button! ' + evento.nativeEvent.locationX)
    console.log('You click by View ' + evento.nativeEvent.locationX)
  }

  _onMoveButton(evento) {
    console.log('You move View ' + evento.nativeEvent.locationX)
  }

  _mostrar(cosa) {
    console.log(cosa)
  }

  render() {
    return (
      <View >
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View onStartShouldSetResponder={(event) => this._onPressButton(event)} style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View onResponderRelease={(event) => this._onMoveButton(event)} style={{ backgroundColor: 'red', flex: 0.5 }} />
          <Text>Hola!</Text>

        </View>
        <View>
          <Picker
            selectedValue={this.state.language}

            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Switch value={this.state.switch} onValueChange={(val) => this.setState({ switch: val })}></Switch>
        </View>
        <View>
          <Slider>

          </Slider>
        </View>

        <View>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
        <View style={{ height: 100 }}>
          <MultiSelectList></MultiSelectList>
        </View>

        <BotonAlerta></BotonAlerta>
        <ModalExamble></ModalExamble>
        <StatusBarExample></StatusBarExample>
      </View>
    );
  }
}



class MultiSelectList extends React.PureComponent {


  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    console.log("Item press " + id)
  };

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={[{ id: 'a', title: 'a' }, { id: 'b', title: 'b' }]}
        //extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

class MyListItem extends React.PureComponent {

  render() {
    return (


      <View>

        <TouchableHighlight
          onPress={() => this.props.onPressItem(this.props.id)}>
          <View style={{ backgroundColor: 'skyblue', height: 50 }}>
            <Text>{this.props.title}</Text>
          </View>
        </TouchableHighlight>


        <View style={{ backgroundColor: 'white', height: 5 }}></View>

      </View>
    );
  }
}

class BotonAlerta extends React.Component {

  _alerta() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View>
        <Button title="Alerta" onPress={this._alerta} ></Button>
      </View>
    );
  }

}


class ModalExamble extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{
        height: 100,
        backgroundColor: 'green'
      }}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <View style={{ backgroundColor: 'gray', height: 50 }}>
                  <Text>Hide Modal</Text></View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>

          <View style={{ backgroundColor: 'brown', height: 50 }}>
            <Text>Show Modal</Text></View>
        </TouchableHighlight>

      </View>
    );
  }

}


class StatusBarExample extends React.Component {


  render() {
    return (
      <View>
        <View>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
            hidden={false} 
          />

        </View>
      </View>
    );
  }

}