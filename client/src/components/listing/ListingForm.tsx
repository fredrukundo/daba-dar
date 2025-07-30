"use client";

import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import StepOwnership from "./steps/StepOwnership";
import StepLocation from "./steps/StepLocation";
import StepCharacteristics from "./steps/StepCharacteristics";
import NewProperty from "./steps/NewProperty";

const TOTAL_STEPS = 4;

const ListingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOwnership onNext={next} onUpdate={updateFormData} defaultValues={formData} />;
      case 2:
        return <StepLocation onNext={next} onBack={back} onUpdate={updateFormData} defaultValues={formData} />;
      case 3:
        return <StepCharacteristics onNext={next} onBack={back} onUpdate={updateFormData} defaultValues={formData} />;
      // case 4:
      //   return <StepCharactTwo onBack={back} onUpdate={updateFormData} defaultValues={formData} />;
      case 4:
        return <NewProperty/>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-1">
      {/* Progress label */}
      <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground font-medium">
        <span>Step {step} of {TOTAL_STEPS}</span>
        <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
      </div>

      {/* Progress bar */}
      <Progress
        value={(step / TOTAL_STEPS) * 100}
        className="mb-8 h-2 rounded-full bg-gray-200"
      />

      {/* Step content */}
      <div className="">{renderStep()}</div>
    </div>
  );
};

export default ListingForm;
