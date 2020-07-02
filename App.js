import * as React from 'react';
import { Text, View, Button , TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av' ;


class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
       },
       {
         shouldPlay : true 
       }
     );
  }

  render() {
    return (
      <TouchableOpacity style={{
        backgroundColor : "green" ,
        alignItems : 'center' ,
        marginTop : 35 , 
        marginLeft : 70 ,
        borderRadius : 100 ,
        width : 200 ,
        height : 200 ,
        justifyContent : 'center' ,
        borderWidth : 5 ,
        borderColor : 'red' ,
      }} 
      onPress = {this.playSound}>
        <Text style={{
          font : 'Rockwell' ,
          fontWeight : 'bold' ,
          fontSize : 18 ,
          color : 'white'
        }}>Button</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


