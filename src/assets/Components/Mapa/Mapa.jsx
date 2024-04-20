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
    L.marker([40.4166, -3.7035], 14).addTo(map).bindPopup("Veterinario 1");
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
