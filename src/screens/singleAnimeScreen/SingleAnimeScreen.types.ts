import type { Navigation, Route } from '../../common'; 

export interface SingleAnimeScreenTypes {
  navigation: Navigation;
  route: Route;
}

export interface SingleAnimeViewTypes {
  anime: any;
}



export type StoredTokenStatusType = 'unverified' | 'nonexistent' | 'valid' | 'expired';
