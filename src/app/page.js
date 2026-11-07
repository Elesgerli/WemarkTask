import { clientService } from "@/services/clientService";
import AboutSection from "./(components)/AboutSection";
import FAQSection from "./(components)/FAQSection";
import FounderSection from "./(components)/FounderSection";
import HeroSection from "./(components)/HeroSection";
import MarqueeSection from "./(components)/MarqueeSection";
import ProgramSection from "./(components)/ProgramSection";
import { makeStore } from "@/services/store";

export default async function Home() {
  const reduxStore = makeStore();

  const data = await reduxStore
    .dispatch(
      clientService.endpoints.getHomePage.initiate()
    )
    .unwrap();
  return (
    <main id="main">
      <HeroSection data={data} />
      <AboutSection data={data} />
      <FounderSection data={data} />
      <ProgramSection data={data} />
      <MarqueeSection data={data} />
      <FAQSection data={data} />
    </main>
  );
}
