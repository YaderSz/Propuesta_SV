'use client';

import { useEffect, useState } from "react";

const Contador = () => {
  const fechaInicio = new Date("2025-07-25T00:00:00"); // CAMBIA LA FECHA 💕

  const calcularTiempo = () => {
    const ahora = new Date();
    const diferencia = ahora.getTime() - fechaInicio.getTime();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    return { dias, horas, minutos, segundos };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex gap-6 mt-6">
    <div className="text-2xl font-bold">
        <p>Llevamos...</p>
        </div>

      <div className="text-center">
        <p className="text-3xl font-bold">{tiempo.dias}</p>
        <span>Días</span>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{tiempo.horas}</p>
        <span>Horas</span>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{tiempo.minutos}</p>
        <span>Min</span>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{tiempo.segundos}</p>
        <span>Seg</span>
      </div>
    </div>
  );
};

export default Contador;
