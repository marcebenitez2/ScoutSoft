import React from "react";
import InfoNav from "../../components/infoNav";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

function Nosotros() {
  return (
    <main className="w-screen">
      <InfoNav />
      <section className="w-full h-screen flex justify-center items-center py-10 px-10">
        <div className="flex gap-8 h-3/5 px-40 items-center">
          <img src="/grupal.jpeg" className="w-1/2 h-96 rounded-lg" />
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
        <aside className="w-full h-96 flex px-20 py-5 bg-custon-red justify-between">
          <img src="/banderas.jpg" className="rounded-xl w-72" />
          <img src="/flecha.jpg" className="rounded-xl w-72" />
          <img src="/mesa.jpg" className="rounded-xl w-72" />
          <img src="/fogon.jpg" className="rounded-xl w-72" />
          <img src="/juego1.jpg" className="rounded-xl w-72" />
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
          <div className="grid w-4/5 m-auto grid-cols-3 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Castores</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Manada</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Haditas</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Scouts</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Raiders</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Rovers</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">
                Dirigentes
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                porro accusamus rem, dolorem consequuntur placeat eveniet
                repellendus minima magnam quae! Laborum error asperiores
                molestiae impedit quia minima odio beatae nam!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <h3>Nuestros colores</h3>
      </section>
    </main>
  );
}

export default Nosotros;
