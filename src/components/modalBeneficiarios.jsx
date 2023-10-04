import React from "react";
import { ramas } from "../services/ramas";

function ModalBeneficiarios({ isOpen, toClose, seleccionada }) {
  console.log(seleccionada);

  return (
    <main>
      {isOpen ? (
        <section className="h-screen w-screen top-0 left-0 flex items-center justify-center fixed dark:text-white">
          <div className="w-1/2 h-1/2 bg-custon-black rounded-xl border border-gray-600 flex flex-col items-center justify-between py-4 px-6 xln:w-2/4 mdn:w-4/5 animate-fade-up animate-once animate-duration-[800ms]">
            <h3 className="text-2xl">
              {seleccionada ? "Editar Beneficiario" : "Agregar nuevo"}
            </h3>
            <div className="w-full flex justify-between flex-wrap">
              <article className="flex flex-col items-center">
                <label>Nombre</label>
                <input
                  className="bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.name : ""}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Nacimiento</label>
                <input
                  type="date"
                  className="bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.birth : ""}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Direccion</label>
                <input
                  className="bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.direction : ""}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Telefono</label>
                <input
                  className="bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.tel : ""}
                />
              </article>
            </div>

            {/*  */}

            <div className="w-full flex justify-between flex-wrap">
              <article className="flex flex-col items-center">
                <label>Mail</label>
                <input
                  className="bg-custon-black border rounded-md px-2 py-1"
                  defaultValue={seleccionada ? seleccionada.mail : ""}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Rama</label>
                <select
                  className="bg-custon-black border"
                  defaultValue={seleccionada ? seleccionada.branch : ""}
                >
                  {ramas.map((rama) => (
                    <option key={rama.id}>{rama.nombre}</option>
                  ))}
                </select>
              </article>
              <article className="flex flex-col items-center">
                <label>Ficha personal</label>
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  defaultChecked={
                    seleccionada
                      ? seleccionada.medical_file === "Si"
                        ? true
                        : false
                      : false
                  }
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Ficha medica</label>
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  defaultChecked={
                    seleccionada
                      ? seleccionada.personal_file === "Si"
                        ? true
                        : false
                      : false
                  }
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Cuota</label>
                <input
                  type="date"
                  className="bg-custon-black border"
                  defaultValue={seleccionada ? seleccionada.cuota : ""}
                />
              </article>
              <article className="flex flex-col items-center">
                <label>Activo</label>
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  defaultChecked={
                    seleccionada
                      ? seleccionada.activo === "Si"
                        ? true
                        : false
                      : false
                  }
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
              <button className="bg-custon-red w-1/5 h-10 rounded-xl font-semibold mdn:w-2/5">
                Guardar cambios
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default ModalBeneficiarios;
