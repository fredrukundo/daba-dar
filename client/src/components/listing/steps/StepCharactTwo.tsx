"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface StepCharacteristicsProps {
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValues?: any;
}

const StepCharactTwo: React.FC<StepCharacteristicsProps> = ({ onBack, onUpdate, defaultValues }) => {
  const [vacantYears, setVacantYears] = useState(defaultValues?.vacantYears || "");
  const [photos, setPhotos] = useState<File[]>([]);
  const [comments, setComments] = useState(defaultValues?.comments || "");

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPhotos((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!photos.length) {
      toast.error("Please upload at least one photo.");
      return;
    }
    onUpdate({
      vacantYears,
      photos,
      comments,
    });
    toast.success("Data submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">3. Category & Characteristics of the Property</h2>

      {/* Vacancy duration */}
      <div>
        <Label className="font-semibold">Years the property has not been in use (optional)</Label>
        <Input
          value={vacantYears}
          onChange={(e) => setVacantYears(e.target.value)}
          className="mt-2"
          placeholder="e.g., 2"
        />
      </div>

      {/* Upload photos */}
      <div>
        <Label className="font-semibold mb-2 block">
          Upload photos (interior, exterior, neighborhood) <span className="text-red-500">*</span>
        </Label>
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full h-72 rounded-md overflow-hidden border shadow-sm">
              <Image
                src={URL.createObjectURL(photo)}
                alt={`preview-${index}`}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-75"
                onClick={() => removePhoto(index)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <label className="cursor-pointer border border-dashed border-gray-400 flex items-center justify-center w-full h-72 rounded-md hover:bg-gray-50">
            <Input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFilesChange}
            />
            <div className="flex flex-col items-center">
              <Plus className="w-6 h-6 text-gray-500" />
              <span className="text-sm text-gray-500 mt-1">Add more</span>
            </div>
          </label>
        </div>
      </div>

      {/* Comments */}
      <div>
        <Label className="font-semibold">Additional comments (optional)</Label>
        <Textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Describe accessibility, environment, or amenities..."
          className="mt-2"
        />
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack} className="text-white bg-daba-teal">Back</Button>
        <Button onClick={handleSubmit} variant="outline" className="text-white bg-daba-teal">Finish</Button>
      </div>
    </div>
  );
};

export default StepCharactTwo;