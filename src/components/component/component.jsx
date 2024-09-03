"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import VantaEffect from "./VantaEffect";
import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
  Globe,
  Megaphone,
  Handshake,
  UserCog,
} from "lucide-react";

export function Component() {
  const [activeLink, setActiveLink] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-primary text-secondary" : "bg-white text-black"
      }`}
    >
      <header className="fixed top-0 left-0 right-0 bg-primary text-secondary py-2 px-6 md:py-4 md:px-10 shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="#home"
            className="flex items-center gap-2"
            prefetch={false}
          >
            <img src="logo1.png" className="h-12" alt="Logo" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
            <Link
              href="#home"
              onClick={() => setActiveLink("home")}
              className={`${
                activeLink === "home" ? "font-bold text-accent" : ""
              } hover:text-accent transition`}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={() => setActiveLink("services")}
              className={`${
                activeLink === "services" ? "font-bold text-accent" : ""
              } hover:text-accent transition`}
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={() => setActiveLink("about")}
              className={`${
                activeLink === "about" ? "font-bold text-accent" : ""
              } hover:text-accent transition`}
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setActiveLink("contact")}
              className={`${
                activeLink === "contact" ? "font-bold text-accent" : ""
              } hover:text-accent transition`}
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            {/* <Button
              variant="outline"
              size="icon"
              aria-label="Toggle dark mode"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </Button> */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative min-h-[200px] h-auto z-0">
          <VantaEffect />
        </section>

        <section
          id="services"
          className={`py-20 md:py-32 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Services
              </h2>

              <p className="md:text-lg">
                Stratize offers a wide range of services to help businesses succeed
                in the digital age.
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-card p-6 border-red-500">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <CodeIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Web Development</h3>
                  <p className="text-muted">
                    Custom software solutions crafted by our experienced
                    developers to meet your unique business needs.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 drop-shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <UserCog className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Profile Optimization</h3>
                  <p className="text-muted">
                    Harness the power of your data with our advanced analytics
                    and business intelligence services.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  <Handshake className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Business Advisory</h3>
                  <p className="text-muted">
                    Navigate cloud migration and optimization with guidance from
                    our expert cloud consultants.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Megaphone className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Marketing</h3>
                  <p className="text-muted">
                    Elevate your brand with data-driven marketing strategies and
                    solutions.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">SEO</h3>
                  <p className="text-muted">
                    Enhance your online visibility and drive growth with our
                    tailored SEO strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`py-20 md:py-32 ${
            isDarkMode ? "bg-dark-muted text-white" : "bg-light-muted text-black"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <img
                  src="p5.jpg"
                  width="400"
                  height="200"
                  alt="About Image"
                  className="mx-auto rounded-lg object-cover"
                  style={{ aspectRatio: "400/200", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  About Us
                </h2>
                <p className="md:text-lg">
                  At Stratize., we're not just service providers; we're your
                  partners in success. Our focus is on delivering high-quality,
                  personalized solutions that exceed expectations. Whether
                  you're a startup seeking to establish a strong market presence
                  or a professional aiming to elevate your career profile, we've
                  got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`py-20 md:py-32 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mt-4">
                Have a question or want to learn more? Contact us today.
              </p>
            </div>
            <form className="bg-card shadow-2xl p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black font-semibold">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <Textarea
                placeholder="Message"
                className="w-full mt-4 text-black font-semibold"
                rows={5}
              />
              <Button type="submit" className="mt-4 w-full ">
                Submit
              </Button>
            </form>
          </div>
        </div>
        </section>
      </main>

      <footer className="bg-primary text-secondary py-4 text-center">
        <p>&copy; 2024 Stratize. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
