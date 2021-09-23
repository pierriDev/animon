import { StyleSheet } from 'react-native';
import { alignSelf, marginTop } from 'styled-system';

const styles = (theme: any) => StyleSheet.create({
  card:{
    width: "45%",
    marginHorizontal: "2.5%",
    marginVertical: 50,
    backgroundColor: theme.darkPurple,
    paddingBottom: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textContainer: {
    width: "100%",
    paddingTop: 10,
    height: 120,
    alignSelf: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
  infoContainer:{
    paddingHorizontal: 10
  },
  releaseDateContainer:{
    width: "100%",
    marginTop: 15,
  },
  releaseDate:{
    color: "white",
    fontSize: 12
  },
  episodesCountContainer:{
    width: "100%",
    marginTop: 5,
  },
  episodesCount:{
    color: "white",
    fontSize: 12
  },

});

export default styles;
 