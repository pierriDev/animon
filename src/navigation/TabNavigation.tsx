import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import I18n from '../localisation/I18n';
import useMainNavigation from './useMainNavigation';
import type { OnLogoutProps } from './Navigation.types';

const Tab = createBottomTabNavigator();

import {
    AnimeStack,
} from './StackNavigation';


const Tabs = ({ onLogout }: OnLogoutProps) => {
  return (
    //STYLE IT LATER
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Anime" component={AnimeStack} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const MainNavigation = () => {
    const {
        isLoggedIn,
        handleLogout
    } = useMainNavigation()

    if(isLoggedIn) {
        return (
            <Tabs onLogout={handleLogout} />
        )
    }else {
        return (
            <></>
        )
    }
}

export default MainNavigation