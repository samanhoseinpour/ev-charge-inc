import { FAQs, HomeHero, WhyTruck, Loader } from "./components";
import { homeFAQs } from "./constants/constants";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Loader text="We're Under Maintenance..." />
      <WhyTruck />
      <FAQs faqs={homeFAQs} />
    </main>
  );
}
