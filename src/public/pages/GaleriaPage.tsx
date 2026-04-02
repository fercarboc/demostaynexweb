import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import { CTASection } from '../components/CTASection';

import { useDemoConfig } from '../../hooks/useDemoConfig';

const { propertyName, location: propertyLocation, tagline } = useDemoConfig();

const galleryImages = [
  { src: "/images/casa2.jpg",        alt: `Exterior de ${propertyName} en ${propertyLocation}` },
  { src: "/images/casa3.jpg",        alt: `Fachada de ${propertyName}` },
  { src: "/images/casa4.jpg",        alt: `Exterior con jardín privado de ${propertyName}` },
  { src: "/images/casanueve.jpg",    alt: `${propertyName} en invierno` },
  { src: "/images/porche.jpg",       alt: `Porche de entrada de ${propertyName}` },
  { src: "/images/porche1.jpg",      alt: `Porche exterior de ${propertyName}` },
  { src: "/images/entradaporche.jpg", alt: `Entrada y porche de ${propertyName}` },
  { src: "/images/salon1.jpg",       alt: `Salón principal de ${propertyName}` },
  { src: "/images/salon2.jpg",       alt: `Salón — zona de descanso de ${propertyName}` },
  { src: "/images/cocina.jpg",       alt: `Cocina totalmente equipada de ${propertyName}` },
  { src: "/images/habitacion1.jpg",  alt: `Habitación 1 de ${propertyName}` },
  { src: "/images/habitacion2.jpg",  alt: `Habitación 2 de ${propertyName}` },
  { src: "/images/habitacion3.jpg",  alt: `Habitación 3 de ${propertyName}` },
  { src: "/images/habitacion4.jpg",  alt: `Habitación 4 de ${propertyName}` },
  { src: "/images/habitacion5.jpg",  alt: `Habitación 5 de ${propertyName}` },
  { src: "/images/aseo1.jpg",        alt: `Baño completo de ${propertyName}` },
  { src: "/images/aseo2.jpg",        alt: `Segundo baño de ${propertyName}` },
  { src: "/images/escalera.jpg",     alt: `Escalera interior de ${propertyName}` },
  { src: "/images/pueblo1.jpg",      alt: `Castillo Pedroso — Valle de Toranzo cerca de ${propertyName}` },
  { src: "/images/pueblo2.jpg",      alt: `Entorno del Valle de Toranzo cerca de ${propertyName}` },
  { src: "/images/pueblo3.jpg",      alt: `Paisaje de los Valles Pasiegos cerca de ${propertyName}` },
];

export const GaleriaPage: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection 
        title="Galería de imágenes"
        subtitle={`Un recorrido visual por cada rincón de ${propertyName} y su entorno privilegiado.`}
        image="https://picsum.photos/seed/galeria/1920/1080"
      />

      <SectionContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-[3/2] overflow-hidden rounded-2xl bg-stone-100 shadow-md transition-all hover:shadow-xl">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer bg="stone">
        <CTASection 
          title="¿Te gusta lo que ves?"
          subtitle="Reserva tu estancia y vive la experiencia en persona."
          buttonText="Ver disponibilidad"
          to="/reservar"
        />
      </SectionContainer>
    </div>
  );
};
