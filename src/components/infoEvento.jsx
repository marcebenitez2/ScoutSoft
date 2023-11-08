import React from "react";

function InfoEvento({ eventoSeleccionado , isOpen}) {
  return (
    <main className="h-2/6 w-full">
      {eventoSeleccionado ? (
        <div className="w-full h-full border border-neutral-600 rounded-xl animate-fade-right animate-once px-12">
          {" "}
          <h3 className="text-center text-2xl">{eventoSeleccionado.title}</h3>
          <div className="flex w-full">
            <div className="flex flex-col gap-2 w-full">
              <p>Fecha: {eventoSeleccionado.date}</p>
              <p>Hora inicio: {eventoSeleccionado.startTime}</p>
              <p>Hora Fin: {eventoSeleccionado.endTime}</p>
              <p>Lugar: {eventoSeleccionado.location}</p>
            </div>
            <div className="flex flex-col w-full">
              <p>Tipo: {eventoSeleccionado.type}</p>
              <p>Descripcion: {eventoSeleccionado.description}</p>
            </div>
            <button className="h-12 w-64 bg-custon-red" onClick={()=>isOpen(true)}>Editar</button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default InfoEvento;
