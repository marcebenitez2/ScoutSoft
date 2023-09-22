import React from "react";
import { useContext } from "react";
import UserContext from "../services/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Menu() {
  const { nombreUsuario, rolUsuario, ramaUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(nombreUsuario)
    if (!nombreUsuario) {
      navigate("/login");
    }
  }, []);

  return <main>menu</main>;
}

export default Menu;
