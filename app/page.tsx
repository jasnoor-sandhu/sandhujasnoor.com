"use client";

import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Values from "@/components/Values";
import Background from "@/components/Background";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useReveal, useValuesFill } from "@/components/useReveal";

export default function Home() {
  useReveal();
  useValuesFill();

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Projects />
      <Values />
      <Background />
      <About />
      <Footer />
    </>
  );
}
