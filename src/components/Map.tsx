import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

interface MapProps {
  latitude: number;
  longitude: number;
  title?: string;
  address?: string;
}

const Map: React.FC<MapProps> = ({ 
  latitude, 
  longitude, 
  title = "Office Location",
  address = "Rwanda"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    if (mapContainer.current) {
      map.current = L.map(mapContainer.current).setView(
        [latitude, longitude],
        15
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);

      // Add marker
      L.marker([latitude, longitude])
        .addTo(map.current)
        .bindPopup(`<strong>${title}</strong><br/>${address}`)
        .openPopup();
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, title, address]);

  return (
    <div className="map-wrapper">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;