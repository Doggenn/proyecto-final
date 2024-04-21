// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import BuscarFiltro from '../BuscarFiltro/BuscarFiltro';
import axios from 'axios';

const MapContainer = () => {

  const [mapas, setMapas] = useState([])

  const getMapa = async () => {

    const urlBbdd = "http://localhost:3000/getmapas"
    const res = await axios.get(urlBbdd)
    setMapas(res.data)

  }


  useEffect(() => {

    getMapa();

    const map = L.map('mi_mapa').setView([40.4166, -3.7035], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const popup = L.popup();

    { mapas.map((mapasIndice, index) => L.marker([mapasIndice.long, mapasIndice.lat], 14).addTo(map).bindPopup(mapasIndice.nombre)) }


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


  return (
    <>
      <BuscarFiltro />
      <div id="mi_mapa" style={{ height: "79vh", width: "100%" }} />
    </>);
};

export default MapContainer;
