import { Dispatch, SetStateAction, createContext } from "react";

type ContextType = {
  isGlobalLoading?: boolean;
  setIsGlobalLoading?: Dispatch<SetStateAction<boolean>>;
  isLoggedIn?: boolean;
  setIsLoggedIn?: Dispatch<SetStateAction<boolean>>;
  isRedirectActionReady?: boolean;
  setIsRedirectActionReady?: Dispatch<SetStateAction<boolean>>;
};

const Context = createContext<ContextType>({});

export default Context;
