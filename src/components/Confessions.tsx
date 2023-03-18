import { confessions } from "@/data";
import Confession from "./Confession";

function Confessions() {
  return (
    <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:flex-wrap">
      {confessions.map((confession) => (
        <Confession key={confession.id} confession={confession} />
      ))}
    </div>
  );
}

export default Confessions;
