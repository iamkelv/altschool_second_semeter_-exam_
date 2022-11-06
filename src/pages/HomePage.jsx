import { BottomHero } from "../components/BottomHero";
import { HeroSection } from "../components/HeroeSection";
import { Helmet } from "react-helmet";
export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Altschool Exam</title>
        <meta name="description" content="Welcome to altschool Student Exam " />
      </Helmet>
      <HeroSection />
      <BottomHero />
    </div>
  );
};
