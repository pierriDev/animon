import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { useTheme } from 'react-native-paper';
// import Pagination, {Icon, Dot} from 'react-native-pagination'; //{Icon,Dot} also available

import { SingleAnimeViewTypes } from './SingleAnimeScreen.types';
import styles from './SingleAnimeScreen.styles';

const SingleAnimeScreenView = ({anime}: SingleAnimeViewTypes) => {
    const { colors } : any = useTheme();
    const AnimeBanner = {uri: anime.banner_image};
 

  return (
    <ScrollView>
        <View style={styles(colors).bannerContainer}>
          <Image source={AnimeBanner} style={styles(colors).banner} resizeMode="cover"/>
        </View>
    </ScrollView>
  );
  
  
};

export default SingleAnimeScreenView;
