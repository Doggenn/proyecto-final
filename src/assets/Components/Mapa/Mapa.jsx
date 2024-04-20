// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapContainer = () => {
  useEffect(() => {
    const map = L.map('mi_mapa').setView([40.4166, -3.7035], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
      
      /* Zona dentro del Circulo
        let circle = L.circle([51.508, -0.11], {
          color: 'red',
            fillColor: '#f03',
              fillOpacity: 0.5,
                radius: 500
          }).addTo(map);*/

        /*Triangular zona
        let polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(map);*/

    // Marcadores
    // Veterinarios
    L.marker([40.44757672611161, -4.003310963618676], 14).addTo(map).bindPopup("Blue Vet");
    L.marker([40.4728, -3.5802], 14).addTo(map).bindPopup("Veterinario 2");
    L.marker([40.4871, -3.6651], 14).addTo(map).bindPopup("Veterinario 3");
    L.marker([40.22877, -3.99623], 14).addTo(map).bindPopup("Clínica Veterinaria El Álamo");
    L.marker([40.49303, -3.36341], 14).addTo(map).bindPopup("Clínica Veterinaria Alcarria");

    // Peluquerías
    L.marker([40.648799, -4.701349], 14).addTo(map).bindPopup("Pompas");
    L.marker([40.487175, -3.963988], 14).addTo(map).bindPopup("Scooby Dog");
    L.marker([40.453359, -3.871468], 14).addTo(map).bindPopup("Guaw");
    L.marker([40.22954, -3.99296], 14).addTo(map).bindPopup("El Ladrido");
    L.marker([40.48722, -3.35439], 14).addTo(map).bindPopup("Pelu.Can.Mimos");
      
    //Pet Friendly
    L.marker([40.33973,-3.84763], 14).addTo(map).bindPopup("X-Madrid");
    L.marker([40.4525,-3.8691], 14).addTo(map).bindPopup("Carralero");
    L.marker([40.46345,-3.80823], 14).addTo(map).bindPopup("Corte Ingles");
    L.marker([40.3640,-3.7374], 14).addTo(map).bindPopup("Islazul");
    L.marker([40.30053,-3.92356], 14).addTo(map).bindPopup("Xanadú");
      
      //Educacion
    L.marker([40.69755,-3.58217], 14).addTo(map).bindPopup("Centro Canino MI PERRO 10");
    L.marker([40.397896621455, -3.8658919153442377], 14).addTo(map).bindPopup("Fundacion ONCE Perro Guia");
    L.marker([40.46362932381629, -4.015144503815583], 14).addTo(map).bindPopup("Club de Agility La Cañada");
    L.marker([40.23143920677657, -3.6950547191717313], 14).addTo(map).bindPopup("Agility Pinto");
    L.marker([40.43535609418171, -3.6515729038170712], 14).addTo(map).bindPopup("Formadog"); 
    
      //Guarderias 
      L.marker([40.38366732898594, -4.138831908986529], 14).addTo(map).bindPopup("DOG CAMP"); 
      L.marker([40.12882906946433, -3.339652182858461], 14).addTo(map).bindPopup("Granja La Luna"); 
      L.marker([40.12523360090014, -3.3330300038328966], 14).addTo(map).bindPopup("3 patas"); 
      L.marker([40.70110347797444, -3.598150446131266], 14).addTo(map).bindPopup("HappyCan Residencia canina"); 
      L.marker([40.19375429337536, -4.186279919173648], 14).addTo(map).bindPopup("Campamento de Mascotas"); 

      //Tiendas
    L.marker([40.453852783912296, -3.86704754614398], 14).addTo(map).bindPopup("Kiwoko"); 
    L.marker([40.41909377002741, -3.6211521227549768], 14).addTo(map).bindPopup("Tienda Animal"); 
    L.marker([40.18285806716453, -3.6802038498115683], 14).addTo(map).bindPopup("Guaw");
    L.marker([40.39706751758417, -3.7157778038189964], 14).addTo(map).bindPopup("Harkito Reptile"); 
    L.marker([40.455832638875535, -3.6781862510907555], 14).addTo(map).bindPopup("Interzoo"); 
           
      

    const popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("Nueva ubicación " + e.latlng.toString())
        .openOn(map);
    }

    map.on('click', onMapClick);

    // Cleanup
    return () => {
      map.off('click', onMapClick);
      map.remove();
    };
  }, []); // Empty dependency array ensures useEffect only runs once

  return <div id="mi_mapa" style={{ height: "90vh", width: "100%" }} />;
};

export default MapContainer;
