import { useRouter } from "next/router";
import useModal from "@/hooks/useModal";
import useConfessions from "@/hooks/useConfessions";

function ConfessionDetail() {
  const { handleClose } = useModal();

  const router = useRouter();

  const { id } = router.query;

  const { confessions } = useConfessions();

  const confession = confessions.find((confession) => confession.id === id);

  if (!confession) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col">
        <h1 className="overflow-hidden text-ellipsis text-2xl font-semibold">
          Confesión {confession.id.slice(0, 6)}: {confession.title}
        </h1>
      </header>
      <p className="text-md rounded-md bg-slate-200 p-2 text-gray-500">
        {confession.content}
      </p>
      <footer>
        <button
          type="button"
          className="mt-1 w-full rounded-md bg-slate-400 p-2 text-white hover:bg-slate-600"
          onClick={handleClose}
        >
          Cerrar
        </button>
      </footer>
    </div>
  );
}

export default ConfessionDetail;
