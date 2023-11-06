import React from "react";
import { ramas } from "../services/ramas";

function ModalCalendario({ isOpen, toClose, fecha, eventos }) {
  if (!isOpen) {
    return null;
  }
  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">Agregar evento</h3>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full justify-between gap-2">
                <label className="flex flex-col w-full">
                  Nombre evento
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    type="text"
                  />
                </label>
                <label className="flex flex-col w-full">
                  Lugar evento
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1 "
                    type="text"
                  />
                </label>
              </div>
              <div className="w-full flex justify-between">
                <label className="flex flex-col">
                  Fecha
                  <input className="dark:bg-custon-black border rounded-md px-2 py-1 " />
                </label>
                <label className="flex flex-col">
                  Hora inicio
                  <input className="dark:bg-custon-black border rounded-md px-2 py-1 " />
                </label>
                <label className="flex flex-col">
                  Hora fin
                  <input className="dark:bg-custon-black border rounded-md px-2 py-1 " />
                </label>
              </div>
              <div className="flex w-full gap-2">
                <label className="flex flex-col w-full">
                  Rama
                  <select className="dark:bg-custon-black border rounded-md">
                    {ramas.map((x) => (
                      <option key={x.id}>{x.nombre}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col w-full">
                  Tipo de evento
                  <select className="dark:bg-custon-black border rounded-md">
                    <option>Evento</option>
                    <option>Salida</option>
                    <option>Consejo</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col">
                Descripcion
                <textarea
                  className="dark:bg-custon-black border rounded-md h-32 "
                  style={{ resize: "none" }}
                />
              </label>
              <div className="flex w-full justify-center">
                <button
                  className="w-1/5 h-10 dark:text-white mdn:w-2/5"
                  onClick={() => toClose(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5 text-white"
                  onClick={(e) => guardarCambios(e)}
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </form>
        </section>
      ) : null}
    </main>
  );
}

export default ModalCalendario;
