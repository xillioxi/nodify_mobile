import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values"
import {nanoid} from 'nanoid';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);   

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };

  const handleUploadPhoto = () => {
    console.log("handleUploadPhoto")

    fetch(`http://192.168.128.127:6200`, {
      method: 'POST',
      body:createFormData()
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const createFormData = () => {
    

    const data = new FormData();

    console.log(image);

    data.append('image', {
      name: nanoid(),
      type: "jpg",
      uri:  image,  
    });

    console.log(data)
  /*
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    */
  
    return data;
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="What" onPress={()=>{handleUploadPhoto()}}></Button>
    </View>
  );
}