import React from "react";
import Navbar from "../../components/navbar";

function Inventario() {
  return (
    <main>
      <div className="w-screen min-h-screen flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0 overflow-x-hidden dark:bg-custon-black ">
        <Navbar />
        <div>
          <h1 className="text-3xl text-center dark:text-white">Inventario</h1>
        </div>
      </div>
    </main>
  );
}

export default Inventario;
