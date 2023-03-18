/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import type IConfession from "@/types/confession";

type ConfessionContextType = {
  confessions: IConfession[];
  setConfessions: (confessions: IConfession[]) => void;
};

export const ConfessionContext = createContext<ConfessionContextType>({
  confessions: [],
  setConfessions: () => {},
});

export function ConfessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [confessions, setConfessions] = useState<IConfession[]>([]);

  const fetchConfessions = async () => {
    try {
      const { data } = await axios.get("/api/confessions");
      setConfessions(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchConfessions();
  }, []);

  return (
    <ConfessionContext.Provider
      value={{
        confessions,
        setConfessions,
      }}
    >
      {children}
    </ConfessionContext.Provider>
  );
}
