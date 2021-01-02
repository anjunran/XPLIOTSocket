import React, { createContext } from "react";
import { Authentication } from "../functions/authentication";

const authState = new Authentication();
const authUpdatedStatus = authState.currentLoginState();
export const authContext = createContext(null);
const { Provider } = authContext;
const AuthenticationProvider = ({ children }) => {
  return <Provider value={authUpdatedStatus}>{children}</Provider>;
};
AuthenticationProvider.context = authContext;
export default AuthenticationProvider;
