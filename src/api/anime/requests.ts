import {Platform} from 'react-native';
import fetch from '../fetch';
import {allAnimeType} from './types'
import {searchAnimeType} from './types'

export const getAllAnime = ({perPage, pageNumber}: allAnimeType) => fetch(`anime?page=${pageNumber}&per_page=${perPage}`).then((result) => result.json());
export const searchAnime = ({title}: searchAnimeType) => fetch(`anime?title=${title}`).then((result) => result.json());