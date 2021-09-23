// import { TEST_IDS } from '@/constants';
import React from 'react';
import {
  ImageBackground, Pressable, Text, View,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import styles from './TopNavigation.styles';
import type { TopNavigationProps } from './TopNavigation.types';


const TopNavigation = ({
  leftButton,
  leftButtonLabel,
  leftButtonOnPress,
  leftButtonIcon,
  title,
  rightButton,
  rightButtonLabel,
  rightButtonTestID,
  rightButtonOnPress,
  rightButtonIcon,
}: TopNavigationProps) => {
  const { colors } : any = useTheme();
  return(
    <View style={styles(colors).container}>
      {/* eslint-disable-next-line global-require */}
      <View style={styles(colors).bg}>
        <View style={styles(colors).header}>
          <View style={styles(colors).leftContainer}>
            {leftButton && (
              <Pressable
                style={styles(colors).leftButton}
                onPress={leftButtonOnPress}
              >
                {leftButtonIcon}
                {leftButtonLabel !== undefined && (
                  <Text style={styles(colors).leftText}>{leftButtonLabel}</Text>
                )}
              </Pressable>
            )}
          </View>
          <View style={styles(colors).body}>
            <Text
              style={styles(colors).title}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          <View style={styles(colors).rightContainer}>
            {rightButton && (
              <Pressable
                style={styles(colors).rightButton}
                onPress={rightButtonOnPress}
                testID={rightButtonTestID}
              >
                {rightButtonLabel !== undefined && (
                  <Text style={styles(colors).textRight}>{rightButtonLabel}</Text>
                )}
                {rightButtonIcon}
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  )
};

export default TopNavigation;
