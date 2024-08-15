import {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';

import ImageViewer from "./components/ImageViewer";
import placeholderImage from './assets/placeholder.png'
import Button from "./components/Button";
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';


export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null)

  const [selectedImage, setSelectedImage] = useState(null)
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.');
      setSelectedImage(null)
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  

  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage}/>
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
        ):(
            <View style={styles.footerContainer}>
              <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync} />
              <Button label={"Use this photo"} onPress={()=> setShowAppOptions(true)} />
            </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
