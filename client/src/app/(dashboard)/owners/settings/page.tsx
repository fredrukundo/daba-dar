"use client";
import React from "react";
import { useGetAuthUserQuery, useUpdateOwnerSettingsMutation } from "@/state/api";
import SettingsForm  from "@/components/SettingsForm";

const OwnerSettingsPage = () => {
  const { data: authUser, isLoading} = useGetAuthUserQuery();
  // console.log("authUser settings", authUser);
  const [updateOwner] = useUpdateOwnerSettingsMutation();

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );

  const initialData = {
    name: authUser?.userInfo.name || "testingName",
    email: authUser?.userInfo.email || "testingEmail@gmail.com",
    phoneNumber: authUser?.userInfo.phoneNumber || "not provided",
  };
  const handleSubmit = async (data: typeof initialData) => {
    await updateOwner({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="owner"
    />
  );
};
export default OwnerSettingsPage;