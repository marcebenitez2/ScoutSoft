import React from "react";
import { useState } from "react";
import { ramas } from "../services/ramas";
import { ToastContainer, toast } from "react-toastify";
toast;

function ModalUsuarios({ isOpen, toClose, seleccionado }) {
  if (!isOpen) {
    return null;
  }

  const [nombre, setNombre] = useState(seleccionado ? seleccionado.name : "");
  const [usuario, setUsuario] = useState(
    seleccionado ? seleccionado.username : ""
  );
  const [contrasenia, setContrasenia] = useState(
    seleccionado ? seleccionado.password : ""
  );
  const [email, setEmail] = useState(seleccionado ? seleccionado.email : "");
  const [rol, setRol] = useState(seleccionado ? seleccionado.rol : "Usuario");
  const [rama, setRama] = useState(
    seleccionado ? seleccionado.branch : "Todos"
  );

  const guardarCambios = (e) => {
    e.preventDefault();

    if (!nombre || !usuario || !contrasenia || !email) {
      toast.error("Rellena todos los campos");
      return;
    }

    const data = {
      nombre,
      usuario,
      contrasenia,
      email,
      rol,
      rama,
    };

    
  };

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-2/5 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center py-4 px-6 gap-4 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3>Agregar usuario</h3>
            <div className="w-full flex flex-col gap-2">
              <label className="flex flex-col">
                Nombre
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                />
              </label>
              <label className="flex flex-col">
                Usuario
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                />
              </label>
              <label className="flex flex-col">
                Contraseña
                <input
                  type="text"
                  value={contrasenia}
                  onChange={(e) => setContrasenia(e.target.value)}
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                />
              </label>
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                />
              </label>
              <div className="flex w-full justify-around">
                <label className="flex flex-col">
                  Rama
                  <select
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    onChange={(e) => setRama(e.target.value)}
                    defaultValue={rama}
                  >
                    {ramas.map((x) => (
                      <option>{x.nombre}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col">
                  Rol
                  <select
                    className="dark:bg-custon-black border rounded-md px-2 py-1"
                    onChange={(e) => setRol(e.target.value)}
                    defaultValue={rol}
                  >
                    <option>Administrador</option>
                    <option>Usuario</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={() => toClose(false)}
                className="w-1/5 h-10 dark:text-white mdn:w-2/5"
              >
                Cancelar
              </button>
              <button
                className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5 text-white"
                onClick={(e) => guardarCambios(e)}
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      ) : null}
      <ToastContainer />
    </main>
  );
}

export default ModalUsuarios;
