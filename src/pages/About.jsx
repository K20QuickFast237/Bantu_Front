import AboutHero from "../components/AboutHero"
import Header from '../components/Header';
import Mission from "../components/Mission"
import Valeurs from "../components/Valeurs"
import Partenaires from "../components/Partenaires"
import Teams from "../components/Teams"
import CTA from "../components/CTA"
import acceuilCTA from "../assets/images/acceuilCTA.jpg";
import PageLayout from "../components/PageLayout";

import ServicesFooter from "../components/Footer";


function About(){
     return(
        <>
        <PageLayout>
            <main className="flex overflow-hidden flex-col bg-white">  
                <Header />
                <AboutHero />
                <Mission />
                <Valeurs />
                <Partenaires />
                <Teams />
                <CTA title="Rejoignez nous pour plus d'innovation" callToAction=" Rejoignez notre communaute" image={acceuilCTA}/>
                <ServicesFooter/>
            </main>
        </PageLayout>
        </>
     )
}

export default About