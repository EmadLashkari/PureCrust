import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Production from "@/components/sections/Production";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Production />
    </main>
  );
}
