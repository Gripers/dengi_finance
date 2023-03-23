import FirstSection from '@/components/scts/fst-sct/FirstSection';
import Header from '@/components/header/Header';
import SecondSection from '@/components/scts/sec-sct/SecondSection';
import ThirdSection from '@/components/scts/thr-sct/ThirdSection';
import FourthSection from '@/components/scts/frt-sct/FourthSection';
import About from '@/components/scts/about/About';
import OurTeam from '@/components/scts/our-team/OurTeam';

const HomePage = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <About />
      <OurTeam />
    </>
  );
};

export default HomePage;
