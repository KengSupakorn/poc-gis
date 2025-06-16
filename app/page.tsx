"use client";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import './globals.css'; // Import the CSS file
import 'leaflet/dist/leaflet.css';
import { useRouter } from "next/navigation";
// Import type for Leaflet map
import type { Map as LeafletMap } from "leaflet";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    let map: LeafletMap | undefined;
    import("leaflet").then(L => {
      map = L.map("map").setView([15.0, 100.5], 7);

      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //   attribution: "&copy; OpenStreetMap contributors",
      // }).addTo(map);

      //  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      //   attribution: "&copy; OpenStreetMap contributors",
      // }).addTo(map);

       L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Create a custom icon
      const customIcon = L.icon({
        iconUrl: '/icon_factory.png', // Place your image in the public folder
        iconSize: [60, 60],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      // Add a marker with the custom icon and redirect on click
      const marker1 = L.marker([15.0, 100.5], { icon: customIcon })
        .addTo(map)
        .bindPopup("This is a custom marker!");

      marker1.on('click', () => {
        router.push('/svg-map');
      });

      // Example: Add more custom markers
      const marker2 = L.marker([16.0, 101.0], { icon: customIcon })
        .addTo(map)
        .bindPopup("Another custom marker");

      marker2.on('click', () => {
        router.push('/svg-map');
      });
    });
    return () => {
      if (map) map.remove();
    };
  }, [router]);

  return (
    <div className="map-container">
      <div id="map" style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}