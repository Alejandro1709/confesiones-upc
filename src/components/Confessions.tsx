import { useId } from "react";
import Confession from "./Confession";
import useConfessions from "@/hooks/useConfessions";

function Confessions() {
  const id = useId();

  const { confessions } = useConfessions();

  return (
    <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:flex-wrap">
      {confessions.map((confession) => (
        <Confession key={`${confession.id}##${id}`} confession={confession} />
      ))}
    </div>
  );
}

export default Confessions;
