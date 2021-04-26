import React from 'react';
import RouteNav from './componetes/RouteNav';

import { ThemeProvider} from '@material-ui/core/styles'
import theme from './confing/confingMUI'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


function App() {


  return (
     <ApolloProvider client={client}>
    <div>
      
      <ThemeProvider theme={theme}>
 
        <RouteNav/>
       
      </ThemeProvider>

    </div>
    
    </ApolloProvider>
  );
}

export default App;
