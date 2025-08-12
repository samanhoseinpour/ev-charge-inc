import { Lamp, MagicBento } from "../components";

export const metadata = {
  title: "About Us | EV Charge Inc.",
  description:
    "Learn more about EV Charge Inc., our mission, vision, and the innovative EV charging solutions we provide.",
  keywords: [
    "EV charging",
    "electric vehicles",
    "sustainable energy",
    "About EV Charge Inc",
  ],
};

const AboutPage = () => {
  return (
    <main>
      <Lamp />
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={36}
        glowColor="255 ,255 ,255"
      />
    </main>
  );
};

export default AboutPage;
