import React from "react";
import InfoNav from "../../components/infoNav";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

function Nosotros() {
  return (
    <main className="w-screen">
      <InfoNav />
      <section className="w-full h-screen flex justify-center items-center py-10">
        <div className="flex gap-8 basis-1/2 h-3/5">
          <img src="/grillaFotos.jpg" className="w-96" />
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
      <section className="w-full h-screen flex flex-col">
        <aside className="w-full h-2/4 flex px-20 py-10 bg-custon-red justify-between">
          <img src="/banderas.jpg" className="rounded-xl" />
          <img src="/flecha.jpg" className="rounded-xl" />
          <img src="/mesa.jpg" className="rounded-xl" />
          <img src="/fogon.jpg" className="rounded-xl" />
          <img src="/juego1.jpg" className="rounded-xl" />
        </aside>
        <div></div>
      </section>
    </main>
  );
}

export default Nosotros;
