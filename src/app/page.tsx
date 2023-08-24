import Image from "next/image";
import Hero from "@/section/hero";
import Footer from "@/components/footer/footer";
import Header from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
