import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import InfoEvento from "../../components/infoEvento";
import ListaEvento from "../../components/listaEvento";
import Calendar from "react-calendar";
import "../../calendario.css";
import ModalCalendario from "../../components/modalCalendario";

function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  const [fecha, setFecha] = useState(new Date());

  function abrirModal(value) {
    setFecha(value);
    setModalOpen(true);
  }

  return (
    <main className="w-screen h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black dark:text-white ">
      <Navbar />
      <div
        className={`w-full h-full ${
          modalOpen ? "blur" : ""
        } flex flex-col gap-4`}
      >
        <h1 className="text-3xl text-center dark:text-white">Calendario</h1>
        <div className="flex w-full h-full">
          <div className="flex flex-col h-full w-full justify-between">
            <div className="w-full h-full flex items-center justify-center">
              <Calendar onClickDay={(value) => abrirModal(value)} />
            </div>
            <InfoEvento />
          </div>
          <ListaEvento />
        </div>
      </div>
      <ModalCalendario
        seleccionado={seleccionada}
        isOpen={modalOpen}
        toClose={setModalOpen}
        fechaSeleccionada={fecha}
        eventos={eventos}
      />
    </main>
  );
}

export default Calendario;
