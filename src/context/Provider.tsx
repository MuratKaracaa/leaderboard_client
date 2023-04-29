import { useState } from "react";

import Context from "./Context";

const Provider = ({ children }: any) => {
  const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRedirectActionReady, setIsRedirectActionReady] =
    useState<boolean>(false);

  const value = {
    isGlobalLoading,
    setIsGlobalLoading,
    isLoggedIn,
    setIsLoggedIn,
    isRedirectActionReady,
    setIsRedirectActionReady,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
