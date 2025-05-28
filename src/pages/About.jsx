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
              
            <Header />
            <AboutHero />
            <Mission />
            <Valeurs />
            <Partenaires />
            <Teams />
            <CTA title="Rejoignez nous pour plus d'innovation" callToAction=" Rejoignez notre communaute" image={acceuilCTA}/>
            <ServicesFooter/>

        </PageLayout>
        </>
     )
}

export default About