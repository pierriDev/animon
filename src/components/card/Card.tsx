import React from 'react';
import {
    Image, Text, TouchableOpacity, View,
  } from 'react-native';
import { useTheme } from 'react-native-paper';
import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
} from 'date-fns';
import I18n from '../../localisation/I18n';

import { CardProps } from './Card.types';
import styles from './Card.styles';

const formatDate = (date: any) => {
  const dateFormat = parseISO(date);
  return( 
    format(
      dateFormat, 
      "dd'/'L'/'y"
    )
  )
}


const Card = ({imageUrl, title,start_date,episodes_count, onPress}: CardProps) => {
  const AnimeLogo = {uri: imageUrl};
  const { colors } : any = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles(colors).card}>
        <View style={styles(colors).imageContainer}>
            <Image source={AnimeLogo} style={styles(colors).image} resizeMode="cover"/>
        </View>
        <View style={styles(colors).textContainer}>
          <Text  style={styles(colors).text}>{title}</Text>
        </View>
        <View style={styles(colors).infoContainer}>
          <View style={styles(colors).releaseDateContainer}>
            <Text style={styles(colors).releaseDate}>{I18n.t('release_date')}{formatDate(start_date)}</Text>
          </View>
          <View style={styles(colors).episodesCountContainer}>
            <Text style={styles(colors).episodesCount}>{I18n.t('episodes_count')}{episodes_count}</Text>
          </View>

        </View>
    </TouchableOpacity>
  );
};

export default Card;
