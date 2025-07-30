'use client';
import { Header } from "@/components";
import Homepage from "./(nondashboards)/landing/page";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <main className={`h-full flex w-full flex-col`}>
        <Homepage/>
      </main>
      {/* <ListingForm /> */}
     
            {/* <LoginPage /> */}
            {/* <SignUpPage/> */}
    </div>
  );
}
