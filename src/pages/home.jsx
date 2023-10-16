import React from "react";
import InfoNav from "../components/infoNav";
import background from "/fotoFondo.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="w-screen h-screen">
      <InfoNav />
      <section
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl">Grupo Scout</h1>
          <h2 className="text-white text-6xl font-semibold text-center">
            San Miguel de Arcangel
          </h2>
          <div className="flex mt-4">
            <Link to={"/nosotros"}>
              <button className="text-white font-semibold px-8 py-1">
                sobre nosotros
              </button>
            </Link>
            <Link to={'/formulario'}>
              <button className="bg-red-600 text-white font-semibold rounded-lg px-8 py-1">
                Consultanos!
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
