import React from 'react';
import Logo from '../assets/images/logo.svg'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import Button from './Button';
import NewLetter from '../assets/images/NewLetter.png'
import { motion } from 'framer-motion';


const NewsletterSection = () => {
  return (
    <section className="self-center mt-25 max-w-full rounded-[30px] px-20 max-md:px-5 max-md:mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 max-md:flex-col bg-gradient-to-br from-[#33C12B] to-green-600 h-[300px] max-md:h-auto rounded-l-[30px] rounded-tr-[30px]"
      >
        <div className="w-[69%] max-md:w-full">
          <div className="flex flex-col px-20 py-16 w-full max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-white leading-tight max-md:text-2xl max-md:max-w-full">
              Recevez les dernières nouvelles et offres spéciales pour vous
            </h2>

            <form className="flex justify-between py-2 pr-3 pl-9 mt-12 w-full bg-white rounded-2xl max-md:flex-col max-md:gap-4 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <input
                type="email"
                placeholder="Entrer votre adresse mail ici"
                className="my-auto text-lg text-gray-600 bg-transparent outline-none w-[80%] max-md:w-full"
              />
              <Button variant="filled" color="green" type="submit" className="max-md:w-full">
                Souscrire
              </Button>
            </form>
          </div>
        </div>
        <div className="ml-6 w-[27.5%] max-md:hidden">
          <img
            src={NewLetter}
            alt="Newsletter illustration"
            className="mt-[-189px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex flex-col items-start px-20 mt-10 w-full bg-[#3974EA] max-md:px-5">
      <div className="z-10 mt-0 w-full py-20 max-md:py-10">
        <div className="flex gap-20 max-md:flex-col max-md:gap-10">
          <div className="w-[50%] h-full bg-white/20 backdrop-blur-lg rounded-lg px-16 py-8 space-y-6 max-md:w-full max-md:px-8">
            <img
              src={Logo}
              alt="Company logo"
              className="w-[40%] cursor-pointer mix-blend-multiply max-md:w-[60%]"
            />
            <p className="text-sm text-white">
              TNK Synergies Ltd est une entreprise axée sur l'innovation, dédiée au développement de projets technologiques et communautaires visant à autonomiser les communautés africaines.
            </p>
          </div>
          
          <nav className="ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <div className="grid grid-cols-2 justify-between items-start max-md:grid-cols-2 max-md:justify-between">
              <div className="w-[50%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    Informations
                  </h3>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#" 
                    className="self-start mt-8 max-md:mt-4"
                  >
                    FAQ
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/blog" 
                    className="mt-2.5"
                  >
                    Blog et actualités
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#" 
                    className="self-start mt-2.5"
                  >
                    Support
                  </motion.a>
                </div>
              </div>
              <div className="w-[50%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    Liens Utiles
                  </h3>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/about" 
                    className="mt-3"
                  >
                    A propos
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/projets" 
                    className="mt-2.5"
                  >
                    Nos Projets
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/services" 
                    className="mt-2.5"
                  >
                    Services
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/contact" 
                    className="mt-2.5"
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex shrink-0 self-center max-w-full h-px bg-white/20 w-full max-md:mt-10" />

      <nav className="flex justify-between items-center w-full py-10 max-md:flex-col max-md:gap-6">
        <div className='flex gap-10 max-md:flex-col max-md:gap-4 max-md:items-center'>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            Termes
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            confidentialité
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            Cookies
          </motion.a>
        </div>
        <div className='flex gap-6 text-white'>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaFacebookF />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaLinkedinIn />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaTwitter />
          </motion.div>
        </div>
      </nav>

      <motion.div 
        onClick={() => window.open('https://wa.me/+237671526369', '_blank')}
        whileHover={{ scale: 1.1, backgroundColor: "#33C12B" }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
        // onClick={scrollToTop}
        className='fixed bottom-32 right-8 w-12 h-12 rounded-full bg-green-500 shadow-lg flex flex-col justify-center items-center cursor-pointer z-50'
      >
        <FaWhatsapp className='text-white text-3xl' />
      </motion.div>
    </footer>
  );
};


const ServicesFooter = () => {
  return(
    <>
      <NewsletterSection/>
      <Footer/>
    </>
  );
};
export default ServicesFooter;
