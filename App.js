import { StatusBar } from 'expo-status-bar';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getMovies} from './src/data/fetchData.js'
import {useState} from 'react';
import ImagePickerExample from './ImagePickerExample.js' 
import Footer from "./src/components/Footer.js"

export default function App() {
  const [products,mod_products] = useState([]);

  const getMov = () =>  
  getMovies(mod_products)

  return (
    <>
    <View style = {styles.container} >
      <Text>What</Text>
      <Button onPress={getMov} title="wa"></Button>
      <Footer/> 
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    flex: 1,
    backgroundColor:"#FFFFFF",
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
