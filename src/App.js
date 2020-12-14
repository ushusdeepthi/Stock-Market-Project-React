import React from "react";
import { Switch, Route } from "react-router-dom";
import CryptoPage from "./pages/CryptoPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import IndexesPage from "./pages/IndexesPage";
import LandingPage from "./pages/LandingPage";
import MarketsPage from "./pages/MarketsPage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import IndexesDetailPage from "./pages/IndexesDetailPage";
function App() {
  return (
    <>
      <Switch>
        <Route path="/crypto/:id" component={CryptoDetailPage} />
        <Route path="/indexes/:id" component={IndexesDetailPage} />
        <Route path="/currencies">
          <CurrenciesPage />
        </Route>
        <Route path="/crypto">
          <CryptoPage />
        </Route>
        <Route path="/indexes">
          <IndexesPage />
        </Route>
        <Route path="/markets">
          <MarketsPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
