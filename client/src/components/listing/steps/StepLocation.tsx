"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import countryList from 'react-select-country-list';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {toast } from "sonner";


// Ensure the token is set. 
if (typeof window !== 'undefined') {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
    if (!mapboxgl.accessToken) {
        console.warn("Mapbox Access Token is not set.  Map functionality may be limited.");
    }
}

interface StepLocationProps {
    onNext: () => void;
    onBack: () => void;
    onUpdate: (data: any) => void;
    defaultValues?: any;
}

const StepLocation: React.FC<StepLocationProps> = ({ onNext, onBack, onUpdate, defaultValues }) => {
    const [country, setCountry] = useState(defaultValues?.country || "");
    const [city, setCity] = useState(defaultValues?.city || "");
    const [area, setArea] = useState(defaultValues?.area || "");
    const [address, setAddress] = useState(defaultValues?.address || "");
    const [coordinates, setCoordinates] = useState<{ lat: string; lng: string }>(defaultValues?.coordinates || { lat: "", lng: "" });
    const [mapInitialized] = useState(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    // let marker: mapboxgl.Marker | null = null; // Declare marker outside useEffect

    const countryOptions = countryList().getData();

    const handleCountryChange = useCallback((value: string) => {
        setCountry(value);
    }, []);

    const handleNext = () => {
        if (!country || !city || !area || !address) {
            toast.error('Please fill in all required fields, including selecting a location on the map.');
            return;
        }
        onUpdate({ country, city, area, address, coordinates });
        onNext();
    };

    // useEffect(() => {
    //     if (mapInitialized || !mapContainerRef.current || !mapboxgl.accessToken) return;

    //     const map = new mapboxgl.Map({
    //       container: mapContainerRef.current!,
    //       style: "mapbox://styles/frukundo/cm8stsydr00gk01sh838b1pcr",
    //       center:[0, 0],
    //       zoom: 2,
    //     });
    //     mapRef.current = map;


    //     map.on('click', (e) => {
    //         const { lng, lat } = e.lngLat;
    //         setCoordinates({ lat: String(lat), lng: String(lng) });

    //         if (marker) {
    //             marker.setLngLat([lng, lat]);
    //         } else {
    //             marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    //         }
    //     });

    //     // Cleanup function
    //     return () => {
    //         map.off('click', () => {}); // Remove the event listener
    //         if (map) {
    //             map.remove();
    //         }
    //         mapRef.current = null;
    //     };
    // }, [defaultValues?.coordinates?.lat, defaultValues?.coordinates?.lng, mapInitialized]);
    const markerRef = useRef<mapboxgl.Marker | null>(null);

useEffect(() => {
  if (mapInitialized || !mapContainerRef.current || !mapboxgl.accessToken) return;

  const map = new mapboxgl.Map({
    container: mapContainerRef.current!,
    style: "mapbox://styles/frukundo/cm8stsydr00gk01sh838b1pcr",
    center: [0, 0],
    zoom: 2,
  });
  mapRef.current = map;

  map.on("click", (e) => {
    const { lng, lat } = e.lngLat;
    setCoordinates({ lat: String(lat), lng: String(lng) });

    if (markerRef.current) {
      markerRef.current.setLngLat([lng, lat]);
    } else {
      markerRef.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    }
  });

  return () => {
    map.remove();
    markerRef.current = null;
    mapRef.current = null;
  };
}, [mapInitialized]);

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">2. Property Location</CardTitle>
                <CardDescription className="text-gray-500">
                    Provide information about the property&apos;s location.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Country */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        In which country is the property located? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                        onValueChange={handleCountryChange}
                        value={country}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                            {countryOptions.map((ct) => (
                                <SelectItem key={ct.value} value={ct.value}>
                                    {ct.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* City/Region */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        In which city/region is the property located? <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g., Casablanca, Kigali"
                        className="mt-2 w-full"
                    />
                </div>

                {/* Area */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        In which area is the property located? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup value={area} onValueChange={setArea} className="space-y-3">
                        {[
                            { label: "City centre (core city)", value: "city-centre" },
                            { label: "Peri-urban area", value: "peri-urban" },
                            { label: "Rural area", value: "rural" },
                        ].map((opt) => (
                            <div key={opt.value} className="flex items-center">
                                <RadioGroupItem value={opt.value} id={opt.value} className="mr-2" />
                                <Label htmlFor={opt.value} className="text-gray-700">
                                    {opt.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                {/* Physical address */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        Give the physical address of the property <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g., Block 2, Mas Palomas, 2 Av. Omar Ibn Al Khattab"
                        className="mt-2 w-full"
                    />
                </div>

                {/* Mapbox Integration */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        Locate the property on the map 
                    </Label>
                    <div
                        className="map-container w-full aspect-w-16 aspect-h-9 rounded-md border border-gray-300"
                        ref={mapContainerRef}
                        style={{ width: '100%', height: '300px' }} // Added height
                    >
                        {/* Map will be rendered here */}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Input
                            type="text"
                            placeholder="Latitude"
                            value={coordinates.lat}
                            onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })}
                            className="w-full"
                            readOnly // Make these read-only, as they're set by the map
                        />
                        <Input
                            type="text"
                            placeholder="Longitude"
                            value={coordinates.lng}
                            onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })}
                            className="w-full"
                            readOnly
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Click on the map to select the property location. The coordinates will be automatically updated.
                    </p>
                </div>

                <div className="flex justify-between pt-6">
                    <Button variant="outline" onClick={onBack} className="px-6 py-3 bg-daba-teal text-white">
                        Back
                    </Button>
                    <Button onClick={handleNext} variant="outline" className="px-6 py-3 text-white bg-daba-teal">
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default StepLocation;