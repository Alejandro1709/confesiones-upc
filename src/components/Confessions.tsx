import { confessions } from "@/data";
import Confession from "./Confession";

function Confessions() {
  return (
    <div className="mt-6 flex flex-col place-items-center gap-4 md:grid md:grid-cols-4 md:gap-4">
      {confessions.map((confession) => (
        <Confession key={confession.id} confession={confession} />
      ))}
    </div>
  );
}

export default Confessions;
