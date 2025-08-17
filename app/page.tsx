import {
  FAQs,
  HomeHero,
  WhyTruck,
  Team,
  ServicesSlider,
  FeatureListHome,
  ComparisonTable,
} from "./components";
import { homeFAQs } from "./constants/constants";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ServicesSlider />
      <FeatureListHome />
      <WhyTruck />
      <ComparisonTable />
      {/* <Team /> */}
      <FAQs faqs={homeFAQs} />
    </main>
  );
}
