import { StyleSheet } from 'react-native';
import { alignSelf, marginTop } from 'styled-system';

const styles = (theme: any) => StyleSheet.create({
  paginationButton: {
    padding: 10,
  },
  paginationButtonCurrent: {
    padding: 10,
  },
  paginationTextCurrent:{
    color: theme.headerBackground,
    fontSize: 18,
  },
  paginationText: {
    fontSize: 18,
  }

});

export default styles;
 