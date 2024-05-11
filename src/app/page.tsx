import { CardRevealedPointer } from "@/components/ui/CardRevealedPointer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Home from "./sections/home";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";
import Service from "./sections/service";



export default function Index() {
  return (
    <main className="bg-[#020007] min-h-screen">
      <Navbar/>
      <Home/>
      <Projects/>
      <Service/>
    </main>
  );
}
