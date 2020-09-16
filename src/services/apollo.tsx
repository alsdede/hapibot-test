import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,

} from "@apollo/client";


export const link = createHttpLink({
  uri: "https://hapi-interview-api.herokuapp.com/"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
