import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RippleButton from './presentation/components/shared/RippleButton';
import {globalColors} from './presentation/theme/theme';
import {Toaster, ToasterHelper} from 'react-native-customizable-toast';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {
  CustomToaster,
  CustomToasterHelper,
} from './presentation/components/shared/CustomizableToast';
import DeviceInfo from 'react-native-device-info';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleClick = () => {
    ToasterHelper.show({
      text: 'lorem ipsum',
      type: 'success',
      timeout: 5000,
    });
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    };

    requestUserPermission();

    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token);
      });

    return messaging().onTokenRefresh(token => {
      console.log('New FCM Token:', token);
    });
  }, []);

  console.log('Device Info : ', DeviceInfo.getBundleId());

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Toaster />
        <CustomToaster />
        <Text
          style={{
            backgroundColor: 'lightblue',
            fontSize: 19,
            padding: 10,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          Test push notifications
        </Text>
        <RippleButton onPress={handleClick} color="transparent">
          <>
            <Text
              style={{
                color: globalColors.dark,
                textAlign: 'center',
                padding: 10,
              }}>
              Button Click
            </Text>
          </>
        </RippleButton>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
