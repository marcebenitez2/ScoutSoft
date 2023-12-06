import React from "react";
import { ramas } from "../services/ramas";
import { useState } from "react";
import { postPlanificacionesFireBase } from "../services/fetchFirebase";
import { postBD } from "../services/postBD";

function ModalConsejo({ isOpen, toClose }) {
  if (!isOpen) {
    return null;
  }
  
  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [titulo, setTitulo] = useState("");
  const [lugar, setLugar] = useState("");
  const [rama, setRama] = useState("Todos");
  const [archivo, setArchivo] = useState(null);

  const guardarCambios = (e) => {
    e.preventDefault();

    if (!fecha || !horaInicio || !titulo || !lugar || !rama) {
      alert("Rellena todos los campos");
      return;
    }

    // if (archivo) {
    //   postPlanificacionesFireBase(archivo)
    //     .then((url) => {
    //       console.log(url);
    //       const item = {
    //         fecha: fecha,
    //         horaInicio: horaInicio,
    //         titulo: titulo,
    //         lugar: lugar,
    //         rama: rama,
    //         archivo: url,
    //       };
    //     })
    //     .catch((error) => {
    //       console.error("Error al enviar a Firebase Storage:", error);
    //     });
    // }

    const item = {
      fecha: fecha,
      horaInicio: horaInicio,
      titulo: titulo,
      lugar: lugar,
      rama: rama,
      archivo: archivo,
    };

    // console.log(item);

    postBD(item, "http://localhost/addadvice.php");
    toClose(false);
    window.location.reload();
  };

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms] justify-between">
            <h3 className="text-3xl">Agregar proximo consejo</h3>
            <div className="flex flex-col w-full gap-4 ">
              <div className="flex w-full justify-between gap-6">
                <label className="flex flex-col w-full">
                  Fecha
                  <input
                    onChange={(e) => setFecha(e.target.value)}
                    type="date"
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                  />
                </label>
                <label className="flex flex-col w-full">
                  Hora inicio
                  <input
                    onChange={(e) => setHoraInicio(e.target.value)}
                    type="time"
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                Titulo
                <input
                  onChange={(e) => setTitulo(e.target.value)}
                  type="text"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                />
              </label>
              <label className="flex flex-col">
                Lugar
                <input
                  onChange={(e) => setLugar(e.target.value)}
                  type="text"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                />
              </label>
              <div className="flex justify-between w-full gap-6">
                <label className="w-full flex flex-col">
                  Rama{" "}
                  <select
                    className="bg-custon-black border rounded-md"
                    onChange={(e) => setRama(e.target.value)}
                  >
                    {ramas.map((x) => (
                      <option key={x.id}>{x.nombre}</option>
                    ))}
                  </select>
                </label>
                <label className="w-full flex flex-col">
                  Archivo{" "}
                  <input
                    type="file"
                    onChange={(e) => setArchivo(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={() => toClose(false)}
                className="w-1/5 h-10 dark:text-white mdn:w-2/5"
              >
                Cancelar
              </button>
              <button
                className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5 text-white"
                onClick={(e) => guardarCambios(e)}
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </main>
  );
}

export default ModalConsejo;
