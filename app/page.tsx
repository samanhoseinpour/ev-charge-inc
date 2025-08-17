import {
  FAQs,
  HomeHero,
  WhyTruck,
  Team,
  ServicesSlider,
  FeatureListHome,
} from "./components";
import { homeFAQs } from "./constants/constants";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ServicesSlider />
      <FeatureListHome />
      <WhyTruck />
      {/* <Team /> */}
      <FAQs faqs={homeFAQs} />
    </main>
  );
}
