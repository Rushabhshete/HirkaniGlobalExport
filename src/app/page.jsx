import Hero from "@/components/Hero";
import HomeSectionsClient from "@/components/HomeSectionsClient";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Hero />
      <HomeSectionsClient />
    </main>
  );
}
