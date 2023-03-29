import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import MainNavigation from './navigation/TabNavigation';

const Main = () => {
    return (
        <>
            <StatusBar barStyle="light-content" hidden={false} />
            <MainNavigation />
        </>
    )
}

export default Main