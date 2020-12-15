import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchPage from "../components/SearchPage";
import CompanyPage from "../components/CompanyPage";

const PrimaryRoutes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/:companyId" component={CompanyPage} />
    </Switch>
  );
};

export default PrimaryRoutes;
