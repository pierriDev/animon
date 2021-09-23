import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AnimeScreen from "../screens/animeScreen/AnimeScreen";
import SingleAnimeScreen from '../screens/singleAnimeScreen/SingleAnimeScreen';

const optionsScreen = {
  headerMode: 'none',
  headerShown: false,
};

export interface SettingsStackProps {
  onLogout: () => void;
  props: any;
}

const Anime = createNativeStackNavigator();
export const AnimeStack = () => (
  <Anime.Navigator
    initialRouteName="Anime"
    screenOptions={{
      headerShown: false,
    }}
    // screenOptions={({ navigation }) => ({
    //   headerRight: () => <OpenDrawerButton navigation={navigation} />,
    // })}
  >
    <Anime.Screen name="Anime" options={optionsScreen}component={AnimeScreen} />
    <Anime.Screen name="SingleAnime" options={optionsScreen} component={SingleAnimeScreen} />
  </Anime.Navigator>
);

// const Settings = createStackNavigator();

// export const SettingsStack = (props: SettingsStackProps) => (
//   <Settings.Navigator
//     initialRouteName="Settings"
//     screenOptions={{ headerShown: false }}
//   >
//     <Settings.Screen
//       name="Settings"
//       initialParams={props}
//       component={SettingsScreen}
//     />
//     <Settings.Screen name="StoryBook" component={StorybookScreen} />
//     <Settings.Screen name="Security" component={SecurityScreen} />
//     <Settings.Screen
//       name="CommunicationAndPreferences"
//       component={CommunicationAndPreferences}
//     />
//     <Settings.Screen
//       name="DisputeTransaction"
//       component={DisputeTransactionScreen}
//     />
//     <Settings.Screen name="CardControls" component={CardControlsScreen} />
//     <Settings.Screen name="LegalPrivacy" component={LegalPrivacyScreen} />
//   </Settings.Navigator>
// );

// const Home = createStackNavigator();
// export const HomeStack = () => (
//   <Home.Navigator initialRouteName="Home">
//     <Home.Screen
//       name="Home"
//       component={WelcomeScreen}
//       options={optionsScreen}
//     />
//   </Home.Navigator>
// );

// const Services = createStackNavigator();
// export const ServicesStack = () => (
//   <Services.Navigator initialRouteName="Services">
//     <Services.Screen
//       name="Services"
//       component={ServicesScreen}
//       options={{ headerShown: false }}
//     />
//     <Services.Screen
//       name="AccountManagement"
//       component={AccountManagement}
//       options={{ headerShown: false }}
//     />
//   </Services.Navigator>
// );

// const LoginAndEnrollment = createStackNavigator();
// export const LoginAndEnrollmentStack = (props: any) => (
//   <LoginAndEnrollment.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//     initialRouteName="Login"
//   >
//     <LoginAndEnrollment.Screen
//       name="Login"
//       component={LoginScreen}
//       initialParams={props}
//     />
//     <LoginAndEnrollment.Screen name="Enrollment" component={EnrollmentScreen} />
//     <LoginAndEnrollment.Screen
//       name="Credentials"
//       component={CredentialsScreen}
//     />
//     <LoginAndEnrollment.Screen
//       name="TermsAndConditions"
//       component={TermsAndConditionsScreen}
//     />
//     <LoginAndEnrollment.Screen
//       name="CreatePasscode"
//       component={CreatePasscodeScreen}
//       initialParams={props}
//     />
//     <LoginAndEnrollment.Screen
//       name="Passcode"
//       component={PasscodeScreen}
//       initialParams={props}
//     />
//     <LoginAndEnrollment.Screen
//       name="Inactive"
//       component={InactiveScreen}
//       initialParams={props}
//     />
//   </LoginAndEnrollment.Navigator>
// );
