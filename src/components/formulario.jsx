import React from "react";

function Formulario() {
  return (
    <form className="flex flex-col w-1/2">
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Nombre y Apellido</label>
        <input type="text" className="h-8 px-4"/>
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Telefono</label>
        <input type="tel" className="h-8 px-4"/>
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Correo electronico</label>
        <input type="email" className="h-8 px-4"/>
      </div>
      <div className="flex flex-col">
        <label className="text-2xl font-semibold">Mensaje</label>
        <textarea className="px-4"/>
      </div>
    </form>
  ); 
}

export default Formulario;
