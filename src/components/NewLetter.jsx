"use client";
import React from 'react';

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
              <button
                type="submit"
                className="gap-2.5 self-stretch px-5 py-2.5 text-base font-semibold text-white whitespace-nowrap bg-green-500 rounded-lg"
              >
                Souscrire
              </button>
            </form>
          </div>
        </div>
        <div className="ml-5 w-[28.5%] ">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e7836da8eb607fcaa5d3b7a47056eb46833ef7?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
            alt="Newsletter illustration"
            className="mt-[-218px]"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
