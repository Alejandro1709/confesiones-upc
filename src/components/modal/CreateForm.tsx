import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useModal from "@/hooks/useModal";
import axios from "axios";

function CreateForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { handleClose } = useModal();

  const createConfession = async () => {
    if (titleRef.current && contentRef.current) {
      setIsLoading(true);
      const title = titleRef.current.value;
      const content = contentRef.current.value;
      await axios.post("/api/confessions", {
        title,
        content,
      });
    }
  };

  const { mutate } = useMutation(createConfession, {
    onSuccess: () => {
      setIsLoading(false);
      handleClose();
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Confiesanos algo...</h1>
        <p className="text-gray-500">
          Confiesanos cualquier cosa que pase dentro de la universidad... Sin
          nombres ni apellidos.
        </p>
      </header>
      <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          name="title"
          className="rounded-md border p-2"
          type="text"
          placeholder="Título de la confesión"
          ref={titleRef}
        />
        <textarea
          name="content"
          className="rounded-md border p-2"
          placeholder="Confieso que en la universidad..."
          ref={contentRef}
        ></textarea>
        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
          disabled={isLoading}
        >
          Confesar
        </button>
        <button
          type="button"
          className="mt-1 w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
          onClick={handleClose}
        >
          Cancelar
        </button>
      </form>
    </>
  );
}

export default CreateForm;
