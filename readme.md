
# Stickersmash

A React Native app that allows users to select a photo, add stickers to it, and save the edited image. Built with Expo.

## Features

- Choose a photo from your device.
- Add and position stickers on the photo.
- Save the edited photo to your gallery.
- Reset to remove stickers and choose a new photo.

## Installation

### Prerequisites

- Node.js
- Expo CLI

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/subham2942/stickersmash.git
   cd stickersmash
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo server:

   ```bash
   npx expo start
   ```

4. Run the app on your device:

   - Use the Expo Go app to scan the QR code or
   - Use an emulator/simulator.

## Usage

1. **Choose a Photo:** 
   - Tap "Choose a photo" to select an image from your library.
   - Use "Use this photo" to proceed with the selected image.

2. **Add Stickers:**
   - Tap the circular button to open the sticker picker.
   - Select a sticker to add it to your photo. Use double-tap to resize and drag to reposition.

3. **Reset:**
   - Tap "Reset" to clear stickers and reselect the photo.

4. **Save Image:**
   - Tap "Save" to save the edited photo to your gallery.

## Project Structure

- `App.js`: Main entry point of the application.
- `components/`: Contains custom components such as:
  - `ImageViewer.js`
  - `EmojiSticker.js`
  - `EmojiList.js`
  - `EmojiPicker.js`
  - `Button.js`
  - `CircleButton.js`
  - `IconButton.js`
- `assets/`: Contains static assets like placeholder and emoji images.

## Dependencies

- **expo-image-picker:** For selecting images.
- **expo-media-library:** For saving images.
- **react-native-gesture-handler:** For handling gestures.
- **react-native-reanimated:** For animations.
- **expo-status-bar:** For status bar management.

## Future Enhancements

- Add more stickers.
- Enable dragging and resizing of stickers.
- Implement image sharing functionality.

## Contributing

Contributions are welcome. Please submit a Pull Request.

## License

MIT License

Feel free to adjust any sections based on additional features or requirements.