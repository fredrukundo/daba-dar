'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check for existing session on component mount
  useEffect(() => {
    const user = localStorage.getItem('user'); // Or use a more robust session management
    if (user) {
      router.push('/'); // Redirect to home/dashboard if logged in
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simulate an API call to your authentication backend (replace with actual fetch)
    try {
      // Example: Simulate a 2-second delay for the authentication process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate a successful login (replace with actual validation)
      if (username === 'testuser' && password === 'password') {
        // Store user session (in a real app, use a secure method like cookies)
        localStorage.setItem('user', JSON.stringify({ username }));
        router.push('/'); // Redirect to the dashboard
      } else {
        setError('Invalid credentials. Please check your username and password.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[450px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/DabaLogo.png"
              alt="Daba Cities Logo"
              width={150}
              height={150}
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Welcome back! Please enter your credentials to sign in.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative w-full">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
               <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </Button>
                </div>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full bg-daba-green text-white text-sm font-arial-nova font-semibold hover:bg-[#519552] transition-all duration-300" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { AlertCircle, Eye, EyeOff } from 'lucide-react';
// import Image from 'next/image';
// import { useLoginMutation } from '@/state/api';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const [login] = useLoginMutation();
//   console.log('LoginPage rendered with login:', login);

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (token) router.push('/');
//   }, [router]);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const res = await login({ username, password }).unwrap();
//       localStorage.setItem('access_token', res.access);
//       localStorage.setItem('refresh_token', res.refresh);
//       router.push('/');
//     } catch (err: any) {
//       setError(err?.data?.detail || 'Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-[450px] shadow-lg">
//         <CardHeader className="space-y-1">
//           <div className="flex justify-center mb-4">
//             <Image
//               src="/images/DabaLogo.png"
//               alt="Daba Cities Logo"
//               width={150}
//               height={150}
//             />
//           </div>
//           <p className="text-sm text-gray-500 text-center">
//             Welcome back! Please enter your credentials to sign in.
//           </p>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 className="w-full"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative w-full">
//                 <Input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full"
//                 />
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                   type="button"
//                 >
//                   {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
//                 </Button>
//               </div>
//             </div>
//             {error && (
//               <Alert variant="destructive">
//                 <AlertCircle className="h-4 w-4" />
//                 <AlertTitle>Error</AlertTitle>
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-daba-green text-white text-sm font-arial-nova font-semibold hover:bg-[#519552] transition-all duration-300"
//               disabled={loading}
//             >
//               {loading ? 'Loading...' : 'Login'}
//             </Button>
//           </form>
//           <div className="mt-4 text-center text-sm text-gray-600">
//             <p>
//               Don&apos;t have an account?{' '}
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="text-blue-500 hover:underline"
//               >
//                 Sign Up
//               </button>
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;