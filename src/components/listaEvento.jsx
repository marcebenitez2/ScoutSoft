import React from "react";
import { useEffect } from "react";

function ListaEvento({ eventos,setEventoSeleccionado,eventoSeleccionado }) {
  function seleccionarEvento(evento) {
    if (eventoSeleccionado === evento) {
      setEventoSeleccionado(null);
      return;
    }
    setEventoSeleccionado(evento);
  }

  return (
    <main className="w-1/4 h-full  rounded-lg flex flex-col gap-1">
      {eventos.map((evento) => (
        <div
          className="min-h-fit flex items-center px-4 border border-neutral-600 py-4 cursor-pointer hover:border-red-600 transition duration-200 rounded-lg"
          onClick={() => seleccionarEvento(evento)}
        >
          <p>
            <span className="text-2xl">• </span>
            <span className="font-semibold">{evento.date}</span>
            <span> - </span>
            <span>{evento.title}</span>
          </p>
        </div>
      ))}
    </main>
  );
}

export default ListaEvento;
