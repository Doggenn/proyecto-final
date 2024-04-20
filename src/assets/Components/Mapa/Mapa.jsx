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
    L.marker([40.44757672611161, -4.003310963618676], 14).addTo(map).bindPopup("Veterinario Blue Vet");
    L.marker([40.46244410972601, -3.476559572263397], 14).addTo(map).bindPopup("Clínica Veterinaria Adel");
    L.marker([40.53833051030734, -3.640415384205801], 14).addTo(map).bindPopup("Centro Veterinario Ceclivet");
    L.marker([40.22904156144339, -3.99473566639568], 14).addTo(map).bindPopup("Clínica Veterinaria El Álamo");
    L.marker([40.492988594236834, -3.3632873462481148], 14).addTo(map).bindPopup("Clínica Veterinaria Alcarria");

    // Peluquerías
    L.marker([40.64882573709869, -4.701295798029031], 14).addTo(map).bindPopup("Peluquería Canina Pompas");
    L.marker([40.48712531242851, -3.9652463887426697], 14).addTo(map).bindPopup("Peluquería Canina Scooby Dog");
    L.marker([40.49278158794714, -3.8730916304216234], 14).addTo(map).bindPopup("Peluqueria Beauty Guau");
    L.marker([40.229265415956235, -3.9936949093559884], 14).addTo(map).bindPopup("Peluqueria Canina El Ladrido");
    L.marker([40.18005171893812, -3.6845884857172617], 14).addTo(map).bindPopup("Peluqueria Canina Mimos");
      
    //Pet Friendly
    L.marker([40.34193392872657, -3.848291301256662], 14).addTo(map).bindPopup("X-Madrid");
    L.marker([40.45282241843727, -3.8694110146689753], 14).addTo(map).bindPopup("El Carralero");
    L.marker([40.462873645872044, -3.8083290038156035], 14).addTo(map).bindPopup("Corte Ingles");
    L.marker([40.36371107145422, -3.7375047326567676], 14).addTo(map).bindPopup("Islazul");
    L.marker([40.29958940628061, -3.926178661496102], 14).addTo(map).bindPopup("Xanadú");
      
      //Educacion
    L.marker([40.69785265725208, -3.5821311307968378], 14).addTo(map).bindPopup("Centro Canino MI PERRO 10");
    L.marker([40.397896621455, -3.8658919153442377], 14).addTo(map).bindPopup("Fundacion ONCE Perro Guia");
    L.marker([40.46362932381629, -4.015144503815583], 14).addTo(map).bindPopup("Club de Agility La Cañada");
    L.marker([40.23143920677657, -3.6950547191717313], 14).addTo(map).bindPopup("Agility Pinto");
    L.marker([40.43535609418171, -3.6515729038170712], 14).addTo(map).bindPopup("Formadog"); 
    
      //Guarderias 
      L.marker([40.38366732898594, -4.138831908986529], 14).addTo(map).bindPopup("Residencia canina exclusiva | DOG CAMP"); 
      L.marker([40.12882906946433, -3.339652182858461], 14).addTo(map).bindPopup("Granja La Luna"); 
      L.marker([40.12523360090014, -3.3330300038328966], 14).addTo(map).bindPopup("Residencia Canina Madrid | 3 patas"); 
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
