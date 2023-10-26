import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useEffect } from "react";
import { fetchBD } from "../../services/fetchBD";
import TablaInventario from "../../components/tablaInventario";

function Inventario() {
  const [inventario, setInventario] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

  useEffect(() => {
    fetchBD(setInventario, "http://localhost/inventory.php");
  }, []);

  useEffect(() => {
    console.log(inventario)
  }, [inventario])

  return (
    <main>
      <div className="w-screen min-h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black ">
        <Navbar />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-center dark:text-white">Inventario</h1>
          <TablaInventario inventario={inventario} />
        </div>
      </div>
    </main>
  );
}

export default Inventario;
