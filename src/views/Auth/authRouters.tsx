import React, { FC, Fragment } from "react";
import { Navigate, Route, Routes  } from "react-router-dom";
import RegisterForm from "../../views/Auth/RegisterForm";
import LoginForm from "../../views/Auth/LoginForm";
import { RouterProps } from "../../shared/types/route.type";
import * as AppRoutes from "../../routes/routeConstants/appRoutes";

const authRouter = () => {
	const routes: RouterProps[] = [
		{ exact: true, path: AppRoutes.REGISTER, component: <RegisterForm /> },
		{ exact: true, path: AppRoutes.LOGIN, component: <LoginForm /> },
	];

	console.log("coimming");
	

	return (
		<Routes>
			{routes?.map(({ component, ...routerProps }, index) => (
				<Route {...routerProps} element={component as FC} key={index}/>
			))}
			<Route path={AppRoutes.AUTH} element={<Navigate replace to={AppRoutes.LOGIN}/>}  />
		</Routes>
	);
};

export default authRouter;
