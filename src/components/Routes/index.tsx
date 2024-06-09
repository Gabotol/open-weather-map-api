import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "../../pages/Start";
import RoutesWithNotFound from "../PageNotFound";
import HomePage from "../../pages/Home";

const RootRoutes = () => {
  return (
    <Router>
      <RoutesWithNotFound>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/home" element={<HomePage/>} />
      </RoutesWithNotFound>
    </Router>
  );
};

export default RootRoutes;
