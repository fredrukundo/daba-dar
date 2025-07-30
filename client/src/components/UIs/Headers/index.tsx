"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { links } from "./constants";
import { IoMdClose } from "react-icons/io";
import { FaGlobe, FaChevronDown, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

const logo = "/images/logoWhite.png";
const menu = "/svgs/ic_bars.svg";
const rightArrow = "/svgs/ic_chevron_right.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);
  const [language, setLanguage] = useState("English"); // Default to English
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageDropdownOpen, setIsMobileLanguageDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  let closeTimeout: NodeJS.Timeout;

  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage = pathname.includes("/owners") || pathname.includes("/investors");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  const languages = [
    { name: "English", code: "En" },
    { name: "French", code: "Fr" },
    { name: "Arabic", code: "Ar" },
    { name: "Swahil", code: "Sw" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (index: number) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  // Toggle language dropdown (Desktop)
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Toggle language dropdown (Mobile)
  const toggleMobileLanguageDropdown = () => {
    setIsMobileLanguageDropdownOpen(!isMobileLanguageDropdownOpen);
  };

  // Handle language selection
  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
    setIsMobileLanguageDropdownOpen(false);
  };

  // Close menu or dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isOpen || isLanguageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isLanguageDropdownOpen]);

  // Function to open dropdown
  const handleMouseEnter = (index: number) => {
    clearTimeout(closeTimeout);
    setDropdownOpen(index);
  };

  // Function to close dropdown with delay
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-daba-teal/95 backdrop-blur-md shadow-lg"
      style={{ height: `${NAVBAR_HEIGHT}px` }} // Fixed height across all devices
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
        {/* Sidebar Trigger for Dashboard Pages (Mobile) */}
        {isDashboardPage && (
          <div className="md:hidden mr-4">
            <SidebarTrigger />
          </div>
        )}

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={200} // Adjusted for fixed height
            height={80}
            priority={true}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-52 h-auto hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Dashboard Action Button (Visible on Dashboard Pages) */}
        {isDashboardPage && authUser && (
          <Button
            variant="secondary"
            className="bg-daba-green/80 text-white hover:bg-daba-green hover:text-white ml-4 text-sm font-arial-nova font-semibold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hidden sm:inline-flex"
            onClick={() =>
              router.push(
                authUser.userRole?.toLowerCase() === "owner"
                  ? "/owners/newproperty"
                  : "/search"
              )
            }
          >
            {authUser.userRole?.toLowerCase() === "owner" ? (
              <>
                <Plus className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Add New Property</span>
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Search Properties</span>
              </>
            )}
          </Button>
        )}

        {/* Desktop Navigation (Visible on Desktop and Above, Excluding Dashboard) */}
        {!isDashboardPage && (
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex justify-between">
              {links.map((link, i) => (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.url}
                    className="text-white text-base font-arial-nova font-semibold hover:text-daba-light-teal transition-all duration-300 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    {link.title}
                    {link.dropdown && (
                      <Image
                        src={rightArrow}
                        width={14}
                        height={14}
                        alt="dropdown icon"
                        className="text-white transition-transform duration-300 group-hover:rotate-90"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && dropdownOpen === i && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-56 bg-white shadow-2xl rounded-xl overflow-hidden border border-daba-green/20"
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((item, j) => (
                        <Link
                          key={j}
                          href={item.url}
                          className="block px-5 py-3 text-gray-700 text-base font-arial-nova hover:bg-daba-green/10 hover:text-daba-teal transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Buttons: Language Dropdown and Sign In/Up */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown (Desktop) */}
          <div ref={languageDropdownRef} className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="text-white text-sm font-arial-nova font-semibold hover:text-daba-light-teal transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-2"
            >
              <FaGlobe className="w-5 h-5" />
              <span>{language}</span>
              <FaChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isLanguageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Language Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-40 bg-white shadow-2xl rounded-xl overflow-hidden border border-daba-green/20"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.name)}
                    className="w-full px-4 py-2 text-gray-700 text-sm font-arial-nova hover:bg-daba-green/10 hover:text-daba-teal transition-colors duration-200 flex items-center justify-between"
                  >
                    {lang.name}
                    {language === lang.name && <FaCheck className="w-4 h-4 text-daba-teal" />}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* User Dropdown or Sign In/Up Buttons */}
          {authUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3 focus:outline-none">
                <Avatar>
                  <AvatarImage src={authUser.userInfo?.image} />
                  <AvatarFallback className="bg-daba-green text-white">
                    {authUser.userRole?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="text-white text-sm font-arial-nova font-semibold hidden lg:block">
                  {authUser.userInfo?.name}
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-daba-teal">
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-daba-green/10 hover:text-daba-teal font-semibold"
                  onClick={() =>
                    router.push(
                      authUser.userRole?.toLowerCase() === "owner"
                        ? "/owners/properties"
                        : "/investors/favorites",
                      { scroll: false }
                    )
                  }
                >
                  Go to Dashboard
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-daba-green/20" />
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-daba-green/10 hover:text-daba-teal"
                  onClick={() =>
                    router.push(`/${authUser.userRole?.toLowerCase()}s/settings`, {
                      scroll: false,
                    })
                  }
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-daba-green/10 hover:text-daba-teal"
                  onClick={handleSignOut}
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/signin">
                <button className="bg-daba-green text-white text-sm font-arial-nova font-semibold hover:bg-daba-light-teal transition-all duration-300 py-2 px-4 rounded-lg shadow-md hover:shadow-lg">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-daba-teal text-white text-sm font-arial-nova font-semibold hover:bg-daba-light-teal transition-all duration-300 py-2 px-4 rounded-lg shadow-md hover:shadow-lg">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button (Visible on Medium Devices and Below) */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Image
            src={menu}
            alt="menu"
            width={40}
            height={40}
            className="text-white hover:opacity-80 transition-opacity"
          />
        </button>

        {/* Mobile Navigation (Visible on Medium Devices and Below) */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="md:hidden fixed top-0 right-0 w-72 h-screen bg-daba-teal/95 text-white flex flex-col items-start px-8 pt-16 space-y-6 shadow-2xl backdrop-blur-md"
        >
          {/* Close Button */}
          <button className="absolute top-4 right-7 focus:outline-none" onClick={closeMenu}>
            <IoMdClose
              className="text-white text-2xl hover:opacity-80 transition-opacity"
              size={40}
            />
          </button>

          {/* Mobile Menu Items */}
          {links.map((link, i) => (
            <div key={i} className="w-full">
              <div className="flex items-center justify-between">
                <Link
                  href={link.url}
                  className="text-lg font-arial-nova font-semibold text-white hover:text-daba-light-teal transition-colors duration-300 py-2"
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(i)}
                    className="focus:outline-none"
                  >
                    <Image
                      src={rightArrow}
                      width={16}
                      height={16}
                      alt="dropdown icon"
                      className={`text-white transition-transform duration-300 ${
                        mobileDropdownOpen === i ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {link.dropdown && mobileDropdownOpen === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="ml-0 mt-2 rounded-lg py-2 bg-white shadow-2xl w-full"
                >
                  {link.dropdown.map((item, j) => (
                    <Link
                      key={j}
                      href={item.url}
                      className="block px-3 py-2 text-sm text-gray-700 font-arial-nova hover:bg-daba-green/10 hover:text-daba-teal rounded-md transition-all duration-200"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Mobile Dashboard Action (Visible on Dashboard Pages for Authenticated Users) */}
          {isDashboardPage && authUser && (
            <Button
              variant="secondary"
              className="w-full bg-daba-green/80 text-white hover:bg-daba-green hover:text-white text-base font-arial-nova font-semibold transition-all duration-300 py-2 px-4 rounded-lg shadow-md hover:shadow-lg mt-4"
              onClick={() =>
                router.push(
                  authUser.userRole?.toLowerCase() === "owner"
                    ? "/owners/newproperty"
                    : "/search"
                )
              }
            >
              {authUser.userRole?.toLowerCase() === "owner" ? (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Property
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </>
              )}
            </Button>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;