import { FAQs, HomeHero, Loader } from "./components";
import { homeFAQs } from "./constants/constants";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Loader text="We're Under Maintenance..." />
      <FAQs faqs={homeFAQs} />
    </main>
  );
}
