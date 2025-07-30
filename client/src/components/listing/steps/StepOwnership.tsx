"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Using Card
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, File, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface StepOwnershipProps {
    onNext: () => void;
    onUpdate: (data: any) => void;
    defaultValues?: any;
}

const StepOwnership: React.FC<StepOwnershipProps> = ({ onNext, onUpdate, defaultValues }) => {
    const [capacity, setCapacity] = useState(defaultValues?.capacity || "");
    const [capacityOther, setCapacityOther] = useState(defaultValues?.capacityOther || "");
    const [ownershipStructure, setOwnershipStructure] = useState(defaultValues?.ownershipStructure || "");
    const [ownershipOther, setOwnershipOther] = useState(defaultValues?.ownershipOther || "");
    const [hasDocs, setHasDocs] = useState(defaultValues?.hasDocs || "");
    const [hasLoan, setHasLoan] = useState(defaultValues?.hasLoan || "");
    const [ownershipFiles, setOwnershipFiles] = useState<File | null>(null);
    const [fileUploadError, setFileUploadError] = useState<string | null>(null); // State for file upload errors
    const [fileUploadSuccess, setFileUploadSuccess] = useState<boolean>(false);

    const handleNext = () => {
        // Basic validation: Check if required fields are filled
        if (!capacity || !ownershipStructure || !hasDocs || !hasLoan) {
            toast.error('Please fill in all required fields.'); // Use a better UI alert
            return;
        }
        onUpdate({
            capacity,
            capacityOther,
            ownershipStructure,
            ownershipOther,
            hasDocs,
            hasLoan,
            ownershipFiles,
        });
        onNext();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type and size (optional)
            if (file.type !== 'application/pdf' && !file.type.startsWith('image/')) {
                setFileUploadError('Invalid file type. Please upload a PDF or an image.');
                setFileUploadSuccess(false);
                setOwnershipFiles(null);
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setFileUploadError('File size too large. Please upload a file smaller than 5MB.');
                setFileUploadSuccess(false);
                setOwnershipFiles(null);
                return;
            }
            setFileUploadError(null); // Clear any previous error
            setFileUploadSuccess(true);
            setOwnershipFiles(file);
        } else {
            setFileUploadError(null);
            setFileUploadSuccess(false);
            setOwnershipFiles(null);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">1. Property Ownership</CardTitle> {/* Larger Title */}
                <CardDescription className="text-gray-500">
                    Provide information about the property&apos;s ownership.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Question 1 */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        In what capacity are you listing this property? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup value={capacity} onValueChange={setCapacity} className="space-y-3">
                        {[
                            "I am the property owner",
                            "I am the legal representative of the owner(s)",
                            "I am a real estate agent authorized to list this property",
                            "Other",
                        ].map((option) => (
                            <div key={option} className="flex items-center">
                                <RadioGroupItem value={option} id={`capacity-${option}`} className="mr-2" />
                                <Label htmlFor={`capacity-${option}`} className="text-gray-700">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                    {capacity === "Other" && (
                        <Input
                            type="text"
                            placeholder="Please specify"
                            value={capacityOther}
                            onChange={(e) => setCapacityOther(e.target.value)}
                            className="mt-2 w-full"
                        />
                    )}
                </div>

                {/* Question 2 */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        What is the ownership structure of the property? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                        value={ownershipStructure}
                        onValueChange={setOwnershipStructure}
                        className="space-y-3"
                    >
                        {[
                            "Sole ownership (individual)",
                            "Sole ownership (private company)",
                            "Co-ownership (family members)",
                            "Mixed ownership (individuals and companies)",
                            "Other",
                        ].map((option) => (
                            <div key={option} className="flex items-center">
                                <RadioGroupItem value={option} id={`ownership-${option}`} className="mr-2" />
                                <Label htmlFor={`ownership-${option}`} className="text-gray-700">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                    {ownershipStructure === "Other" && (
                        <Input
                            type="text"
                            placeholder="Please specify"
                            value={ownershipOther}
                            onChange={(e) => setOwnershipOther(e.target.value)}
                            className="mt-2 w-full"
                        />
                    )}
                </div>

                {/* Question 3 */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        Do you have property ownership legal documentation? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup value={hasDocs} onValueChange={setHasDocs} className="space-y-3">
                        {[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ].map((item) => (
                            <div key={item.value} className="flex items-center">
                                <RadioGroupItem value={item.value} id={`docs-${item.value}`} className="mr-2" />
                                <Label htmlFor={`docs-${item.value}`} className="text-gray-700">
                                    {item.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                {/* Question 4 */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">
                        Is the property currently pledged as collateral for a loan? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup value={hasLoan} onValueChange={setHasLoan} className="space-y-3">
                        {[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ].map((item) => (
                            <div key={item.value} className="flex items-center">
                                <RadioGroupItem value={item.value} id={`loan-${item.value}`} className="mr-2" />
                                <Label htmlFor={`loan-${item.value}`} className="text-gray-700">
                                    {item.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                {/* Question 5 */}
                <div className="space-y-4">
                    <Label className="text-lg font-medium">Upload property ownership documents (optional)</Label>
                    <Input
                        type="file"
                        accept="application/pdf,image/*"
                        onChange={handleFileChange}
                        className="mt-2 w-full"
                        id="ownership-files"
                    />
                    {fileUploadError && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>File Upload Error</AlertTitle>
                            <AlertDescription>{fileUploadError}</AlertDescription>
                        </Alert>
                    )}
                    {fileUploadSuccess && (
                        <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertTitle>File Uploaded</AlertTitle>
                            <AlertDescription>
                                {ownershipFiles ? ownershipFiles.name : 'File uploaded successfully.'}
                            </AlertDescription>
                        </Alert>
                    )}
                    {ownershipFiles && ( // Show file name
                        <div className="mt-2 flex items-center gap-2">
                            <File className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">{ownershipFiles.name}</span>
                        </div>
                    )}
                </div>

                <div className="flex justify-end pt-6">
                    <Button onClick={handleNext} variant="outline" className="px-6 py-3 bg-daba-teal text-white"> {/* Increased padding */}
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default StepOwnership;

