import React from "react";
import { ramas } from "../services/ramas";
import { useState } from "react";
import { postBD } from "../services/postBD";
import { ToastContainer, toast } from "react-toastify";

function ModalBeneficiarios({ isOpen, toClose, seleccionada, beneficiarios }) {
  if (!isOpen) {
    return null; 
  }

  const [id, setId] = useState(seleccionada ? seleccionada.id : null);
  const [nombre, setNombre] = useState(seleccionada ? seleccionada.name : null);
  const [dni, setDni] = useState(seleccionada ? seleccionada.dni : null);
  const [nacimiento, setNacimiento] = useState(
    seleccionada ? seleccionada.birth : null
  );
  const [direccion, setDireccion] = useState(
    seleccionada ? seleccionada.direction : null
  );
  const [telefono, setTelefono] = useState(
    seleccionada ? seleccionada.tel : null
  );
  const [mail, setMail] = useState(seleccionada ? seleccionada.mail : null);
  const [rama, setRama] = useState(seleccionada ? seleccionada.branch : null);
  const [personal, setPersonal] = useState(
    seleccionada ? seleccionada.personal_file : null
  );
  const [medical, setMedical] = useState(
    seleccionada ? seleccionada.medical_file : null
  );
  const [cuota, setCuota] = useState(seleccionada ? seleccionada.cuota : null);
  const [activo, setActivo] = useState(
    seleccionada ? seleccionada.active : null
  );

  const guardarCambios = (e) => {
    e.preventDefault();

    if (
      !nombre ||
      !nacimiento ||
      !direccion ||
      !telefono ||
      !mail ||
      !rama ||
      !cuota
    ) {
      toast.error("Rellena todos los campos");
      return;
    }

    if (dni.length !== 8) {
      toast.error("El dni debe tener 8 digitos");
      return;
    }

    if (telefono.length !== 10) {
      toast.error("El telefono debe tener 10 digitos");
      return;
    }

    if (!mail.includes("@") || !mail.includes(".")) {
      toast.error("El mail no es valido");
      return;
    }

    if (beneficiarios.find((beneficiario) => beneficiario.dni === dni)) {
      toast.error("Ya existe un beneficiario con ese dni");
      return;
    }

    const personalValue = personal === "Si" ? 1 : 0;
    const medicalValue = medical === "Si" ? 1 : 0;
    const activoValue = activo === "Si" ? 1 : 0;

    const beneficiario = {
      id,
      nombre,
      dni,
      nacimiento,
      direccion,
      telefono,
      mail,
      rama,
      personal: personalValue, // Asigna el valor convertido
      medical: medicalValue, // Asigna el valor convertido
      cuota,
      activo: activoValue,
    };

    postBD(beneficiario, "http://localhost/addBeneficiarie.php");
    toClose(false);
    window.location.reload();
  };

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white text-black">
          <form className="w-1/2 h-1/2 dark:bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center justify-between py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">
              {seleccionada ? "Editar Beneficiario" : "Agregar nuevo"}
            </h3>
            <div className="w-full flex justify-between flex-wrap">
              <article className="flex flex-col items-center">
                <label>Nombre</label>
                <input
                  required
                  className="dark:bg-custon-black border rounded-md px-2 py-1 "
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Dni</label>
                <input
                  required
                  typeof="number"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Nacimiento</label>
                <input
                  required
                  type="date"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.birth : ""}
                  onChange={(e) => setNacimiento(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Direccion</label>
                <input
                  required
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.direction : ""}
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Telefono</label>
                <input
                  required
                  type="number"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.tel : ""}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </article>
            </div>

            {/*  */}

            <div className="w-full flex justify-between flex-wrap">
              <article className="flex flex-col items-center">
                <label>Mail</label>
                <input
                  required
                  type="email"
                  className="dark:bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.mail : ""}
                  onChange={(e) => setMail(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Rama</label>
                <select
                  className="dark:bg-custon-black border"
                  defaultValue={seleccionada ? seleccionada.branch : ""}
                  onChange={(e) => setRama(e.target.value)}
                >
                  {ramas.map((rama) => (
                    <option key={rama.id}>{rama.nombre}</option>
                  ))}
                </select>
              </article>
              <article className="flex flex-col items-center">
                <label>Ficha personal</label>
                <input
                  required
                  type="checkbox"
                  className="w-6 h-6"
                  checked={personal === "Si"} // Establecer el estado inicial en función de personal
                  onChange={(e) => setPersonal(e.target.checked ? "Si" : "No")} // Actualizar el estado en el evento onChange
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Ficha medica</label>
                <input
                  required
                  type="checkbox"
                  className="w-6 h-6"
                  checked={medical === "Si"} // Establecer el estado inicial en función de medical
                  onChange={(e) => setMedical(e.target.checked ? "Si" : "No")} // Actualizar el estado en el evento onChange
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Cuota</label>
                <input
                  required
                  type="date"
                  className="dark:bg-custon-black border"
                  defaultValue={seleccionada ? seleccionada.cuota : ""}
                  onChange={(e) => setCuota(e.target.value)}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Activo</label>
                <input
                  required
                  type="checkbox"
                  className="w-6 h-6"
                  checked={activo === "Si"} // Establecer el estado inicial en función de activo
                  onChange={(e) => setActivo(e.target.checked ? "Si" : "No")} // Actualizar el estado en el evento onChange
                />
              </article>
            </div>
            <div className="flex w-full justify-center">
              <button
                onClick={() => toClose(false)}
                className="w-1/5 h-10 dark:text-white mdn:w-2/5"
              >
                Cancelar
              </button>
              <button
                onClick={(e) => guardarCambios(e)}
                className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5 text-white"
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

export default ModalBeneficiarios;
