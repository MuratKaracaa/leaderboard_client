import { useCallback, useContext, useEffect } from "react";

import Context from "./context/Context";

import { addBodyClass, removeBodyClass } from "./common/utils/dom";
import "./common/localization";
import { deleteFromStore } from "./common/utils/localStorage";

import GlobalStyles from "./components/globalStyles";

import Router from "./routes/Router";

import { getRequest } from "./service/httpService";
import serviceUrls from "./service/serviceUrls";

export default function App() {
  const { isGlobalLoading, setIsLoggedIn, setIsRedirectActionReady } =
    useContext(Context);

  const handshake = useCallback(async () => {
    try {
      await getRequest(serviceUrls.USER.HANDSHAKE);
      setIsLoggedIn?.(true);
      setIsRedirectActionReady?.(true);
    } catch (error) {
      setIsLoggedIn?.(false);
      deleteFromStore("AUTH_TOKEN");
      setIsRedirectActionReady?.(true);
    }
  }, []);

  useEffect(() => {
    if (isGlobalLoading) {
      addBodyClass("GLOBAL_LOADING");
    } else {
      removeBodyClass("GLOBAL_LOADING");
    }
  }, [isGlobalLoading]);

  useEffect(() => {
    handshake();
  }, [handshake]);

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}
