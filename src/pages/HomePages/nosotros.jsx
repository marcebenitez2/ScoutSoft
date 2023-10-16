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
          <div className="grid w-11/12 m-auto grid-cols-3 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Castores</h4>
              <p>
                La Colonia de Castores comprende a niños de{" "}
                <strong>5 a 7 años.</strong> Es la edad de máxima ilusión por
                descubrirlo todo. Es la primera vez que salen de casa y
                comienzan a acercarse a los demás. En la Colonia los niños y
                niñas aprenden a vivir en grupo y a participar activamente de
                las actividades junto a otros de su misma edad. A través de
                juegos y canciones van desarrollando rutinas y haciéndose
                responsables de sus acciones. El juego desarrolla la imaginación
                y la pone al alcance del adulto para hablar así el lenguaje del
                niño y educarle en diferentes aéreas y responsabilidades.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Lobatos</h4>
              <p>
                Esta etapa abarca a niños de <strong>7 a 11 años</strong> de
                edad que son guiados por Maestros Scouts, Scouters y
                colaboradores que utilizan nombres ficticios. En el caso de la
                Manada, se les llama "viejos lobos," con nombres como Akela
                (Jefe de la Rama), Baloo (oso), Bagheera (pantera negra), Raksha
                (Mamá Loba) y Kaa (serpiente), que se basan en el libro de las
                Tierras Vírgenes de Rudyard Kipling. Durante esta etapa, los
                niños participan en juegos y actividades apropiados para su
                edad, a través de los cuales adquieren conocimientos y reciben
                insignias por sus logros.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Haditas</h4>
              <p>
                Esta etapa comprende niñas de <strong>7 a 11 años</strong> de
                edad. Las secciones o unidades de trabajo, se denominan RONDA.
                llamando a las niñas HADITAS.En el caso de la Ronda: Lechuza
                Castaña (Jefa) , Hada Luciérnaga (Salud y deportes), Hada
                Dulzura (Historietas, Poesías, Cuentos), Hada Alegría (Cantos,
                Danzas y Juegos), Hada Luna (Trabajos manuales y artesanías) Su
                metodologia se base en el libro "El cuento de la lechuza
                castaña"
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Scouts</h4>
              <p>
                abarca a niños de <strong>11 a 14 años</strong>, se forman
                secciones llamadas Tropa para varones y Comunidad para mujeres.
                Se utiliza el Sistema de Patrullas, parte integral del Método
                Scout, desarrollado por Roland Philipps y adoptado por Robert
                Baden-Powell, con el propósito de otorgar responsabilidades a
                jóvenes al asignarles roles en patrullas. Estas patrullas
                generalmente constan de seis a ocho miembros, con un Guía y un
                Sub-Guía para coordinar, así como roles específicos como
                secretario, intendente, tesorero, guardián de la leyenda,
                enfermero, cocinero, entre otros. El enfoque principal se centra
                en promover el trabajo en equipo a través de juegos, buenas
                acciones, fogones, campamentos y reuniones.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Raiders</h4>
              <p>
                Comprende a jovenes de <strong>14 a 17 años</strong> de edad. La
                Rama Raider Scout no son mixtas. Están divididas en Tropas y
                Comunidades Raider Scouts, siendo las primeras masculinas y las
                segundas femeninas. Se dividen en equipos . Se emplea el Sistema
                de Patrullas, con nombres de tribus autóctonas con el fin de
                reflotar la tradición Argentina, conocer la historia y por ser
                un excelente recurso educativo para la vida en comunidad y la
                naturaleza de gran riqueza Místico Simbólica tan importante para
                esta etapa de la psicología del joven.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Rovers</h4>
              <p>
                La etapa de Rovers abarca a jóvenes de{" "}
                <strong>18 a 25 años</strong> y permite la participación mixta.
                Están dirigidos por un Jefe/a y/o Ayudante de Rama, tanto
                hombres como mujeres. Los Rovers se organizan en Clanes, que son
                grupos autónomos donde realizan actividades de servicio a la
                comunidad, capacitación, recreación y aventura, de acuerdo a sus
                intereses. Los Rovers son responsables de su propio desarrollo
                personal y de la planificación de sus actividades. Los Clanes
                brindan un espacio para desarrollar habilidades, practicar
                valores y principios scouts, y fomentar la amistad y el
                servicio.
              </p>
            </div>
            <div className="flex flex-col gap-4 col-span-3 text-center">
              <h4 className="text-2xl text-red-600 font-semibold">
                Dirigentes
              </h4>
              <p>
                Comprende desde los <strong>25 en adelante</strong>. Ser un
                dirigente en el movimiento scout implica asumir el rol de
                liderazgo y guía para jóvenes en diferentes etapas de su
                desarrollo. Los dirigentes son responsables de impartir
                enseñanzas, proporcionar apoyo y orientación, organizar
                actividades y promover los valores del escultismo. Su objetivo
                principal es ayudar a los scouts a crecer de manera integral,
                fomentando habilidades, valores, y un sentido de responsabilidad
                social y ambiental. Los dirigentes son modelos a seguir que
                inspiran a los jóvenes a convertirse en ciudadanos activos y
                éticos en sus comunidades.
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
