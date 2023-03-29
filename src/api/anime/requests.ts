import {Platform} from 'react-native';
import fetch from '../fetch';
import {allAnimeType} from './types'
// import {searchAnimeType} from './types' 

export const getAllAnime = ({perPage, actualPage}: allAnimeType) => fetch(`anime?page=${actualPage}&per_page=${perPage}`).then((result) => result.json());