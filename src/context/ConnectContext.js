import { createContext, useState } from "react";

export const ConnectContext = createContext();

export function ConnectProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  //   const handleModal = () => {
  //     setOpenModal(!openModal);
  //   };
  return (
    <ConnectContext.Provider value={{ color: "blue", openModal, setOpenModal }}>
      {children}
    </ConnectContext.Provider>
  );
}
