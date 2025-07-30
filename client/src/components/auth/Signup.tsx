'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface FormData {
  firstName: string;
  familyName: string;
  otherNames: string;
  dateOfBirth: string;
  email: string;
  telephone: string;
  nationality: string;
  countryOfResidence: string;
  idPassportNumber: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: 'OWNER' | 'seeker' | 'investor';
}

type FormErrors = Partial<Record<keyof FormData, string>> & { general?: string };

const SignUpPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    familyName: '',
    otherNames: '',
    dateOfBirth: '',
    email: '',
    telephone: '',
    nationality: '',
    countryOfResidence: '',
    idPassportNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'investor',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const countryOptions = countryList().getData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (
    name: 'nationality' | 'countryOfResidence',
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTelephoneChange = (value: string | undefined) => {
    // The PhoneInput component handles country code automatically
    setFormData((prevData) => ({
      ...prevData,
      telephone: value || '', // Ensure we store an empty string, not undefined
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.familyName) newErrors.familyName = 'Family name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.countryOfResidence)
      newErrors.countryOfResidence = 'Country of Residence is required';
    if (!formData.telephone) newErrors.telephone = 'Telephone number is required'; // Add validation for telephone

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const payload = {
        first_name: formData.firstName,
        family_name: formData.familyName,
        other_names: formData.otherNames,
        date_of_birth: formData.dateOfBirth,
        email: formData.email,
        telephone: formData.telephone,
        nationality: formData.nationality,
        country_of_residence: formData.countryOfResidence,
        id_passport_number: formData.idPassportNumber,
        username: formData.username,
        password: formData.password,
        role: formData.role,
      };
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Registration failed");
      }
  
      router.push("/signin");
    } catch (error: any) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[600px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/DabaLogo.png"
              alt="Daba Cities Logo"
              width={150}
              height={150}
            />
          </div>

          <p className="text-sm font-arial-nova text-gray-500 text-center ">
            Create an account to get started.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            {errors.general && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errors.general}</AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder='Enter your first name'
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="familyName">Family Name</Label>
                <Input
                  id="familyName"
                  name="familyName"
                  type="text"
                  value={formData.familyName}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder='Enter your family name'
                />
                {errors.familyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.familyName}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="otherNames">Other Names (Optional)</Label>
              <Input
                id="otherNames"
                name="otherNames"
                type="text"
                value={formData.otherNames}
                onChange={handleChange}
                className="w-full"
                placeholder='Enter your other names'
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder='Enter your email address'
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Telephone</Label>
              <PhoneInput
                country={'ma'}
                value={formData.telephone}
                onChange={handleTelephoneChange}
                inputStyle={{
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
                placeholder='Enter your telephone number'
              />
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Select
                onValueChange={(value) =>
                  handleCountryChange('nationality', value)
                }
                defaultValue={formData.nationality}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Nationality" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((country: any) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.nationality && (
                <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="countryOfResidence">Country of Residence</Label>
              <Select
                onValueChange={(value) =>
                  handleCountryChange('countryOfResidence', value)
                }
                defaultValue={formData.countryOfResidence}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Country of Residence" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((country: any) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.countryOfResidence && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.countryOfResidence}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="idPassportNumber">ID / Passport Number</Label>
              <Input
                id="idPassportNumber"
                name="idPassportNumber"
                type="text"
                value={formData.idPassportNumber}
                onChange={handleChange}
                className="w-full"
                placeholder='Enter your ID or Passport number'
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full"
                placeholder='Enter your username'
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative w-full">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pr-10"
                  placeholder='Enter your password'
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
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative w-full">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pr-10"
                  placeholder='Confirm your password'
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                >
                  {showConfirmPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    role: value as 'OWNER' | 'seeker' | 'investor',
                  }))
                }
                defaultValue={formData.role}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="owner">Property Owner</SelectItem>
                  <SelectItem value="seeker">Property Seeker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-daba-green text-white text-sm font-arial-nova font-semibold hover:bg-[#519552] transition-all duration-300" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <button
                onClick={() => router.push('/signin')}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;