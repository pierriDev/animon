import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import AnimeScreen from './src/screens/animeScreen/AnimeScreen';
import Main from './src/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;