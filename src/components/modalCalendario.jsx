import React, { useState } from "react";
import { ramas } from "../services/ramas";

function ModalCalendario({
  isOpen,
  toClose,
  fechaSeleccionada,
  eventos,
  seleccionado,
}) {
  if (!isOpen) {
    return null;
  }

  console.log(fechaSeleccionada);
  const [nombre, setNombre] = useState(seleccionado ? seleccionado.nombre : "");
  const [lugar, setLugar] = useState(seleccionado ? seleccionado.lugar : "");
  const [fecha, setFecha] = useState(
    seleccionado ? seleccionado.fecha : fechaSeleccionada
  );
  const [inicio, setInicio] = useState(seleccionado ? seleccionado.inicio : "");
  const [fin, setFin] = useState(seleccionado ? seleccionado.fin : "");
  const [rama, setRama] = useState(seleccionado ? seleccionado.rama : "");
  const [tipo, setTipo] = useState(seleccionado ? seleccionado.tipo : "");
  const [descripcion, setDescripcion] = useState(
    seleccionado ? seleccionado.descripcion : ""
  );

  const guardarCambios = (e) => {
    e.preventDefault();
    console.log(nombre, lugar, fecha, inicio, fin, rama, tipo, descripcion);
  };

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-3/5 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">Agregar evento</h3>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full justify-between gap-2">
                <label className="flex flex-col w-full">
                  Nombre evento
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    type="text"
                    defaultValue={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </label>
                <label className="flex flex-col w-full">
                  Lugar evento
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1 "
                    type="text"
                    defaultValue={lugar}
                    onChange={(e) => setLugar(e.target.value)}
                  />
                </label>
              </div>
              <div className="w-full flex justify-between flex-wrap">
                <label className="flex flex-col">
                  Fecha
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    value={fecha}
                    type="date"
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </label>

                <label className="flex flex-col">
                  Hora inicio
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    defaultValue={inicio}
                    type="time"
                    onChange={(e) => setInicio(e.target.value)}
                  />
                </label>
                <label className="flex flex-col">
                  Hora fin
                  <input
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    defaultValue={fin}
                    type="time"
                    onChange={(e) => setFin(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex w-full gap-2">
                <label className="flex flex-col w-full">
                  Rama
                  <select
                    className="dark:bg-custon-black border rounded-md"
                    defaultValue={rama}
                    onChange={(e)=>setRama(e.target.value)}
                  >
                    {ramas.map((x) => (
                      <option key={x.id}>{x.nombre}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col w-full">
                  Tipo de evento
                  <select
                    className="dark:bg-custon-black border rounded-md"
                    defaultValue={tipo}
                    onChange={(e)=>setTipo(e.target.value)}
                  >
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
                  defaultValue={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
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
