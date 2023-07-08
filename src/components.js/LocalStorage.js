import {Alert} from 'react-native';

import SQLite from 'react-native-sqlite-storage';
// SQLite.enablePromise(true);

// DB config
const db = SQLite.openDatabase(
  {
    name: 'ContactDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

// Create Table
export const createTable = async () => {
  await db.transaction(async tx => {
    await tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'contacts' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT,' +
        'name TEXT,' +
        'mobileNumber TEXT,' +
        'landlineNumber TEXT,' +
        'imagePath TEXT,' +
        'isFavorite INTEGER DEFAULT 0)',
    );
  });
};

// Add data to DB
export const setData = async ({
  name,
  mobile,
  landline,
  imageUri,
  isFavorite,
  navigation,
}) => {
  if (name.length == 0 || mobile.length == 0) {
    Alert.alert('Warning!', 'Please fill all the data.');
  } else {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO contacts' +
            '(name, mobileNumber,landlineNumber, imagePath, isFavorite)' +
            'VALUES (?,?,?,?,?)',
          [
            name,
            mobile,
            landline,
            JSON.stringify(imageUri),
            isFavorite ? 1 : 0,
          ],
          (req, res) => {
            Alert.alert('Success', 'Contact added successfully');
          },
          error => {
            console.log(error);
          },
        );
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
};

// Get data from DB
export const getData = async setList => {
  try {
    await db.transaction(async tx => {
      await tx.executeSql(
        'SELECT * FROM contacts ORDER BY name COLLATE NOCASE ASC',
        [],
        async (tx, res) => {
          if (res.rows.length > 0) {
            let temp = [];
            for (let i = 0; i < res.rows.length; ++i) {
              // console.log(res.rows.item(i));
              temp.push(res.rows.item(i));
            }
            setList(temp);
          } else {
            setList([]);
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Update data in DB
export const updateData = async (
  id,
  name,
  mobile,
  landline,
  imageUri,
  isFavorite,
  navigation,
) => {
  console.log(id, name, mobile, landline);
  if (name.length == 0 || mobile.length == 0) {
    Alert.alert('Warning!', 'Please fill all the data.');
  } else {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'UPDATE contacts SET ' +
            'name = ?, mobileNumber = ?,landlineNumber = ?,' +
            ' imagePath = ?, isFavorite = ? WHERE id = ?',
          [
            name,
            mobile,
            landline,
            JSON.stringify(imageUri),
            isFavorite ? 1 : 0,
            id,
          ],
          (req, res) => {
            Alert.alert('Success', 'Contact updated successfully');
          },
          error => {
            console.log(error);
          },
        );
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
};

export const deleteData = async (id, navigation) => {
  try {
    await db.transaction(async tx => {
      await tx.executeSql(
        'DELETE FROM contacts WHERE id = ?',
        [id],
        (req, res) => {
          Alert.alert('Success', 'Contact deleted successfully');
        },
        error => {
          console.log(error);
        },
      );
    });
    navigation.goBack();
  } catch (error) {
    console.log(error);
  }
};

export const getFavData = async setList => {
  try {
    await db.transaction(async tx => {
      await tx.executeSql(
        'SELECT * FROM contacts WHERE isFavorite = 1 ORDER BY name COLLATE NOCASE ASC',
        [],
        async (tx, res) => {
          if (res.rows.length > 0) {
            let temp = [];
            for (let i = 0; i < res.rows.length; ++i) {
              // console.log(res.rows.item(i));
              temp.push(res.rows.item(i));
            }
            setList(temp);
          } else {
            setList([]);
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  } catch (error) {
    console.log(error);
  }
};
