import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";

function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <main>
      <div
        className={`w-screen min-h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black `}
      >
        <Navbar />
        <div
          className={`w-full h-full ${
            modalOpen ? "blur" : ""
          } flex flex-col gap-4`}
        >
          <h1 className="text-3xl text-center dark:text-white">Calendario</h1>
          <div className="flex">
          
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calendario;
