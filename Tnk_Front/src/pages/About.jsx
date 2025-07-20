import AboutHero from "../components/AboutHero"
import Header from '../components/Header';
import Mission from "../components/Mission"
import Valeurs from "../components/Valeurs"
import Partenaires from "../components/Partenaires"
import Teams from "../components/Teams"
import CTA from "../components/CTA"
import aboutCTA from "../assets/images/aboutCTA.jpg";
import PageLayout from "../components/PageLayout";
import ServicesFooter from "../components/Footer";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageLayout>
        <main className="flex overflow-hidden flex-col bg-white">  
          <Header />
          <AboutHero />
          <Mission />
          <Valeurs />
          <Partenaires />
          <Teams />
          <CTA 
            title={t('cta.join_innovation')} 
            callToAction={t('cta.subscribe')} 
            image={aboutCTA}
          />
          <ServicesFooter/>
        </main>
      </PageLayout>
    </>
  );
}

export default About;