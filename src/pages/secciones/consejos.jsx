import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useEffect } from "react";
import { fetchBD } from "../../services/fetchBD";
import ModalConsejo from "../../components/modalConsejo";
import { HiUserGroup } from "react-icons/hi";

function Consejos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consejos, setConsejos] = useState([]);

  useEffect(() => {
    fetchBD(setConsejos, "http://localhost/advices.php");
  }, []);

  useEffect(() => {
    console.log(consejos);
  }, [consejos]);

  return (
    <main className='className="w-screen h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black dark:text-white'>
      <Navbar />
      <div
        className={`w-full h-full ${
          modalOpen ? "blur" : ""
        } flex flex-col gap-4`}
      >
        <h1 className="text-3xl text-center dark:text-white">Consejos</h1>
        <div className="flex absolute right-20 ">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-custon-red px-4 py-1 "
          >
            Agregar
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 px-56">
          {consejos.map((x) => (
            <div
              className="flex w-full h-20 bg-custon-red rounded-xl px-8 py-2 gap-10"
              key={x.id}
            >
              <div className="h-full flex items-center">
                <HiUserGroup size={50} />
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="text-xl font-semibold">{x.titulo}</h3>
                  <span>{x.rama}</span>
                  <span>{x.fecha}</span>
                </div>
                <div className="w-full flex gap-10">
                  <span>{x.lugar}</span>
                  <span>{x.horaInicio}</span>
                  {x.url ? <a href={x.url}>Descargar informe</a> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalConsejo isOpen={modalOpen} toClose={setModalOpen} />
    </main>
  );
}

export default Consejos;
