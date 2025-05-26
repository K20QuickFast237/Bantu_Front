import Header from '../components/Header'
import ContactHero from '../components/ContactHero'
import NosContacts from '../components/NosContacts'
import Formulaire from '../components/Formulaire'
import Faq from '../components/Faq'
import ServicesFooter from "../components/Footer";


function Contact() {
    return(
        <>
        <Header />
        <ContactHero />
        <NosContacts />
        <Formulaire />
        <Faq/>
        <div className="w-full bg-white pt-20 pr-20 pl-20    h-96 rounded-lg overflow-hidden ">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127353.98199467837!2d9.7121315!3d4.0587326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1748035696192!5m2!1sfr!2scm" 
        width="100%" 
        height="100%" 
        style={{border: 0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
    <ServicesFooter/>
        </>
    )
}

export default Contact
