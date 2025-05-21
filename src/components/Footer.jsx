import React from 'react';
import Logo from '../assets/images/logo.svg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import Button from './Button';
import NewLetter from '../assets/images/NewLetter.png'


const NewsletterSection = () => {
  return (
    <section className="self-center mt-36 max-w-full rounded-[30px] w-[1220px] max-md:pl-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col bg-gradient-to-br from-[#33C12B] to-green-600 h-[300px] rounded-l-[30px] rounded-tr-[30px]">
        <div className="w-[69%] max-md:w-full">
          <div className="flex flex-col px-20 py-16 w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-white leading-tight max-md:max-w-full">
              Recevez les dernières nouvelles et offres spéciales pour vous
            </h2>

            <form className="flex justify-between py-2 pr-3 pl-9 mt-12 w-full bg-white rounded-2xl max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <input
                type="email"
                placeholder="Entrer votre adresse mail ici"
                className="my-auto text-lg text-gray-600 bg-transparent outline-none w-[80%]"
              />
              <Button variant="filled" color="green" type="submit">
                Souscrire
              </Button>
            </form>
          </div>
        </div>
        <div className="ml-5 w-[28.5%] ">
          <img
            src={NewLetter}
            alt="Newsletter illustration"
            className="mt-[-218px]"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-start px-16 mt-20 w-full bg-[#3974EA] max-md:px-5">
      <div className="z-10 mt-0 w-full py-20">
        <div className="flex gap-20 max-md:flex-col">
          <div className="w-[50%] h-full bg-white/20 backdrop-blur-lg rounded-lg  px-16 py-8 space-y-6">
            <img
              src={Logo}
              alt="Company logo"
              className="w-[40%] cursor-pointer mix-blend-multiply"
            />
            <p className="text-sm text-white">
              TNK Synergies Ltd est une entreprise axée sur l'innovation, dédiée audéveloppement de projets technologiques et communautaires visant àautonomiser les communautés africaines.
            </p>
          </div>
          

          <nav className="ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-between items-center max-md:flex-col">
              <div className="w-[29%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    Informations
                  </h3>
                  <a href="#" className="self-start mt-8">FAQ</a>
                  <a href="#" className="mt-2.5">Blog et actualités</a>
                  <a href="#" className="self-start mt-2.5">Support</a>
                </div>
              </div>
              <div className="w-[29%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    Liens Utiles
                  </h3>
                  <a href="#" className="mt-3">A propos</a>
                  <a href="#" className="mt-2.5">Nos Projets</a>
                  <a href="#" className="mt-2.5">Services</a>
                  <a href="#" className="mt-2.5">Contact</a>
                </div>
              </div>
              <div className='w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center cursor-pointer'>
                <ArrowUp className='text-blue-500' />
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex shrink-0 self-center max-w-full h-px bg-white/20 w-full max-md:mt-10" />

      <nav className="flex justify-between items-center w-full py-10">
        <div className='flex gap-10'>
          <a href="#" className="text-white">Termes</a>
          <a href="#" className="text-white">confidentialité</a>
          <a href="#" className="text-white">Cookies</a>
        </div>
        <div className='flex gap-6 text-white'>
          <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
            <FaFacebookF />
          </div>
          <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
            <FaLinkedinIn />
          </div>
          <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
            <FaTwitter />
          </div>
        </div>
      </nav>
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
