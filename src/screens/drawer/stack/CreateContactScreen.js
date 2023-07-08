import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';

// React-Native-Paper
import {TextInput, Button, IconButton} from 'react-native-paper';

// Styles
import styles from '../../../styles/styles';
import ActionMenu from '../../../components.js/ActionMenu';

// React-Native-SQLite-Storage
import {createTable, setData} from '../../../components.js/LocalStorage';

const CreateContactScreen = ({navigation}) => {
  const avatarImg = require('../../../assets/avatar.png');

  // useState hooks
  const [imageUri, setImageUri] = useState(avatarImg);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [landline, setLandline] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect hook
  useEffect(() => {
    createTable();
  }, []);

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
          <View style={styles.textInput}>
            <TextInput
              mode="outlined"
              label="Mobile"
              value={mobile}
              onChangeText={mobile => setMobile(mobile)}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              mode="outlined"
              label="Landline"
              value={landline}
              onChangeText={landline => setLandline(landline)}
              keyboardType="phone-pad"
            />
          </View>
          <Button
            mode="contained"
            style={styles.buttonContainer}
            onPress={() =>
              setData({
                name,
                mobile,
                landline,
                imageUri,
                isFavorite,
                navigation,
              })
            }>
            Save
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateContactScreen;
