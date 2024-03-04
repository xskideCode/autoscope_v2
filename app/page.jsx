import Hero from "@/components/Hero";
import Imgbg from "@/components/Imgbg";
import Intro from "@/components/Intro";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="app">
      <Hero />
      <Intro />
      <Imgbg />
      <Services />
    </main>
  );
}
