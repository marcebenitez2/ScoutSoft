import React from "react";
import { fetchBD } from "../services/fetchBD";
import { useState } from "react";
import { useEffect } from "react";
import { ramas } from "../services/ramas";

function ModalAgregarArchivo({ isOpen, toClose }) {
  if (!isOpen) {
    return null;
  }

  const [eventos, setEventos] = useState(null);
  useEffect(() => {
    fetchBD(setEventos, "http://localhost/calendary.php");
  }, []);

  useEffect(() => {
    console.log(eventos);
  }, [eventos]);

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">Agregar archivo</h3>
            <div className="w-full h-full flex flex-col gap-4">
              <label className="flex flex-col">
                Titulo
                <input
                  type="text"
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                />
              </label>
              {eventos ? (
                <label className="flex flex-col">
                  Evento
                  <select className="dark:bg-custon-black border rounded-md px-2 py-1">
                    <option>Ninguna</option>
                    {eventos.map((evento) => (
                      <option>{evento.title}</option>
                    ))}
                  </select>
                </label>
              ) : null}
              <label className="flex flex-col">
                Rama
                <select className="dark:bg-custon-black border rounded-md px-2 py-1">
                  {ramas.map((rama) => (
                    <option>{rama.nombre}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col">
                Archivo
                <input type="file" />
              </label>
              <div className="w-full flex justify-center">
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
            </div>
          </form>
        </section>
      ) : null}
    </main>
  );
}

export default ModalAgregarArchivo;
