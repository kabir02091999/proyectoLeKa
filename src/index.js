import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //@ts-ignore
  link: createUploadLink({
    uri: "https://165.227.215.17/graphql",
  }),
});

ReactDOM.render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  
  document.getElementById('root')
);


