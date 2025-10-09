"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import BtnLogout from "./btn-logout";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Navbar() {
  const { data: user} = useAuth();
const [openProfile, setOpenProfile] = useState(false);
const [openInfo, setOpenInfo] = useState(false);


  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-teal-700/90 to-cyan-600/90 backdrop-blur-md border-b border-white/20 shadow-lg px-6 md:px-10">
      <div className="flex h-16 items-center justify-between">
        {/* Menu Desktop */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="relative text-white font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Profile */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent className="p-5 flex flex-col gap-3 bg-white shadow-lg rounded-lg min-w-[200px]">
                <Link href="/profile" className="hover:text-teal-600">
                  Profile Sekolah
                </Link>
                <Link href="/profile" className="hover:text-teal-600">
                  Visi & Misi
                </Link>
                <Link href="/profile" className="hover:text-teal-600">
                  Siswa
                </Link>
                <Link href="/profile" className="hover:text-teal-600">
                  Kepala Sekolah
                </Link>
                <Link href="/guru" className="hover:text-teal-600">
                  Guru
                </Link>
                <Link href="/profile" className="hover:text-teal-600">
                  Extrakulikuler
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Informasi */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Informasi</NavigationMenuTrigger>
              <NavigationMenuContent className="p-5 flex flex-col gap-3 bg-white shadow-lg rounded-lg min-w-[200px]">
                <Link href="/prestasi" className="hover:text-teal-600">
                  Prestasi
                </Link>
                <Link href="/berita" className="hover:text-teal-600">
                  Berita
                </Link>
                <Link href="/informasi" className="hover:text-teal-600">
                  Informasi
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/galeri"
                  className="relative text-white font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Galeri
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/ppdb-mts-al-aqsha"
                  className="relative text-white font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  PPDB MTS
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="p-6 h-screen overflow-y-auto bg-white"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <SheetTitle hidden />

              {/* Home */}
              <Link href="/" className="hover:text-teal-600">
                Home
              </Link>

              {/* Profile */}
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center justify-between hover:text-teal-600"
              >
                <span className="font-semibold">Profile</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openProfile ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openProfile && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-2 pl-4 overflow-hidden"
                  >
                    <Link href="/profile" className="hover:text-teal-600">
                      Profile Sekolah
                    </Link>
                    <Link href="/profile" className="hover:text-teal-600">
                      Visi & Misi
                    </Link>
                    <Link href="/profile" className="hover:text-teal-600">
                      Siswa
                    </Link>
                    <Link href="/profile" className="hover:text-teal-600">
                      Kepala Sekolah
                    </Link>
                    <Link href="/guru" className="hover:text-teal-600">
                      Guru
                    </Link>
                    <Link href="/profile" className="hover:text-teal-600">
                      Extrakulikuler
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Informasi */}
              <button
                onClick={() => setOpenInfo(!openInfo)}
                className="flex items-center justify-between hover:text-teal-600"
              >
                <span className="font-semibold">Informasi</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openInfo ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openInfo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-2 pl-4 overflow-hidden"
                  >
                    <Link href="/prestasi" className="hover:text-teal-600">
                      Prestasi
                    </Link>
                    <Link href="/berita" className="hover:text-teal-600">
                      Berita
                    </Link>
                    <Link href="/informasi" className="hover:text-teal-600">
                      Informasi
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Lainnya */}
              <Link href="/galeri" className="hover:text-teal-600">
                Galeri
              </Link>
              <Link href="/ppdb-mts-al-aqsha" className="hover:text-teal-600">
                PPDB MTS
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        {/* Auth Button */}
        <div className="flex items-center gap-3">
          {user && <BtnLogout />}
          {!user && (
            <Button className="bg-white text-teal-700 hover:bg-gray-300 hover:text-black transition-colors">
              <Link href="/contact">Contact</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
