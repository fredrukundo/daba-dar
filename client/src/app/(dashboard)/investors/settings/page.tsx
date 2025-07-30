"use client";
import React from "react";
import { useGetAuthUserQuery, useUpdateInvestorSettingsMutation } from "@/state/api";
import SettingsForm  from "@/components/SettingsForm";

const InvestorSettingsPage = () => {
  const { data: authUser, isLoading} = useGetAuthUserQuery();
  console.log("authUser", authUser);
  const [updateInvestor] = useUpdateInvestorSettingsMutation();

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );

  const initialData = {
    name: "duke fred",
    email: "dukefred@gmail.com",
    phoneNumber: "0123456789",
  };
  const handleSubmit = async (data: typeof initialData) => {
    await updateInvestor({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="investor"
    />
  );
};
export default InvestorSettingsPage;