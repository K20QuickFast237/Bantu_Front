import Header from "../components/Header"
import JoinV from "../components/JoinV"
import JoinC from "../components/JoinC"
import HeroSection from '../components/Hero';
import ServicesFooter from "../components/Footer";
import PageLayout from "../components/PageLayout";
import sectionHero from '../assets/images/join2.jpg';
import { useTranslation } from 'react-i18next';

function Join_us() {
    const { t } = useTranslation();

    return (
        <PageLayout>
            <Header />
            <HeroSection
                image={sectionHero}
                overlayColor="bg-blue-950"
                overlayOpacity="opacity-40"
                title={t('join_us.hero.title')}
                titleColor="text-white"
                description={t('join_us.hero.description')}
                buttonText={t('projects.hero.button')}
                buttonLink="/contact"
                buttonColor="blue"
            />
            <JoinV />
            <JoinC />
            <ServicesFooter />
        </PageLayout>
    )
}

export default Join_us