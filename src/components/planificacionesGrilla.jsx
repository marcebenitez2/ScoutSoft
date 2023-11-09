import React from 'react'

function PlanificacionesGrilla({archivos}) {
    return (
        <section className='w-full h-full flex flex-col'>
            <input className='w-full bg-transparent border rounded-lg px-3 py-1'/>
            <div className='w-full h-full grid grid-cols-4'>
                {archivos.map((archivo)=>(
                    <div><a href={archivo.url}>Descargar</a></div>
                ))}
            </div>
        </section>
    )
}

export default PlanificacionesGrilla
