import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Comparison } from './components/Comparison';
import { UseCases } from './components/UseCases';
import { BrandBenefits } from './components/BrandBenefits';
import { SpaceBenefits } from './components/SpaceBenefits';
import { Safety } from './components/Safety';
import { CTA } from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <UseCases />
      <BrandBenefits />
      <SpaceBenefits />
      <Safety />
      <CTA />
    </div>
  );
}
