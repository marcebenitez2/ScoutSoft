import React from "react";
import InfoNav from "../../components/infoNav";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

function Nosotros() {
  return (
    <main className="w-screen">
      <InfoNav />
      <section className="w-full  flex justify-center items-center py-16 px-10">
        <div className="flex gap-8 h-3/5 px-40 items-center xln:px-10 lgn:flex-col">
          <img
            src="/grupal.jpeg"
            className="w-1/2 h-96 rounded-lg lgn:w-full"
          />
          <div className="flex flex-col h-full basis-1/2 justify-between py-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-4xl text-red-600">
                Sobre nosotros
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iste asperiores, sunt inventore provident officia? Provident
                optio corporis magni id illo. Animi deserunt sunt fugit ipsa
                fuga maxime. Ut, sed.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Beatae, maxime dolores voluptates ullam quis nulla quae hic rem
                neque qui. Totam, voluptates sunt! Architecto sequi magni,
                possimus eum numquam consequuntur?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="tracking-tighter">
                9 de Julio 3535 - Rosario - Argentina
              </span>
              <div className="flex gap-2">
                <img src={instagram} className="w-12" />
                <img src={facebook} className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-4">
        <aside className="w-full h-96 flex px-20 py-5 bg-custon-red justify-between 2xln:px-10 xln:px-2 xln:h-72">
          <img
            src="/banderas.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40 "
          />
          <img
            src="/flecha.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
          <img src="/mesa.jpg" className="rounded-xl w-72 2xln:w-56 xln:w-40" />
          <img
            src="/fogon.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
          <img
            src="/juego1.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
        </aside>
        <div className="px-10 py-4 flex flex-col gap-10">
          <div>
            <h3 className="text-4xl text-red-600 font-semibold">
              Nuestras secciones
            </h3>
            <h6 className="text-xl">
              Independientemente de la edad podemos compartir ideales
            </h6>
          </div>
          <div className="grid w-3/4 m-auto grid-cols-3 gap-x-6 gap-y-6 lgn:w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Castores</h4>
              <p>
                La Colonia de Castores comprende a niños de 5 a 7 años. Es la
                edad de máxima ilusión por descubrirlo todo. Aprenden a vivir en
                grupo y participar en actividades. El juego desarrolla la
                imaginación y la responsabilidad.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Lobatos</h4>
              <p>
                Esta etapa abarca a niños de 7 a 11 años. Participan en juegos y
                actividades apropiados para su edad y reciben insignias por sus
                logros.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Haditas</h4>
              <p>
                Comprende niñas de 7 a 11 años. Se llaman HADITAS y se basa en
                el libro "El cuento de la lechuza castaña."
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Scouts</h4>
              <p>
                Abarca a niños de 11 a 14 años. Se forman secciones llamadas
                Tropa y Comunidad. Promueve el trabajo en equipo a través de
                juegos, buenas acciones y campamentos.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Raiders</h4>
              <p>
                Comprende a jóvenes de 14 a 17 años. Se dividen en Tropas y
                Comunidades Raider Scouts y utilizan el Sistema de Patrullas.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Rovers</h4>
              <p>
                La etapa de Rovers abarca a jóvenes de 18 a 25 años y permite la
                participación mixta. Realizan actividades de servicio a la
                comunidad y promueven valores scouts.
              </p>
            </div>
            <div className="flex flex-col gap-4 col-span-3 text-center">
              <h4 className="text-2xl text-red-600 font-semibold">
                Dirigentes
              </h4>
              <p>
                Comprende desde los 25 en adelante. Los dirigentes son modelos a
                seguir que inspiran a los jóvenes a convertirse en ciudadanos
                activos y éticos en sus comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}

export default Nosotros;
