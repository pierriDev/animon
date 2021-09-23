import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
// import Pagination, {Icon, Dot} from 'react-native-pagination'; //{Icon,Dot} also available

import { SingleAnimeScreenTypes } from './SingleAnimeScreen.types';
import SingleAnimeScreenView from './SingleAnimeScreen.view';
import TopNavigation from '../../components/navigation/TopNavigation';
import Icon from '../../components/icon/Icon';
import I18n from '../../localisation/I18n';

const SingleAnimeScreen = ({navigation, route}: SingleAnimeScreenTypes) => {
  const {anime} = route.params;
  console.log(anime)
  return (
    <>
      <TopNavigation
        leftButton
        leftButtonLabel={I18n.t('back')}
        leftButtonIcon={<Icon name="ChevronLeft" color="#fff" width={24} height={24} />}
        leftButtonOnPress={() => navigation.goBack()}
        title={anime.titles.en}
      />
      <View >
        <SingleAnimeScreenView
          anime={anime}
        />
      </View>
    </>
  );
  
  
};

export default SingleAnimeScreen;
