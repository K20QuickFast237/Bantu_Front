import React from 'react';
import service2 from '../assets/images/service2.jpg'

const ApproachStep = ({ number, title, description }) => (
  <div className="">
    <div className="flex gap-9 self-start">
      <span className="text-4xl font-semibold text-sky-600">
        {number}.
      </span>
      <div className='flex flex-col gap-y-2'>
        <h3 className="flex-auto my-auto text-2xl font-medium text-neutral-800">
          {title}
        </h3>
        <p className="text-base text-black">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ApproachSection = () => {
  return (
    <section className="self-center py-24 ml-2.5 w-full px-16">
      <div className="flex gap-5 items-center">
        <div className="w-[36%]">
          <img
            src={service2}
            alt="Approach illustration"
            className="h-[550px] w-full object-cover rounded-3xl"
          />
        </div>
        <div className="ml-5 w-[64%]">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-8 self-start text-base font-semibold text-sky-600 uppercase whitespace-nowrap">
              <div className="shrink-0 my-auto h-px bg-sky-600 border border-sky-600 border-solid w-[170px]" />
              <span className="text-sky-600">approches</span>
            </div>

            <h2 className="mt-3.5 text-5xl font-bold text-black max-md:max-w-full">
              Découvrez Notre approche en 3 étapes clés
            </h2>

            <div className="flex flex-col gap-16 mt-10">
              <ApproachStep
                number="01"
                title="Diagnostic des besoins."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              />
              <ApproachStep
                number="02"
                title="Co-construction des solutions."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              />
              <ApproachStep
                number="03"
                title="Suivi et accompagnement."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
