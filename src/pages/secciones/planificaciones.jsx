import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import PlanificacionesGrilla from "../../components/planificacionesGrilla";
import { useEffect } from "react";
import { fetchPlanificacionesFireBase } from "../../services/fetchFirebase";
import { fetchBD } from "../../services/fetchBD";

function Planificaciones() {
  const [modalOpen, setModalOpen] = useState(false);
  const [archivos, setArchivos] = useState(null);


  useEffect(() => {
    fetchBD(setArchivos,"http://localhost/plans.php")
    fetchPlanificacionesFireBase()
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
        <div className="w-full h-full">
          <PlanificacionesGrilla archivos={archivos} />
        </div>
      </div>
    </main>
  );
}

export default Planificaciones;
