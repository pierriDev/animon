import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
// import Pagination, {Icon, Dot} from 'react-native-pagination'; //{Icon,Dot} also available

import {useAllAnime} from '../../api/anime';
import AnimeScreenView from './AnimesScreen.view';
import { AnimeScreenProps } from './AnimeScreen.types';
import TopNavigation from '../../components/navigation/TopNavigation';

const AnimeScreen = ({navigation}: AnimeScreenProps) => {
  const [animes, setAnimes] = useState('loading')
  const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const mutator = useAllAnime();

  useEffect(() => {
    (async () => {
      setAnimes('loading')
      const response = await mutator.mutateAsync({  
        perPage,
        pageNumber,
      });
      const { status, data } = response; 
      if(data) {
        setAnimes(data)
      }
    })();
  }, [pageNumber]);

  if(animes != 'loading'){
    console.log(pageNumber)
    return (
      <>
        <TopNavigation
          rightButton
          rightButtonOnPress={() => {}}
          title={"Animes"} 
        />
        <View  style={{flex: 1}}>
          <AnimeScreenView
            navigation={navigation}
            animes={animes}
            changePage={setPageNumber}
          />
        </View>
      </>
    );
  }else {
    return (
        <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Caiu aqui</Text>
        </View>
    );

  }
  
};

export default AnimeScreen;
