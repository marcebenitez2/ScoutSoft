import React from "react";
import Navbar from "../components/navbar";

function Menu() {
  return (
    <main className="w-screen h-screen dark:bg-custon-black flex flex-col pt-4 pb-6 px-16 gap-4 mdn:px-0 mdn:pt-0">
      <Navbar />
      <section className="flex flex-col gap w-full h-full">
        <h1 className="text-3xl text-center dark:text-white">
          Mensajes nuevos
        </h1>
      </section>
    </main>
  );
}

export default Menu;
