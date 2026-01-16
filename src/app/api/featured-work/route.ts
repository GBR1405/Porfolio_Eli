import { NextResponse } from "next/server";

const featureWork = [

// Adobe Illustrator

  {
    title: "Cartel Dia de muertos",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/AnuncioDiaDeMuertos.jpeg",
    category: "Illustrator",
  },
  {
    title: "Caja de Chupa Chups",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/CajaChupaChups.png",
    category: "Illustrator",
  },
  {
    title: "Letras Dia de Muertos",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/LetrasDiaDeMuertos.jpg",
    category: "Illustrator",
  },
  {
    title: "Cartel Promocional Dia de Muertos",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/CartelPromocional.jpg",
    category: "Illustrator",
  },
  {
    title: "Diseño de Cuidades Coloniales",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/CuidadesColoniales.jpg",
    category: "Illustrator",
  },
  {
    title: "Fondo de Cuidades Coloniales",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/CuidadesColonialesFondo.jpg",
    category: "Illustrator",
  },
  {
    title: "Festival Frutal Poster",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/FestivalFrutal.png",
    category: "Illustrator",
  },
  {
    title: "Proceso de Admision Poster Mateáticas",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/Matematicas.png",
    category: "Illustrator",
  },
  {
    title: "Proceso de Admision Poster",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/ProcesoAdmision.png",
    category: "Illustrator",
  },
  {
    title: "Carqtel Dia de Muertos",
    roles: ["Illustrator"],
    image: "/images/feature-work/Illustrator/CartelDiaDeMuertos.png",
    category: "Illustrator",
  },

  // Photoshop

  {
    title: "Amor Dr.Simi",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/AmorSimi.png",
    category: "Photoshop",
  },
  {
    title: "Auto Retrato Cibenetico ",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/AutoRetrato.jpg",
    category: "Photoshop",
  },
  {
    title: "El Ojo que todo lo ve",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/OjoQueTodoLoVe.png",
    category: "Photoshop",
  },
  {
    title: "Poster Danganronpa",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/Poster.png",
    category: "Photoshop",
  },
  {
    title: "Poster de Pelicula tipo western",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/PosterPelicula.png",
    category: "Photoshop",
  },
  {
    title: "Foto promocional Buldak",
    roles: ["Photoshop"],
    image: "/images/feature-work/Photoshop/Promocional.png",
    category: "Photoshop",
  },

    // Photography
  {
    title: "Dia de Muertos Primera Foto",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/DiaM_1.jpg",
    category: "Photography",
  },
  {
    title: "Dia de Muertos Segunda Foto",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/DiaM_2.jpg",
    category: "Photography",
  },
  {
    title: "dia de Muertos Tercera Foto",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/DiaM_3.jpg",
    category: "Photography",
  },
  {
    title: "Efecto de agua",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/EfectoAgua.jpg",
    category: "Photography",
  },
  {
    title: "Encuadre Ocular",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/Encuadre.png",
    category: "Photography",
  },
  {
    title: "Hatsune Miku",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/HatsuneMiku.jpg",
    category: "Photography",
  },
  {
    title: "Representacion de la lujuria",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/Lujuria.jpg",
    category: "Photography",
  },
  {
    title: "Ojos que no ven",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/OjosQueNoVen.png",
    category: "Photography",
  },
  {
    title: "Retrato Fotográfico",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/retrato.jpg",
    category: "Photography",
  },
  {
    title: "Una Copa Más",
    roles: ["Photography"],
    image: "/images/feature-work/Fotografias/UnaCopaMas.jpg",
    category: "Photography",
  },

    // Illustration
  {
    title: "Naida, la ninfa del agua",
    roles: ["Illustration"],
    image: "/images/feature-work/IlustracionesGraficas/Agua.png",
    category: "Illustration",
  },
  {
    title: "Colombia Digital",
    roles: ["Illustration"],
    image: "/images/feature-work/IlustracionesGraficas/Colombia.png",
    category: "Illustration",
  },
  {
    title: "Concepto criptido",
    roles: ["Illustration"],
    image: "/images/feature-work/IlustracionesGraficas/Concepto.png",
    category: "Illustration",
  },
  {
    title: "Dismorfia de Género",
    roles: ["Illustration"],
    image: "/images/feature-work/IlustracionesGraficas/DismorfiadeGenero.jpg",
    category: "Illustration",
  },

    // InDesign

];

export const GET = async () => {
  return NextResponse.json({ featureWork });
};
