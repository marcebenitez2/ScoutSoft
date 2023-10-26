import React from "react";

function TablaInventario({ inventario }) {
  // Igual a la tabla de beneficiarios

  return (
    <section className="dark:text-white w-full flex flex-col gap-4">
      <input className="w-full bg-transparent border rounded-xl px-4 py-2 " />
      <table className="w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th>Item</th>
            <th>Stock</th>
            <th>Disponible</th>
            <th>Descripcion/observacion</th>
            <th>Rama</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.available}</td>
              <td>{item.description}</td>
              <td>{item.branch}</td>
              <td>editar</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-custon-red w-1/6 h-10 rounded-xl m-auto text-white">Agregar nuevo</button>
    </section>
  );
}

export default TablaInventario;
