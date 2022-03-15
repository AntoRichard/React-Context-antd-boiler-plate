import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import * as appRoutes from "../../../routes/routeConstants/appRoutes";
import RestrictAccess from "../RestrictedAccess";

const requireAuth = (Component: any, allowedRoles?: any) => {
  const Authentication = () => {
      
    const { authenticated } = AuthContext();
    // const navigate = useNavigate();
    
    useEffect(() => {
      console.log(authenticated);
    //   if (!authenticated && history.location.pathname !== appRoutes.LOGIN) {
    //     return navigate(appRoutes.LOGIN);
    //   }
    }, []);

    // if (allowedRoles.length) {
    //   const { user } = props;
    //   return (allowedRoles ?? []).includes(user.role) ? (
    //     <Component {...props} />
    //   ) : (
    //     <RestrictAccess />
    //   );
    // }
    return <Component />;
  };
  return Authentication;
};

export const isAuthenticated = (component: any) => requireAuth(component)();

export default isAuthenticated;
