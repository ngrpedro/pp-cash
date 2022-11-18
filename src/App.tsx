import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
