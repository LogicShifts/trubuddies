import Image from "next/image";
import Hero from "@/section/hero";
import Footer from "@/components/footer";
import Header from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
