
import Hero from '../components/sections/Hero';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="BetterCebu | Cebu Government Transparency"
        description="BetterCebu is an independent citizen-led transparency initiative covering Cebu Province, its cities, municipalities, public officials, budgets, and public records."
        keywords="BetterCebu, Cebu transparency, Cebu government, Cebu budgets, public officials, government accountability"
      />

      <main className="flex-grow">
        <Hero />
        <GovernmentActivitySection />
      </main>
    </>
  );
};

export default Home;
