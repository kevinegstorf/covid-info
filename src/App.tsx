import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HompePage from "./pages/Home";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePageWrapper} />
      </Switch>
    </BrowserRouter>
  );
}

const HomePageWrapper = () => {
  return (
    <Layout>
      <HompePage />
    </Layout>
  );
};

export default App;
