import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/Services.css';
import { m } from 'framer-motion';

// Updated images
const placeholderImages = {
  pielegnacja1: '/pielegnacja1.jpg',
  pielegnacja2: '/fifth.jpg',
  pielegnacja3: '/pielegnacja3.jpg',
  pielegnacja4: '/pielegnacja4.jpg',

  projekt1: '/projekt1.jpg', // Path to projekt1.jpg
  projekt2: '/projekt2.jpg', // Path to projekt2.jpg
  projekt5: '/projekt5.jpg',

  nawad1: '/nawad.jpg',
  nawad2: '/nawad2.jpg',
  nawad3: '/nawad3.jpg',

  model1: '/model.jpg',
  model2: '/fourth2.png',
  model3: '/model3.jpg',
  model4: '/model4.jpg',

  aranz1: '/aranz1.jpg',
  aranz2: '/aranz2.jpg',
  aranz3: '/aranz3.jpg',

  koparka1: '/koparka.jpg',
  koparka2: '/koparka2.jpg',
  koparka3: '/koparka3.jpg',
 
  
};



const services = [
  {
    title: "Pielęgnacja i dbanie o ogród",
    images: [placeholderImages.pielegnacja4, placeholderImages.pielegnacja3, placeholderImages.pielegnacja2,  placeholderImages.pielegnacja1],
    description: "Kompleksowa pielęgnacja ogrodu przez cały sezon. Nasze usługi obejmują:",
    details: [
      "Regularne koszenie trawnika",
      "Przycinanie żywopłotów i krzewów",
      "Pielęgnacja rabat kwiatowych",
      "Nawożenie i aeracja trawnika",
      "Zwalczanie chwastów i szkodników",
      "Przygotowanie ogrodu do sezonu"
    ]
  },
  {
    title: "Projektowanie krajobrazu",
    images: [placeholderImages.projekt1, placeholderImages.projekt2, placeholderImages.projekt5],
    description: "Indywidualne projekty dopasowane do Twoich potrzeb. Oferujemy:",
    details: [
      "Projekty koncepcyjne ogrodów",
      "Wizualizacje 3D",
      "Dobór roślin",
      "Projektowanie systemów nawadniania",
      "Planowanie oświetlenia ogrodowego",
      "Projekty małej architektury"
    ]
  },
  {
    title: "Nawadnianie i systemy wodne",
    images: [placeholderImages.nawad1, placeholderImages.nawad2, placeholderImages.nawad3],
    description: "Profesjonalne systemy nawadniające do każdego ogrodu. Nasze rozwiązania:",
    details: [
      "Automatyczne systemy nawadniania",
      "Systemy kropelkowe",
      "Zraszacze obrotowe i statyczne",
      "Sterowniki czasowe",
      "Systemy deszczowni",
      "Konserwacja i serwis systemów"
    ]
  },
  {
    title: "Modelowanie drzew i krzewów",
    images: [placeholderImages.model2, placeholderImages.model3, placeholderImages.model1, placeholderImages.model4  ],
    description: "Estetyczne przycinanie i formowanie roślin. Specjalizujemy się w:",
    details: [
      "Formowanie żywopłotów",
      "Pielęgnacja drzew owocowych",
      "Topiary i formy geometryczne",
      "Przycinanie sanitarne",
      "Ochrona drzew zabytkowych",
      "Pielęgnacja krzewów ozdobnych"
    ]
  },
  {
    title: "Aranżacje ogrodów od podstaw",
    images: [placeholderImages.aranz1, placeholderImages.aranz2, placeholderImages.aranz3],
    description: "Przekształcamy stare ogrody w nowoczesne przestrzenie zieleni. Oferujemy:",
    details: [
      "Kompleksowe przebudowy ogrodów",
      "Modernizacja istniejących nasadzeń",
      "Wymiana nawierzchni",
      "Instalacja nowych elementów małej architektury",
      "Rewitalizacja starych drzew",
      "Tworzenie nowych rabat i kompozycji"
    ]
  },
  {
    title: "Mini koparka",
    images: [placeholderImages.koparka1, placeholderImages.koparka2, placeholderImages.koparka3],
    description: "Bezpieczna i profesjonalna prace przy użyciu mini koparki. Zapewniamy:",
    details: [
      "Przygotowanie terenu pod ogród",
      " Kopanie rowów pod systemy nawadniania",
      "Wykopy pod oczka wodne i stawy",
      "Korytowanie pod ścieżki ogrodowe i tarasy",
      "Rozplantowanie ziemi i niwelacja terenu",
      "Usuwanie korzeni i karczowanie starych roślin"
    ]
  }
];

const Services = () => {
  // Stan dla każdej karuzeli osobno
  const [carouselStates, setCarouselStates] = useState(
    services.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const nextImage = (serviceIndex) => {
    setCarouselStates(prev => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] + 1) % services[serviceIndex].images.length
    }));
  };

  const prevImage = (serviceIndex) => {
    setCarouselStates(prev => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] - 1 + services[serviceIndex].images.length) % services[serviceIndex].images.length
    }));
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Nasze Usługi</h1>
      
      {services.map((service, index) => (
        <div key={index} className="service-section">
          <h2 className="service-title">{service.title}</h2>
          
          <div className="carousel-container">
            <button 
              className="carousel-button prev"
              onClick={() => prevImage(index)}
            >
              &lt;
            </button>
            
            <div className="carousel">
              <img 
                src={service.images[carouselStates[index]]} 
                alt={service.title} 
                className="service-image"
              />
            </div>
            
            <button 
              className="carousel-button next"
              onClick={() => nextImage(index)}
            >
              &gt;
            </button>
          </div>

          <div className="service-content">
            <p className="service-description">{service.description}</p>
            <ul className="service-details">
              {service.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
