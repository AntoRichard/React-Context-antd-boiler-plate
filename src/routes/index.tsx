import React, { FC, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import * as appRoutes from "./routeConstants/appRoutes";
import AuthWrapper from "../views/Auth/AuthWrapper";
import isAuthenticated from "../shared/components/HOC/requireAuth";
import Home from "../views/Home";
import { RouterProps } from "../shared/types/route.type";
import AppComponents from "../views/AppComponents";

const AppRoutes = () => {
  let routes: RouterProps[] = [
    // { exact: false, path: appRoutes.AUTH, component: <AuthWrapper /> },
    { exact: true, path: appRoutes.HOME, component: isAuthenticated(Home) },
  ];
  // if (Boolean(process.env.REACT_APP_UNDER_DEVELOPMENT)) {
  //   routes.push({
  //     exact: false,
  //     path: appRoutes.APP_COMPONENTS,
  //     component: AppComponents,
  //   });
  // }

  return (
    <div>
      <Router>
        <Routes>
          {routes?.map((route, index) => (
            <Route key={index} {...route} element={route.component} />
          ))}
          <Route path="*" element={<Navigate replace to={appRoutes.HOME} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
