import React from 'react'
import { Button, Image, View, Platform,Text, StyleSheet } from 'react-native';

icon1 = require("../../assets/icons/boards.png")
icon2 = require("../../assets/icons/chat.png")
icon3 = require("../../assets/icons/performance.png")
icon4 = require("../../assets/icons/search.png")
icon5 = require("../../assets/icons/user.png")


export default function Footer() {
  return (
    <View style = {styles.container}>
      <View style={styles.deck}>
        <Image source={icon1} style={styles.icon} />
        <Text style={styles.text}>Boards</Text>
      </View>
      <View style={styles.deck}>
        <Image source={icon4} style={styles.icon}/>
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.deck}>
        <Image source={icon3} style={styles.icon}/>
        <Text style={styles.text}>Charts</Text>
      </View>
      <View style={styles.deck}>
        <Image source={icon2} style={styles.icon}/>
        <Text style={styles.text}>Chat</Text>
      </View>
      <View style={styles.deck}>
        <Image source={icon5} style={styles.icon}/>
        <Text style={styles.text}>Account</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:0,
    backgroundColor:'#FDFDFD',
    display:"flex",
    flexDirection: "row",
    width:'100%',
    height:'10%',
    justifyContent:'space-between',
    alignSelf:"flex-end",
    paddingTop:0,
    borderTopWidth:1,
    borderTopColor:"lightgrey"
  }, 
  icon:{
    height:23,
    width:23,
  },
  text:{
    fontSize:10,
    marginTop:5
  },
  deck:{
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-15,
    marginLeft:20,
    marginRight:20
  }
});




