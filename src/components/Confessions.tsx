/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import Confession from "./Confession";
import axios from "axios";
import type IConfession from "@/types/confession";

function Confessions() {
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
    <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:flex-wrap">
      {confessions.map((confession) => (
        <Confession key={confession.id} confession={confession} />
      ))}
    </div>
  );
}

export default Confessions;
