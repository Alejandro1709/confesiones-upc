/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useModal from "@/hooks/useModal";

function Modal({ children }: { children: React.ReactNode }) {
  const { isOpen } = useModal();
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-black/60">
      <dialog
        open={isOpen}
        className="h-auto w-[400px] rounded-lg bg-white p-6 shadow-lg"
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
