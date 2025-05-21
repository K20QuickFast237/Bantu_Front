import React from 'react';

const ServiceCard = ({
  icon,
  title,
  description,
  variant = 'default',
  className = ''
}) => {
  const isgradient = variant === 'gradient';

  return (
    <article className={`flex flex-col items-start px-10 pt-10 pb-4 w-full text-base font-semibold rounded-3xl ${
      isgradient ? 'text-white bg-gradient-to-br from-sky-600 to-blue-100' : 'bg-white'
    } ${className}`}>
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-20 aspect-square"
      />
      <h3 className={`mt-2.5 text-2xl ${
        isgradient ? 'text-white' : 'text-neutral-800'
      }`}>
        {title}
      </h3>
      <p className={`font-normal mt-2.5 ${
        isgradient ? 'text-white' : 'text-gray-500'
      }`}>
        {description}
      </p>
      <div className={`flex gap-3.5 mt-8 uppercase cursor-pointer ${
        isgradient ? 'text-white' : 'text-sky-600'
      }`}>
        <span className="grow">En savoir plus</span>
        <img
          src={isgradient ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6c4add3c62eec96966a6e88cb099a7dc7ae4ad0f?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab" : "https://cdn.builder.io/api/v1/image/assets/TEMP/2721cc9bce8f85e4129db62b89833e6aafd3d731?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"}
          alt="Arrow icon"
          className={`object-contain shrink-0 my-auto aspect-[1/1] w-[15px] ${
            isgradient ? 'fill-white' : 'fill-sky-600'
          }`}
        />
      </div>
    </article>
  );
};

const ServicesShowcase = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-20 mt-1 w-full bg-gray-50 ">
      <div className="flex flex-col w-full max-w-[1217px] max-md:max-w-full">
        <div className="flex flex-wrap gap-8 self-center max-w-full text-xl font-semibold text-sky-600 uppercase w-[498px]">
          <div className="shrink-0 my-auto h-px bg-sky-600 border border-sky-600 border-solid w-[170px]" />
          <h2 className="flex-auto text-sky-600 w-[264px]">
            Services que nous offrons
          </h2>
        </div>
        <h3 className="self-center mt-14 ml-7 text-5xl font-bold text-center capitalize text-neutral-800 w-[854px] max-md:mt-10 max-md:max-w-full">
          explorez notre gamme complète de services conçus pour élever vos projets.
        </h3>

        <div className="grid grid-cols-3 gap-5 mt-14 max-md:grid-cols-1 max-md:mt-10">
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5e983adaf13233615cbc2737e0ea06a719d17a72?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Développement Tech"
            description="Solutions numériques adaptées aux besoins locaux."
            variant="gradient"
          />
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1bcb7106489ec19f016c9c371758a571a316dd?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Incubation"
            description="Accompagnement des startups et projets innovants."
          />
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0f453f1386e1cf6fd38ebed2a6e0db57c5859895?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Conseil"
            description="Expertise stratégique pour réussir vos initiatives."
          />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6 max-md:grid-cols-1">
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Autonomisation"
            description="Nous créons des initiatives pour renforcer les capacités locales."
          />
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Autonomisation"
            description="Nous créons des initiatives pour renforcer les capacités locales."
          />
          <ServiceCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            title="Autonomisation"
            description="Nous créons des initiatives pour renforcer les capacités locales."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
