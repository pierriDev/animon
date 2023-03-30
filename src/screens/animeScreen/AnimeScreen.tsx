import React from "react";
import { Text, View } from "react-native";

import useAnimeScreen from "./useAnimeScreen";

const AnimeScreen = () => {
    const {
        isLoading,
        perPage,
        actualPage,
        animesData,
    } = useAnimeScreen();
    return (
        <View>
            <Text>Aqui</Text>
        </View>
    )
}

export default AnimeScreen