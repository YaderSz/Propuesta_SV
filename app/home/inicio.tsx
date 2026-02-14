'use client'

import { useEffect, useState, useRef} from "react"
import Image from "next/image"

const Inicio = () => 
    {
      const [acepto, setAcepto] = useState(false);

      const [posicionNo, setPosicionNo] = useState({ x: 0, y: 0 });

      const [corazones] = useState<
  { left: string; delay: string }[]
>([]);

const [pantallaFinal, setPantallaFinal] = useState(false);

const audioRef = useRef<HTMLAudioElement>(null);

useEffect(() => {
  if (pantallaFinal && audioRef.current) {
    audioRef.current.play();
  }
}, [pantallaFinal]);

const [explosion, setExplosion] = useState(false);
const [petalos, setPetalos] = useState<
  { left: string; delay: string; size: string }[]
>([]);

const handleSi = () => {
  setAcepto(true);
  setExplosion(true);

  // Generar pétalos
  const nuevosPetalos = Array.from({ length: 40 }).map(() => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 20 + 20}px`,
  }));

  setPetalos(nuevosPetalos);

  // Quitar explosión después de 1.5s
  setTimeout(() => setExplosion(false), 1500);
  setTimeout(() => {
  setPantallaFinal(true);
}, 9000);



};

const moverBotonNo = () => {
  const randomX = Math.floor(Math.random() * 300) - 150;
  const randomY = Math.floor(Math.random() * 300) - 150;

  setPosicionNo({
    x: randomX,
    y: randomY,
  });
};

        return(
<section className="mt-4 bg-[#f5efe6]">
  <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
    
    <div className="p-10 flex justify-center">
      <Image 
        width={1020}
        height={560}
        src="/portada.png" 
        alt=""
      />
    </div>

<div className="flex flex-col justify-center items-center px-16 min-h-screen">
       <Image
        width={420}
        height={250}
        src="/Priscila.png"
        alt="Mi Amor"
       />
  <p className="text-lg py-6 max-w-xl">
  Priscila, mi amor…

Desde que llegaste a mi vida, has sido para bien
si tuviera la oportunidad de volver a elegirte,
lo haria en esta y todas las vidas que existen por delante,
eres la persona con la cual deseo pasar todo mi tiempo y ser la mujer
con la que pase hasta que la muerte nos separe.
Porque contigo todo es mas bonito, real, chistoso y sincero.

Hoy en este mes y dia de los enamorados, cuento la fortuna con poder decir
que tambien lo estoy, por ello queria
preguntarte algo que nace desde lo más sincero de mi corazón…

¿Quieres ser mi San Valentin? 💕🌹

        </p>
  <div className="flex gap-6 justify-center items-center">
        <button onClick={handleSi} className="px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        SI💕
        </button>
        <button onMouseMove={moverBotonNo} style={{transform:`translate(${posicionNo.x}px, ${posicionNo.y}px)`}} 
        className="px-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          No 
          </button>
<audio constrols ref={audioRef} loop>
  <source src="/wannabeyours.mp3" type="audio/mpeg" />
</audio>
          {explosion && (
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-7xl animate-ping">💖</div>
            </div>
          )}
          {acepto && (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {petalos.map((petalo, i) => (
      <span
        key={i}
        className="absolute animate-fall"
        style={{
          left: petalo.left,
          animationDelay: petalo.delay,
          fontSize: petalo.size,
        }}
      >
        🌸
      </span>
    ))}
  </div>
)}

        {acepto && (
          <>
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              {corazones.map((corazon, i) => (
                <span
                  key={i}
                  className="absolute text-pink-500 text-3xl animate-float"
                  style={{
                    left: corazon.left,
                    animationDelay: corazon.delay,
                  }}
                >
                  ❤️
                </span>
              ))}
            </div>

            <div className="mt-10 text-4xl font-bold text-pink-600 animate-bounce">
              💕 Te Amo Muchisimo💕
            </div>
          </>
        )}

        </div>
    </div>
    

  </div>
  {pantallaFinal && (
  <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 animate-fadeIn">
    
    <h1 className="text-5xl font-bold mb-8 animate-pulse">
      Nuestra Galeria 💕
    </h1>

    <div className="flex gap-8 overflow-hidden">
      <Image src="/foto1.jpeg" width={300} height={400} alt="" className="rounded-xl shadow-2xl animate-slide" />
      <Image src="/foto2.jpeg" width={300} height={400} alt="" className="rounded-xl shadow-2xl animate-slide delay-200" />
      <Image src="/foto3.jpeg" width={300} height={400} alt="" className="rounded-xl shadow-2xl animate-slide delay-500" />
    </div>

    <p className="mt-10 text-xl text-center max-w-2xl">
Hola Mi vida, desde que te he tenido y has llegado a mi vida, todo a cambiado para bien, adoro pasar contigo es lo mejor del dia, Gracias por existir 💖
    </p>

{pantallaFinal && (
<audio ref={audioRef} loop>
  <source src="/wannabeyours.mp3" type="audio/mpeg" />
</audio>
)}

  </div>
  
)}

</section>

        )
} 

export default Inicio