import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function PlanificacionesGrilla({ archivos }) {
  const [buscador, setBuscador] = useState("");
  const [copia, setCopia] = useState(archivos);

  const filtro = (busqueda) => {
    setBuscador(busqueda);

    if (busqueda === "") {
      setCopia(archivos);
    } else {
      const copia = archivos.filter((archivo) =>
        archivo.title.toLowerCase().includes(busqueda.toLowerCase())
      );
      setCopia(copia);
    }
  };

  useEffect(() => {
    console.log(buscador);
  }, [buscador]);

  return (
    <section className="w-full h-full flex flex-col gap-4">
      <input
        className="w-full bg-transparent border rounded-lg px-3 py-1"
        onChange={(e) => filtro(e.target.value)}
      />
      {archivos ? (
        <div className="w-full h-full grid grid-cols-6 gap-x-4 grid-rows-2">
          {copia.map((archivo) => (
            <a
              className="bg-white flex flex-col text-black justify-center items-center rounded-lg gap-4 hoja"
              href={archivo.url}
            >
              <span className="font-semibold">{archivo.title}</span>
              <span className="font-semibold">{archivo.branch}</span>
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default PlanificacionesGrilla;
