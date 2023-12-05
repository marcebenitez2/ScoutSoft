import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ListaEvento({ eventos, setEventoSeleccionado, eventoSeleccionado }) {
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

  useEffect(() => {
    setEventosFiltrados(eventos);
  }, [eventos]);

  function seleccionarEvento(evento) {
    if (eventoSeleccionado === evento) {
      setEventoSeleccionado(null);
      return;
    }
    setEventoSeleccionado(evento);
  }

  function buscador(texto) {
    const eventosFiltrados = eventos.filter((evento) => {
      const titulo = evento.title.toLowerCase();
      const fecha = evento.date.toLowerCase();
      const textoMinuscula = texto.toLowerCase();
      return titulo.includes(textoMinuscula) || fecha.includes(textoMinuscula);
    });
    setEventosFiltrados(eventosFiltrados);
  }

  return (
    <main className="w-1/4 h-full flex flex-col gap-1">
      <input
        className="bg-transparent border rounded-lg px-2 py-1"
        onChange={(e) => buscador(e.target.value)}
        placeholder="Busca por titulo o fecha"
      />
      {eventosFiltrados.map((evento) => (
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
