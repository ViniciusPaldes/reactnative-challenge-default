import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import { DetailButton } from './movies.styles';
import { MoviesScreenProps } from './movies.props';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigators/AppNavigator';

const Movies: React.FC<MoviesScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const isDarkMode = useColorScheme() === 'dark';
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigate = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={[$containerInsets]}>
      <DetailButton title="Go to Detail" onPress={navigate} />
    </View>
  );
};

export default Movies;
