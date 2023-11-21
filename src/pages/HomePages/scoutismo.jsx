import React from "react";
import InfoNav from "../../components/infoNav";
import badenpowell from "../../../public/badenpowell.jpg";

function Scoutismo() {
  return (
    <main className="w-screen">
      <InfoNav />
      <div className="w-screen h-full flex flex-col pt-24 px-40 ">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-red-600">Scoutismo</h1>
          <div className="w-full flex">
            <img src={badenpowell}></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Scoutismo;
