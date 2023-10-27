import React, { useState } from "react";
import { ramas } from "../services/ramas";
import { StepDescription } from "@chakra-ui/react";

function ModalInventario({ isOpen, toClose, seleccionada, inventario }) {
  const [nombre, setNombre] = useState(
    seleccionada ? seleccionada.name : null
  );
  const [stock, setStock] = useState(seleccionada ? seleccionada.stock : null);
  const [disponible, setDisponible] = useState(
    seleccionada ? seleccionada.available : null
  );
  const [descripcion, setDescripcion] = useState(
    seleccionada ? seleccionada.description : null
  );
  const [rama, setRama] = useState(seleccionada ? seleccionada.branch : null);

  console.log(seleccionada);
  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-1/2 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">
              {seleccionada ? "Editar Item" : "Agregar nuevo"}
            </h3>
            <div className="w-full flex flex-wrap">
              <label className="flex flex-col">
                Nombre
                <input
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
              <label className="flex flex-col">
                Stock
                <input
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </label>
              <label className="flex flex-col">
                Disponible
                <input
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                  type="number"
                  value={seleccionada.available}
                  onChange={(e) => setDisponible(e.target.value)}
                />
              </label>
              <label className="flex flex-col">
                Descripcion
                <textarea
                  className="dark:bg-custon-black border rounded-md"
                  onChange={(e) => StepDescription(e.target.value)}
                  value={seleccionada.description}
                />
              </label>
              <label className="flex flex-col">
                Rama
                <select
                  className="dark:bg-custon-black border"
                  onChange={(e) => setRama(e.target.value)}
                >
                  {ramas.map((x) => (
                    <option key={x.id}>{x.nombre}</option>
                  ))}
                </select>
              </label>
            </div>
            <button onClick={() => toClose(false)}>Cerrar modal</button>
          </form>
        </section>
      ) : null}
    </main>
  );
}

export default ModalInventario;
