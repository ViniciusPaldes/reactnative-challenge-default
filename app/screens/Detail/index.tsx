import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import { TextBold } from './detail.styles';
import { DetailScreenProps } from './detail.props';

const Detail: React.FC<DetailScreenProps> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[$containerInsets]}>
      <TextBold>Detail</TextBold>
    </View>
  );
};

export default Detail;
