import React from 'react';
import {
    Image, Text, TouchableOpacity, View,
  } from 'react-native';
import { useTheme } from 'react-native-paper';

import { PaginationProps } from './Pagination.types';
import styles from './Pagination.styles';


const Pagination = ({text, onPress, current}: PaginationProps) => {
  const { colors } : any = useTheme();
  if(current){
    return (
      <TouchableOpacity onPress={onPress} style={styles(colors).paginationButton}>
        <Text style={styles(colors).paginationTextCurrent}>
          {text}
        </Text>
          
      </TouchableOpacity>
    );
  }else{
    return (
      <TouchableOpacity onPress={onPress} style={styles(colors).paginationButton}>
        <Text style={styles(colors).paginationText}>
          {text}
        </Text>
          
      </TouchableOpacity>
    );
  }
};

export default Pagination;
