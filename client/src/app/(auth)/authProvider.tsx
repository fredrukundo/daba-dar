import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import {
    Authenticator,
    Heading,
    Radio,
    RadioGroupField,
    useAuthenticator,
    View,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';


Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
            userPoolClientId:
                process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
        },
    },
});

const components = {
    Header() {
      return (
        <View className="mt-4 mb-7">
          <Heading level={3} className="!text-2xl !font-bold">
            <Image
                src="/images/DabaLogo.png"
                alt="Daba Cities Logo"
                width={200}
                height={200}
            />
          </Heading>
          <p className="text-muted-foreground mt-2">
            <span className="font-bold font-sans">Welcome!</span> Please sign in to continue
          </p>
        </View>
      );
    },
    SignIn: {
      Footer() {
        const { toSignUp } = useAuthenticator();
        return (
          <View className="text-center mt-4">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                onClick={toSignUp}
                className="text-primary hover:underline bg-transparent border-none p-0"
              >
                Sign up here
              </button>
            </p>
          </View>
        );
      },
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();
  
        return (
          <>
            <Authenticator.SignUp.FormFields />
            <RadioGroupField
              legend="Role"
              name="custom:role"
              errorMessage={validationErrors?.["custom:role"]}
              hasError={!!validationErrors?.["custom:role"]}
              isRequired
            >
              <Radio value="investor">Investor</Radio>
              <Radio value="owner">Property Owner</Radio>
            </RadioGroupField>
          </>
        );
      },
  
      Footer() {
        const { toSignIn } = useAuthenticator();
        return (
          <View className="text-center mt-4">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={toSignIn}
                className="text-primary hover:underline bg-transparent border-none p-0"
              >
                Sign in
              </button>
            </p>
          </View>
        );
      },
    },
  };
  
  const formFields = {
    signIn: {
      username: {
        placeholder: "Enter your email",
        label: "Email",
        isRequired: true,
      },
      password: {
        placeholder: "Enter your password",
        label: "Password",
        isRequired: true,
      },
    },
    signUp: {
      username: {
        order: 1,
        placeholder: "Choose a username",
        label: "Username",
        isRequired: true,
      },
      email: {
        order: 2,
        placeholder: "Enter your email address",
        label: "Email",
        isRequired: true,
      },
      password: {
        order: 3,
        placeholder: "Create a password",
        label: "Password",
        isRequired: true,
      },
      confirm_password: {
        order: 4,
        placeholder: "Confirm your password",
        label: "Confirm Password",
        isRequired: true,
      },
    },
  };
  
  const Auth = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    const router = useRouter();
    const pathname = usePathname();
  
    const isAuthPage = pathname.match(/^\/(signin|signup)$/);
    const isDashboardPage =
      pathname.startsWith("/investors") || pathname.startsWith("/owners");
  
    // Redirect authenticated users away from auth pages
    useEffect(() => {
      if (user && isAuthPage) {
        router.push("/");
      }
    }, [user, isAuthPage, router]);
  
    // Allow access to public pages without authentication
    if (!isAuthPage && !isDashboardPage) {
      return <>{children}</>;
    }
  
    return (
      <div className="h-full">
        <Authenticator
          initialState={pathname.includes("signup") ? "signUp" : "signIn"}
          components={components}
          formFields={formFields}
        >
          {() => <>{children}</>}
        </Authenticator>
      </div>
    );
  };
  
  export default Auth;

// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";

// const Auth = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");
//   const isDashboardPage = pathname.startsWith("/owners") || pathname.startsWith("/investors");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);

//     // Redirect logged-in users away from auth pages
//     if (token && isAuthPage) {
//       router.push("/");
//     }

//     // Redirect guests away from dashboard pages
//     if (!token && isDashboardPage) {
//       router.push("/signin");
//     }
//   }, [pathname]);

//   return <>{children}</>;
// };

// export default Auth;
