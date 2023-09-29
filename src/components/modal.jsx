import React from "react";

function Modal({ isOpen, toClose, seleccionada, texto }) {
  
  const enviarCambios = () =>{
    
  }

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed">
          <div className="w-1/3 h-1/3 bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4">
            <h4 className="text-white text-2xl font-semibold">
              Desea confirmar?
            </h4>
            <p className="text-white text-xl">{texto}</p>
            <div>
              <button onClick={() => toClose(false)}>Cancelar</button>
              <button onClick={() => toClose(false)}>Confirmar</button>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default Modal;
