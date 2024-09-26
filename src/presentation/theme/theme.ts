import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#212121',

  background: '#fff',
  backgroundBlue: '#61D1FF',

  //Colores europiel
  lightBlueEuropiel: '#CDF2F6',
  pinkEuropiel: '#FFD5ED',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  primaryButton: {
    // backgroundColor: globalColors.backgroundBlue,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
  darkText: {color: '#212121'},
});
