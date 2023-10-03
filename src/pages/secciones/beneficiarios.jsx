import React from "react";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { fetchBD } from "../../services/fetchBD";
import { useState } from "react";
import Tabla from "../../components/tabla";

function Beneficiarios() {
  const [beneficiarios, setBeneficiarios] = useState([]);

  useEffect(() => {
    fetchBD(setBeneficiarios, "http://localhost/beneficiaries.php");
  }, []);

  return (
    <main>
      <div
        className={`w-screen min-h-screen dark:bg-custon-black flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden`}
      >
        <Navbar />
        <h1 className="text-3xl text-center dark:text-white">Beneficiarios</h1>
        <button className="absolute right-20 top-20 bg-custon-red px-4 py-3 rounded-xl font-semibold dark:text-white mdn:right-10 mdn:top-16">
          Agregar nuevo
        </button>
        <Tabla beneficiarios={beneficiarios} />
      </div>
    </main>
  );
}

export default Beneficiarios;
