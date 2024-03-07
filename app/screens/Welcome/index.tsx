import React from 'react';
import {Button, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import {WelcomeScreenProps} from './welcome.props';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { AppStackParamList } from '../../navigators/AppNavigator';

const Welcome: React.FC<WelcomeScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const isDarkMode = useColorScheme() === 'dark';
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigate = () => {
    navigation.navigate('Movies');
  };

  return (
    <View style={[$containerInsets]}>
      <Button title="Go to Movies" onPress={navigate} />
    </View>
  );
};

export default Welcome;
