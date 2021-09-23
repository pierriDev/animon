import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import getContainerHeight from './TopNavigation.functions';

const styles = (theme: any) => StyleSheet.create({
  container: {
    height: getContainerHeight(getStatusBarHeight()),
    width: '100%',
  },
  bg: {
    width: '100%',
    backgroundColor: theme.headerBackground
  },
  header: {
    height: getContainerHeight(getStatusBarHeight()),
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
  },
  icon: {
    color: '#fff',
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  leftButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 15,
  },
  leftText: {
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontSize: 17,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  textRight: {
    textAlign: 'right',
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontSize: 17,
  },
});

export default styles;
