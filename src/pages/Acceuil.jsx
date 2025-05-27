import HeroCarousel from "../components/sliderHero";
import Header from "../components/Header";
import CTA from "../components/CTA";
import ServicesFooter from "../components/Footer";
import SerStatPro from "../components/SerStatPro";
import PageLayout from "../components/PageLayout";
import acceuilCTA from "../assets/images/acceuilCTA.jpg";



const Acceuil = () => {
    return (
        <PageLayout>
            <main className="flex overflow-hidden flex-col bg-white">
                <Header />
                <HeroCarousel />
                <SerStatPro/>
                <CTA title="Vous souhaitez collaborer avec nous sur de nouveaux projets ?" callToAction=" Contactez-nous" image={acceuilCTA}/>
                <ServicesFooter/>
            </main>
        </PageLayout>
    )
}

export default Acceuil;