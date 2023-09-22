import React from "react";
import Formulario from "../components/formulario";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="w-screen h-screen bg-custon-white px-56">
      <Link to={"/login"}>
        <FaUser className="absolute right-10 top-5" size={40} />
      </Link>
      <Formulario />
    </main>
  );
}

export default Home;
