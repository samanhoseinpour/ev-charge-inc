import {
  FAQs,
  HomeHero,
  WhyTruck,
  Loader,
  Team,
  ServicesSlider,
} from "./components";
import { homeFAQs } from "./constants/constants";

export default function Home() {
  return (
    <main>
      <HomeHero />
      {/* <Loader text="We're Under Maintenance..." /> */}
      <ServicesSlider />
      <WhyTruck />
      {/* <Team /> */}
      <FAQs faqs={homeFAQs} />
    </main>
  );
}
