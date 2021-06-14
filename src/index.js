//import React from "react";
import { render } from "react-dom";
import Card from "react-bootstrap/Card";
import AddColor from "./components/addcolor";
import InputColor from "./components/InputForm";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,

} from "@apollo/client";
import Color from "./components/colors"



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
     headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': 'M28GcowM84zPTQ0KtxMHj9Q30OQwoO6Z3k95Ap4V9Zr2opLGfT5PRdR7rUwZRkv0',
            },
    uri:'https://demoxyz.hasura.app/v1/graphql',
  })
});

const App = () => (

    <ApolloProvider client={client}>
    <Color/>
    <InputColor/>
      
    </ApolloProvider>
  
);

render(<App />, document.getElementById("root"));