import { useContext } from "react";

import { ConnectContext } from "../context/ConnectContext";

export const useConnect = () => {
  const context = useContext(ConnectContext);

  if (context === undefined) {
    throw new Error("use the context within the ConnectContext");
  }

  return context;
};
