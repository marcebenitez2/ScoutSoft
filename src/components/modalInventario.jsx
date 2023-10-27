import React, { useState } from "react";

function ModalInventario({ isOpen, toClose, seleccionada, inventario }) {

  


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
                <input type="text" />
              </label>
              <label className="flex flex-col">
                Stock
                <input type="text" />
              </label>
              <label className="flex flex-col">
                Disponible
                <input type="text" />
              </label>
              <label className="flex flex-col">
                Descripcion
                <textarea />
              </label>
              <label className="flex flex-col">
                Rama
                <select name="" id="">
                  <option value=""></option>
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
