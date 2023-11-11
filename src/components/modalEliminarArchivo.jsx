import React from "react";

function ModalEliminarArchivo({ isOpen, toClose, archivos }) {
  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms] gap-4">
            <h1 className="text-2xl">¿Que desea eliminar?</h1>
            <div className="w-full h-full flex flex-col gap-4">
              {archivos.map((archivo) => (
                <div className="flex gap-3">
                  <input type="checkbox" className="w-6" />
                  <p className="text-xl">{archivo.title}</p>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center">
              <button
                onClick={() => toClose(false)}
                className="w-1/5 h-10 dark:text-white mdn:w-2/5"
              >
                Cancelar
              </button>
              <button className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5 text-white">
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </main>
  );
}

export default ModalEliminarArchivo;
