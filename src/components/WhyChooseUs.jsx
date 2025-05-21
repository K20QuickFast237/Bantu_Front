import React from 'react';
import service3 from '../assets/images/service3.jpg'

const BenefitCard = ({ icon, title, description, className = '' , variant = 'default'}) => {
  const isgradient = variant === 'gradient';
  return (
    <article className={`flex flex-col grow items-start px-8 py-5 rounded-3xl ${
      isgradient ? 'text-white bg-gradient-to-br from-green-600 to-green-100' : 'bg-white'
    } ${className}`}>
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-20 aspect-square"
      />
      <h3 className={`mt-1.5 text-2xl font-semibold  ${
        isgradient ? 'text-white' : 'text-neutral-800'
      }`}>
        {title}
      </h3>
      <p className={`mt-3 text-base ${
        isgradient ? 'text-white' : 'text-gray-500'
      }`}>
        {description}
      </p>
    </article>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col items-center px-16 w-full bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="z-10 w-full max-w-[1220px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[64%] max-md:w-full">
            <div className="flex flex-col py-20 self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-8 self-start text-base font-semibold text-green-500 uppercase whitespace-nowrap">
                <div className="shrink-0 my-auto h-px bg-green-500 border border-green-500 border-solid w-[170px]" />
                <span className="text-green-500">Choix</span>
              </div>

              <h2 className="mt-3.5 text-5xl font-bold text-black max-md:max-w-full">
                Découvrez Pourquoi choisir TNK Synergies ?
              </h2>

              <div className="grid grid-cols-2 gap-5 mt-10 max-md:grid-cols-1">
                <BenefitCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6c361f521e740097394114f8965236c3cbc37339?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                  title="Solutions adaptées à l'Afrique"
                  description="Une parfaite compréhension des enjeux locaux pour des projets pertinents."
                  className="bg-white"
                  variant='gradient'
                />
                <BenefitCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/05a5d1060db28d6ffdebc45301e766f593a3d474?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                  title="Des résultats concrets"
                  description="Nos projets créent de la valeur pour les communautés."
                  className="bg-white"
                />
                <BenefitCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/028385668d31043ed7acc6e439046be3be022a91?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                  title="Collaboration durable"
                  description="Nous travaillons main dans la main avec nos partenaires et bénéficiaires."
                  className="bg-white"
                />
                <BenefitCard
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7b923bbd8d6deccee7ab56fc7a6b0abff3207d96?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                  title="Technologie au service de tous"
                  description="Des solutions innovantes mais accessibles à tous."
                  className="bg-white"
                />
              </div>
            </div>
          </div>
          <div className="ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <img
              src={service3}
              alt="Why choose us illustration"
              className="h-full w-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
