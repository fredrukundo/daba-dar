"use client";
import { Header } from "@/components";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SFooterSection from "@/components/UIs/SemFoorter/SemiFooter";
import LegalFooter from "@/components/UIs/LegalFooter/LegalFooter";

const Layout = ({ children }: {children: React.ReactNode}) => {
    const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (authUser) {
        const userRole = authUser.userRole?.toLowerCase();
        if (
          (userRole === "owner" && pathname.startsWith("/search")) ||
          (userRole === "owner" && pathname === "/")
        ) {
          router.push("/owners/properties", { scroll: false });
        } else {
          setIsLoading(false);
        }
      }
    }, [authUser, router, pathname]);
  
    if (authLoading || isLoading) return(
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
    );
    return (
        <div className="min-h-screen w-full">
        <Header />
        <main className={`min-h-screen flex w-full flex-col`}
            style={{paddingTop: `${NAVBAR_HEIGHT}px`}}
        >
            {children}
        </main>
        {/* <ContactFormSection /> */}
        <SFooterSection />
        <LegalFooter />
        </div>
    );
};

export default Layout;