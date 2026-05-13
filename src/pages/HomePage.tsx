import { CursorRing } from "../components/CursorRing";
import { HomeBrands } from "../components/home/HomeBrands";
import { HomeFeatured } from "../components/home/HomeFeatured";
import { HomeHero } from "../components/home/HomeHero";
import { HomePillars } from "../components/home/HomePillars";
import { HomeStudio } from "../components/home/HomeStudio";

export function HomePage() {
  return (
    <>
      <CursorRing />
      <HomeHero />
      <HomePillars />
      <HomeFeatured />
      <HomeStudio />
      <HomeBrands />
    </>
  );
}
