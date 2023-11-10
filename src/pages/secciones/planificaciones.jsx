import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import PlanificacionesGrilla from "../../components/planificacionesGrilla";
import { fetchBD } from "../../services/fetchBD";
import ModalAgregarArchivo from "../../components/modalAgregarArchivo";

function Planificaciones() {
  const [modalOpen, setModalOpen] = useState(false);
  const [archivos, setArchivos] = useState(null);

  useEffect(() => {
    fetchBD(setArchivos, "http://localhost/plans.php");
  }, []);

  return (
    <main className='className="w-screen h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black dark:text-white'>
      <Navbar />
      <div
        className={`w-full h-full ${
          modalOpen ? "blur" : ""
        } flex flex-col gap-4`}
      >
        <h1 className="text-3xl text-center dark:text-white">
          Planificaciones
        </h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-custon-red w-fit px-4 py-1 absolute right-20"
        >
          Agregar
        </button>
        {archivos ? <PlanificacionesGrilla archivos={archivos} /> : null}
      </div>
      <ModalAgregarArchivo isOpen={modalOpen} toClose={setModalOpen} />
    </main>
  );
}

export default Planificaciones;
