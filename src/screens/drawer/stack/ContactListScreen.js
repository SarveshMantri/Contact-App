import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

// Components
import FloatingButton from '../../../components.js/FloatingButton';

// Styles
import styles from '../../../styles/styles';

// React-Native-SQLite-Storage
import {createTable, getData} from '../../../components.js/LocalStorage';
import {useIsFocused} from '@react-navigation/native';
import CustomListItem from '../../../components.js/CustomListItem';

export default function ContactListScreen({navigation}) {
  const [list, setList] = useState([]);

  // useEffect hook
  useEffect(() => {
    createTable();
    getData(setList);
  }, [useIsFocused()]);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          {list.length == 0 ? (
            <View style={{alignItems: 'center', alignContent: 'center'}}>
              <Text>NO CONTACTS TO SHOW</Text>
            </View>
          ) : (
            <View style={styles.listBackground}>
              {list.map(item => {
                return (
                  <CustomListItem
                    key={item.id}
                    item={item}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
      <FloatingButton navigation={navigation} />
    </View>
  );
}
