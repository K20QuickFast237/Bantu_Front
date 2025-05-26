import AboutHero from "../components/AboutHero"
import Header from '../components/Header';
import Mission from "../components/Mission"
import Valeurs from "../components/Valeurs"
import Partenaires from "../components/Partenaires"
import Teams from "../components/Teams"
import CTAa from "../components/CtAa"
import ctaa from "../assets/images/ctaa.png"

import ServicesFooter from "../components/Footer";

function About(){
     return(
        <>
        <Header />
        <AboutHero />
        <Mission />
        <Valeurs />
        <Partenaires />
        <Teams />
        <CTAa title="Rejoignez nous pour plus d'innovation" callToAction=" Rejoignez notre communaute" image={ctaa}/>
        <ServicesFooter/>
        </>
     )
}

export default About