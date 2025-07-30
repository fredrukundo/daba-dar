"use client";

import { Header } from "@/components";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSideBar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetAuthUserQuery } from "@/state/api";
import SFooterSection from "@/components/UIs/SemFoorter/SemiFooter";
import LegalFooter from "@/components/UIs/LegalFooter/LegalFooter";




const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === "owner" && pathname.startsWith("/investors")) ||
        (userRole === "investor" && pathname.startsWith("/owners"))
      ) {
        router.push(
          userRole === "owner"
            ? "/owners/properties"
            : "/investors/favorites",
          { scroll: false }
        );
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );

  if (!authUser?.userRole) return null;

  return (
    <>
    
    <SidebarProvider>
      <div className="min-h-screen w-full bg-primary-100">
        <Header/>
        
        <div style={{ marginTop: `${NAVBAR_HEIGHT}px` }}>
          <main className="flex">
            <AppSidebar userType={authUser.userRole.toLowerCase()} />
            <div className="flex-grow transition-all duration-300">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
    <SFooterSection/>
    <LegalFooter/>
    </>
  );
};

export default DashboardLayout;