import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

// React-Native-Paper
import {Menu, Avatar} from 'react-native-paper';

// React-Native-Image-Picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ActionMenu = ({imageUri, setImageUri}) => {
  const [visible, setVisible] = useState(false);

  // Image Picker Configuration
  const options = {
    mediaType: 'photo',

    uri: true,
  };

  // Image Picker Functions
  const openCamera = () => {
    setVisible(false);
    launchCamera(
      {...options, cameraType: 'back', saveToPhotos: true},
      response => {
        if (response.assets) {
          setImageUri(response.assets[0]);
        }
      },
    );
  };
  const openGalary = () => {
    setVisible(false);
    launchImageLibrary(options, response => {
      if (response.assets) {
        setImageUri(response.assets[0]);
      }
    });
  };
  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchorPosition="bottom"
      anchor={
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Avatar.Image size={140} source={imageUri} />
        </TouchableOpacity>
      }>
      <Menu.Item
        leadingIcon={(icon = 'camera')}
        onPress={openCamera}
        title="Camera"
      />
      <Menu.Item
        leadingIcon={(icon = 'image-plus')}
        onPress={openGalary}
        title="Galary"
      />
    </Menu>
  );
};

export default ActionMenu;
