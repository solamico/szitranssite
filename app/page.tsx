import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* More sections will go here in Week 2-3 */}
      </main>
      <Footer />
    </>
  );
}
