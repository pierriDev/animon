import type { Navigation, Route } from '../../common'; 

export interface AnimeScreenProps {
  navigation: Navigation;
  route: Route;
}
export interface AnimeScreenViewProps {
  navigation: Navigation;
  animes: any,
  changePage: any,
}