import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';


const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      role: t('testimonials.testimonial1.role'),
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      content: t('testimonials.testimonial1.content'),
    },
    {
      name: t('testimonials.testimonial2.name'),
      role: t('testimonials.testimonial2.role'),
      image:
        "https://images.unsplash.com/photo-1603415526960-f8f0a1f95edf?auto=format&fit=crop&w=400&q=80",
      content: t('testimonials.testimonial2.content'),
    },
    {
      name: t('testimonials.testimonial3.name'),
      role: t('testimonials.testimonial3.role'),
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      content: t('testimonials.testimonial3.content'),
    },
    {
      name: t('testimonials.testimonial4.name'),
      role: t('testimonials.testimonial4.role'),
      image:
        "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=400&q=80",
      content: t('testimonials.testimonial4.content'),
    },
    {
      name: t('testimonials.testimonial5.name'),
      role: t('testimonials.testimonial5.role'),
      image:
        "https://images.unsplash.com/photo-1614281264946-0af2c61890f2?auto=format&fit=crop&w=400&q=80",
      content: t('testimonials.testimonial5.content'),
    },
  ];

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Nettoyage
  }, [testimonials.length]);

  return (
    <div className="bg-[#E9EEF6] py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-black font-semibold text-5xl mb-2">
        {t('testimonials.title')}
      </h2>
      
        <span className=" h-10 w-90 bg-blue-600 mt-8"></span>
        <h3 className="text-green-500 mt-[-80px] font-bold text-6xl mb-6">
        {t('testimonials.clients')}
      </h3>

      <div className="bg-white rounded-xl mt-10 p-6 w-full max-w-xl shadow-md relative flex flex-col md:flex-row items-start gap-4">
        <div className="flex-1">
          <div className="text-9xl font-bold mt-[-60px] text-blue-600 mb-2">“</div>
          <p className="font-bold text-xl mt-[-60px]">{testimonials[currentIndex].name}</p>
          <p className="text-xl text-gray-900 mb-4">
            {testimonials[currentIndex].role}
          </p>
          <p className="whitespace-pre-line">
            {testimonials[currentIndex].content}
          </p>
        </div>

        <OptimizedImage
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-50 h-50 object-cover rounded-md"
        />
      </div>

      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#0078D4]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;