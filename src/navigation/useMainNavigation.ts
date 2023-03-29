import React, { useEffect, useState } from 'react';

const useMainNavigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return {
        isLoggedIn,
        handleLogout
    }

}

export const optionsScreen = {
    headerMode: 'none',
    headerShown: false,
};

export default useMainNavigation