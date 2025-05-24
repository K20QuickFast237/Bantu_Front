import HeroCarousel from "../components/sliderHero";
import Header from "../components/Header";
import CTA from "../components/CTA";
import ServicesFooter from "../components/Footer";
import SerStatPro from "../components/SerStatPro";
import PageLayout from "../components/PageLayout";



const Acceuil = () => {
    return (
        <PageLayout>
            <Header />
            <HeroCarousel />
            <SerStatPro/>
            <CTA title="Vous souhaitez collaborer avec nous sur de nouveaux projets ?" callToAction=" Contactez-nous" image="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"/>
            <ServicesFooter/>
        </PageLayout>
    )
}

export default Acceuil;