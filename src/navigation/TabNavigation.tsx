/* eslint-disable consistent-return */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useTheme } from 'react-native-paper';

import I18n from '../localisation/I18n';
import Icon from '../components/icon/Icon';
import { Text } from 'native-base';

import {
  AnimeStack,
} from './StackNavigation';

// Tabnavigation
const Tab = createBottomTabNavigator();
const Anime = I18n.t('anime');
const Pay = I18n.t('payments');
const Services = I18n.t('services');
const Settings = I18n.t('settings');

export interface OnLogoutProps {
  onLogout: () => void;
}

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  if (routeName === 'LegalPrivacy') {
    return false;
  }
  return true;
};

const Tabs = ({ onLogout }: OnLogoutProps) => {
  const { colors } : any = useTheme();
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }: any) => (
            <>
            </>
          ),
          tabBarIcon: ({ focused }) => {
            if (route.name === Anime) {
              return (
                <Icon
                  name={focused ? 'HomeActive' : 'Home'}
                  height={24}
                  width={24}
                  color={"white"}
                />
              );
            }
            
          },
          headerShown: false,
          // // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
              paddingTop: 10,
              borderTopWidth: 0,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.4,
              shadowRadius: 6.27,
              position: 'absolute',
              backgroundColor: colors.headerBackground,
              // backgroundColor: "black",
            },
            tabStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            },
            showLabel: true,
          labelStyle: {
            paddingTop: 5,
          },
        })}
      >
        <Tab.Screen
          name={Anime}
          component={AnimeStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default () => {
  const [welcome, setWelcome] = useState(true);

  return <Tabs  onLogout={() => setWelcome(true)} />;
};
