import { StyleSheet } from 'react-native';
import { paddingBottom } from 'styled-system';

const styles = (theme: any) => StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: "wrap",
  },
  paginationContainer: {
    flexDirection: 'row',
    width: "100%",
    paddingHorizontal: 1,
    paddingBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;
