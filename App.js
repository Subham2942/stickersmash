import {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from "./components/ImageViewer";
import placeholderImage from './assets/placeholder.png'
import Button from "./components/Button";



export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
      setSelectedImage(null)
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync} />
        <Button label={"Use this photo"}  />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    paddingTop: 58,
    flex: 1
  },
  footerContainer:{
    alignItems: 'center',
    flex: 1/3
  }
});
