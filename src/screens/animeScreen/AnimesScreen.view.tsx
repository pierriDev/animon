import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import { useTheme } from 'react-native-paper';

import { AnimeScreenViewProps } from './AnimeScreen.types';
import Card from '../../components/card/Card';
import Icon from '../../components/icon/Icon';
import Pagination from '../../components/pagination/Pagination';
import styles from './AnimeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimeScreenView = ({animes, navigation, changePage}: AnimeScreenViewProps) => {
  const current_page = animes.current_page
  const last_page = animes.last_page
  const { colors } : any = useTheme();
  const animesMap = animes.documents; 
  const pagination = [];

  pagination.push(
    <Pagination
      current={false} 
      text={
        <Icon
          name={'ChevronLeft'}
          height={16}
          width={16} 
          color={"black"}
        />
      }
      onPress={() => changePage(1)}
    />
  );

  pagination.push(
    <Pagination
      current={false} 
      text={
        <Icon
          name={'ChevronLeft'}
          height={16}
          width={16} 
          color={"black"}
        />
      }
      onPress={() => changePage(current_page-1)}
    />
  );
  
  if(current_page==1){
    for (let i = current_page; i <= (current_page+4); i++) {
      if(i==current_page){
        pagination.push(<Pagination current={true} text={i} onPress={() => changePage(i)}/>);
      }else{
        pagination.push(<Pagination current={false} text={i} onPress={() => changePage(i)}/>);
      }
    }
  }else if(current_page==2){
    for (let i = (current_page-1); i <= (current_page+3); i++) {
      if(i==current_page){
        pagination.push(<Pagination current={true} text={i} onPress={() => changePage(i)}/>);
      }else{
        pagination.push(<Pagination current={false} text={i} onPress={() => changePage(i)}/>);
      }
    }
  }else if(current_page==(last_page-1)){
    for (let i = (current_page-3); i <= (current_page+1); i++) {
      if(i==current_page){
        pagination.push(<Pagination current={true} text={i} onPress={() => changePage(i)}/>);
      }else{
        pagination.push(<Pagination current={false} text={i} onPress={() => changePage(i)}/>);
      }
    }
  }else if(current_page==last_page){
    for (let i = (current_page-4); i <= current_page; i++) {
      if(i==current_page){
        pagination.push(<Pagination current={true} text={i} onPress={() => changePage(i)}/>);
      }else{
        pagination.push(<Pagination current={false} text={i} onPress={() => changePage(i)}/>);
      }
    }
  }else{
    for (let i = (current_page-2); i <= (current_page+2); i++) {
      if(i==current_page){
        pagination.push(<Pagination current={true} text={i} onPress={() => changePage(i)}/>);
      }else{
        pagination.push(<Pagination current={false} text={i} onPress={() => changePage(i)}/>);
      }
    }
  }
  

  pagination.push(
    <Pagination
      current={false} 
      text={
        <Icon
          name={'ChevronRight'}
          height={16}
          width={16} 
          color={"black"}
        />
      }
      onPress={() => changePage(current_page+1)}
    />
  );

  pagination.push(
    <Pagination
      current={false} 
      text={
        <Icon
          name={'ChevronRight'}
          height={16}
          width={16} 
          color={"black"}
        />
      }
      onPress={() => changePage(last_page)}
    />
  );
  const renderItem = ({anime}: any) => (
    <Card 
      imageUrl= {anime.cover_image}
      title = {anime.titles.en}
      start_date = {anime.start_date}
      episodes_count = {anime.episodes_count}
      anime = {anime}
      onPress = {() => navigation.navigate("SingleAnime", {
        anime: anime,
      })}
    />
  )
  // () => changePage(2); 
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles(colors).cardContainer}>
          {animesMap.map((anime: any) =>(
              <Card 
                imageUrl= {anime.cover_image}
                title = {anime.titles.en}
                start_date = {anime.start_date}
                episodes_count = {anime.episodes_count}
                anime = {anime}
                onPress = {() => navigation.navigate("SingleAnime", {
                  anime: anime,
                })}
              />
          ))}
        </View>
        <View style={styles(colors).paginationContainer}>    
          {pagination}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimeScreenView;
