import { HomeHero, Loader } from "./components";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Loader text="We're Under Maintenance..." />
    </main>
  );
}
