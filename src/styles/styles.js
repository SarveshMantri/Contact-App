import {StyleSheet, Dimensions} from 'react-native';

// Screens
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  // Screens Containers
  container: {
    margin: 20,
  },
  //Create Contact Screen
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: screenHeight * 0.05,
  },
  textInput: {
    marginVertical: 15,
  },
  buttonContainer: {
    marginTop: screenWidth * 0.2,
  },
  // Contact List Screen
  listBackground: {
    backgroundColor: '#ecd6fc',
    borderRadius: 15,
    paddingVertical: 10,
  },
  // Custom List Item Component
  rowFront: {
    height: 60,
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  phoneTextColor: {
    marginLeft: 15,
    color: 'purple',
  },
  // Update Contact Screen
  updateButton: {
    marginTop: screenWidth * 0.2,
    flex: 1,
    marginHorizontal: 2,
  },
});

export default styles;
