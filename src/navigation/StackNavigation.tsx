import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AnimeScreen from '../screens/animeScreen/AnimeScreen';

import { optionsScreen } from './useMainNavigation';

const Anime = createNativeStackNavigator();
export const AnimeStack = () => {
    return (
        <Anime.Navigator
            initialRouteName='Anime'
            screenOptions={optionsScreen}
        >
            <Anime.Screen name='Anime' component={AnimeScreen} />
        </Anime.Navigator>
    )
}