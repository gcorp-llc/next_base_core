"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for leaflet icons in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapPickerProps {
  value?: { lat: number; lng: number };
  onChange: (value: { lat: number; lng: number }) => void;
}

function LocationMarker({ value, onChange }: MapPickerProps) {
  const map = useMapEvents({
    click(e) {
      onChange(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return value ? (
    <Marker position={value} icon={icon} draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          onChange(marker.getLatLng());
        },
      }}
    />
  ) : null;
}

function CurrentLocationButton({ onChange }: { onChange: (v: {lat: number, lng: number}) => void }) {
    const map = useMap();
    const handleLocate = () => {
        map.locate().on("locationfound", (e) => {
            onChange(e.latlng);
            map.flyTo(e.latlng, 16);
        });
    };

    return (
        <button
            type="button"
            onClick={handleLocate}
            className="absolute bottom-5 right-5 z-[1000] bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-border hover:bg-muted transition-colors"
        >
            <span className="icon-[solar--gps-bold-duotone] w-6 h-6 text-primary" />
        </button>
    );
}

export default function MapPicker({ value, onChange }: MapPickerProps) {
  const defaultCenter = value || { lat: 35.6892, lng: 51.3890 }; // Tehran

  return (
    <div className="h-[300px] w-full rounded-2xl overflow-hidden border border-border relative">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker value={value} onChange={onChange} />
        <CurrentLocationButton onChange={onChange} />
      </MapContainer>
    </div>
  );
}
