import { Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
