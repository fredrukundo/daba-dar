"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";


interface StepCharacteristicsProps {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValues?: any;
}

const StepCharacteristics: React.FC<StepCharacteristicsProps> = ({ onBack,onNext, onUpdate, defaultValues }) => {
  const [categoryType, setCategoryType] = useState(defaultValues?.categoryType || "");
  const [propertyCategory, setPropertyCategory] = useState(defaultValues?.propertyCategory || "");
  const [propertyCategoryOther, setPropertyCategoryOther] = useState(defaultValues?.propertyCategoryOther || "");
  const [builtYear, setBuiltYear] = useState(defaultValues?.builtYear || "");
  const [materials, setMaterials] = useState<string[]>(defaultValues?.materials || []);
  const [materialOther, setMaterialOther] = useState(defaultValues?.materialOther || "");
  const [ratings, setRatings] = useState(defaultValues?.ratings || {});
  const [cracks, setCracks] = useState(defaultValues?.cracks || {});

  const materialOptions = [
    "Foundation and structural concrete",
    "Wall cement blocks",
    "Traditional red bricks",
    "Clay roof tiles",
    "Rammed earth/adobe walls",
    "Foundation/wall stones",
    "Wood",
    "Metal",
    "Glass",
    "Other",
  ];

  const ratingParts = [
    "External walls",
    "Interior walls",
    "Doors",
    "Windows",
    "Floors and tiles",
    "Roofs",
    "Plaster and painting",
    "Plumbing",
    "Lamps and electrical devices",
    "Furniture",
  ];

  const crackParts = [
    "Foundation",
    "Floors",
    "Roofs",
    "External walls",
    "Interior walls",
    "Plaster and painting",
  ];

  const handleCheckbox = (val: string) => {
    if (materials.includes(val)) {
      setMaterials(materials.filter((m) => m !== val));
    } else if (materials.length < 3) {
      setMaterials([...materials, val]);
    }
  };


  const handleNext = () => {
    if (!categoryType || !propertyCategory || !propertyCategory || !builtYear  || !ratings || !cracks) {
        toast.error('Please fill in all required fields');
        return;
    }
    onUpdate({categoryType, propertyCategory, propertyCategoryOther, builtYear, materials, materialOther, ratings, cracks,});
    onNext();
    console.log("Step 3 data:", {
      categoryType,
      propertyCategory,
      propertyCategoryOther,
      builtYear,
      materials,
      materialOther,
      ratings,
      cracks,
    });
};
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">3. Category & Characteristics of the Property</h2>

      {/* Category Type */}
      <div>
        <Label className="font-semibold">In which category does the property belong? <span className="text-red-500">*</span></Label>
        <RadioGroup value={categoryType} onValueChange={setCategoryType} className="mt-2 space-y-2">
          {[
            "Unoccupied site",
            "Underutilised/non-utilised building needing renovation and or upgrading",
            "Old building / house needing upgrading",
          ].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Property Category */}
      <div>
        <Label className="font-semibold">Property Category <span className="text-red-500">*</span></Label>
        <RadioGroup value={propertyCategory} onValueChange={setPropertyCategory} className="mt-2 space-y-2">
          {[
            "Residential family house",
            "Apartment building",
            "Commercial and retail stores",
            "Business office building",
            "Public institution offices",
            "Factory and fabrication unit & lab",
            "Other",
          ].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
        {propertyCategory === "Other" && (
          <Input
            placeholder="Specify other category"
            value={propertyCategoryOther}
            onChange={(e) => setPropertyCategoryOther(e.target.value)}
            className="mt-2"
          />
        )}
      </div>

      {/* Built year */}
      <div>
        <Label className="font-semibold">Year Built</Label>
        <Input
          value={builtYear}
          onChange={(e) => setBuiltYear(e.target.value)}
          className="mt-2"
          placeholder="e.g., 1995"
        />
      </div>

      {/* Materials */}
      <div>
        <Label className="font-semibold">Select up to 3 construction materials <span className="text-red-500">*</span></Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {materialOptions.map((mat) => (
            <div key={mat} className="flex items-center space-x-2">
              <Checkbox
                checked={materials.includes(mat)}
                onCheckedChange={() => handleCheckbox(mat)}
              />
              <Label>{mat}</Label>
            </div>
          ))}
        </div>
        {materials.includes("Other") && (
          <Input
            placeholder="Specify other material"
            value={materialOther}
            onChange={(e) => setMaterialOther(e.target.value)}
            className="mt-2"
          />
        )}
      </div>

      {/* Ratings */}
      <div>
        <Label className="font-semibold">Rate the condition (1: Bad - 7: Excellent)</Label>
        <div className="grid grid-cols-2 gap-2 mt-2 gap-x-4">
          {ratingParts.map((part) => (
            <div key={part} className="flex items-center justify-between">
              <span>{part}</span>
              <Input
                type="number"
                min={1}
                max={7}
                value={ratings[part] || ""}
                onChange={(e) => setRatings({ ...ratings, [part]: Number(e.target.value) })}
                className="w-24"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cracks */}
      <div>
        <Label className="font-semibold">Visible cracks?</Label>
        <div className="space-y-4 mt-2">
          {crackParts.map((part) => (
            <div key={part} className="flex items-center justify-between">
              <span>{part}</span>
              <RadioGroup
                value={cracks[part] || ""}
                onValueChange={(val) => setCracks({ ...cracks, [part]: val })}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="yes" id={part + "-yes"} />
                  <Label htmlFor={part + "-yes"}>Yes</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="no" id={part + "-no"} />
                  <Label htmlFor={part + "-no"}>No</Label>
                </div>
              </RadioGroup>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack} className="text-white bg-daba-teal">Back</Button>
        <Button onClick={handleNext} variant="outline" className="text-white bg-daba-teal">Next</Button>
      </div>
    </div>
  );
};

export default StepCharacteristics;
