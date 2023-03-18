function CreateForm() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Confiesanos algo...</h1>
        <p className="text-gray-500">
          Confiesanos cualquier cosa que pase dentro de la universidad... Sin
          nombres ni apellidos.
        </p>
      </header>
      <form className="mt-4 flex flex-col gap-2">
        <input
          className="rounded-md border p-2"
          type="text"
          placeholder="Título de la confesión"
        />
        <textarea
          className="rounded-md border p-2"
          placeholder="Confieso que en la universidad..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Confesar
        </button>
        <button
          type="button"
          className="mt-1 w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Cancelar
        </button>
      </form>
    </>
  );
}

export default CreateForm;
