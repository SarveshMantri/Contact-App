import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';

// React-Native-Paper
import {TextInput, Button, IconButton} from 'react-native-paper';

// Styles
import styles from '../../../styles/styles';
import ActionMenu from '../../../components.js/ActionMenu';

// React-Native-SQLite-Storage
import {deleteData, updateData} from '../../../components.js/LocalStorage';

const UpdateContactScreen = ({route, navigation}) => {
  const data = route.params;
  const id = data.id;
  const [imageUri, setImageUri] = useState(JSON.parse(data.imagePath));
  const [name, setName] = useState(data.name);
  const [mobile, setMobile] = useState(data.mobileNumber);
  const [landline, setLandline] = useState(data.landlineNumber);
  const [isFavorite, setIsFavorite] = useState(data.isFavorite);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <ActionMenu
              imageUri={imageUri}
              setImageUri={setImageUri}></ActionMenu>
          </View>
          <View
            style={{
              ...styles.textInput,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              mode="outlined"
              label="Name"
              value={name}
              style={{flex: 1, marginRight: 10}}
              onChangeText={name => setName(name)}
            />
            <IconButton
              icon={isFavorite ? 'heart' : 'heart-outline'}
              size={32}
              onPress={() => {
                setIsFavorite(!isFavorite);
              }}
            />
          </View>
          <TextInput
            mode="outlined"
            label="Mobile"
            value={mobile}
            onChangeText={mobile => setMobile(mobile)}
            keyboardType="phone-pad"
            style={styles.textInput}
          />
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Landline"
            value={landline}
            onChangeText={landline => setLandline(landline)}
            keyboardType="phone-pad"
          />
          <View style={{flexDirection: 'row'}}>
            <Button
              mode="contained"
              style={styles.updateButton}
              onPress={() =>
                updateData(
                  id,
                  name,
                  mobile,
                  landline,
                  imageUri,
                  isFavorite,
                  navigation,
                )
              }>
              Update
            </Button>
            <Button
              mode="contained"
              style={styles.updateButton}
              onPress={() => deleteData(id, navigation)}>
              Delete
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateContactScreen;
