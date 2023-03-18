/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
