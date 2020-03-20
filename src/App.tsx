import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HompePage from "./pages/Home";
import Layout from "./Layout";
import CSV from "pages/CSV";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
          <Route exact path="/csv" component={CSV} />
        </Switch>
      </div>
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
