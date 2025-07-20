import HeroCarousel from "../components/sliderHero";
import Header from "../components/Header";
import CTA from "../components/CTA";
import ServicesFooter from "../components/Footer";
import SerStatPro from "../components/SerStatPro";
import PageLayout from "../components/PageLayout";
import acceuilCTA from "../assets/images/acceuilCTA.jpg";
import { useTranslation } from 'react-i18next';

const Acceuil = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <main className="flex overflow-hidden flex-col bg-white">
        <Header />
        <HeroCarousel />
        <SerStatPro />
        <CTA 
          title={t('cta.collaborate')} 
          callToAction={t('cta.contact')} 
          image={acceuilCTA}
        />
        <ServicesFooter />
      </main>
    </PageLayout>
  );
};

export default Acceuil;