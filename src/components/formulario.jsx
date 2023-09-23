import React from "react";
import { useState } from "react";
import { postBD } from "../services/postBD";

function Formulario() {
  const [nombreFormulario, setnombreFormulario] = useState("");
  const [telefonoFormulario, settelefonoFormulario] = useState("");
  const [correoFormulario, setcorreoFormulario] = useState("");
  const [mensajeFormulario, setmensajeFormulario] = useState("");

  const enviar = (e) => {
    e.preventDefault()
    const data = {
      nombre: nombreFormulario,
      telefono: telefonoFormulario,
      correo: correoFormulario,
      mensaje: mensajeFormulario,
    };
    let url = "http://localhost/sendMessage.php"
    postBD(data,url);
  };

  return (
    <form className="flex flex-col w-1/2">
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Nombre y Apellido</label>
        <input
          type="text"
          className="h-8 px-4"
          onChange={(e) => setnombreFormulario(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Telefono</label>
        <input
          type="tel"
          className="h-8 px-4"
          onChange={(e) => settelefonoFormulario(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Correo electronico</label>
        <input
          type="email"
          className="h-8 px-4"
          onChange={(e) => setcorreoFormulario(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Mensaje</label>
        <textarea
          className="px-4"
          onChange={(e) => setmensajeFormulario(e.target.value)}
        />
      </div>
      <button
        className="m-auto w-1/3 h-10 bg-black text-white"
        onClick={(e)=>enviar(e)}
      >
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
