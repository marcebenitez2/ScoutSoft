import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

function InfoNav() {
  return (
    <nav className="w-full h-12 fixed flex justify-between px-10 items-center bg-transparent text-white font-semibold ">
      <div>
        <Link>
          <ImHome size={30} />
        </Link>
      </div>
      <div className="flex gap-11">
        <Link>
          <span>Nosotros</span>
        </Link>
        <Link>
          <span>Scoutismo</span>
        </Link>
        <Link>
          <span>Formularios</span>
        </Link>
      </div>
      <Link to={"/login"}>
        <FaUser size={30} />
      </Link>
    </nav>
  );
}

export default InfoNav;
