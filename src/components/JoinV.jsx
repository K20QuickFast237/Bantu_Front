"use client";
import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/j1.png';
import backgroundImage2 from '../assets/images/j2.png';
import backgroundImage3 from '../assets/images/j3.png';
import backgroundImage4 from '../assets/images/j4.png';
import backgroundImage5 from '../assets/images/j5.png';
import backgroundImage6 from '../assets/images/j6.png';
import { FileText, Clock, Users } from 'lucide-react';

function JoinV() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Première ligne de cartes */}
      <div className="w-full relative flex flex-wrap justify-center gap-8 mt-[-60px] px-4 md:px-20 z-auto">
        {[backgroundImage, backgroundImage2, backgroundImage3].map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className="w-[300px] h-[280px] border-white border-2 bg-center bg-no-repeat bg-cover flex flex-col justify-start pt-32 pl-10"
          >
            <p className="text-white font-semibold text-2xl">
              {["Croissance", "Conception et ingénierie", "Communauté et engagement"][index]}
            </p>
            <p className="text-white text-lg pt-3">
              {[
                "Démarrer, Construire, Accélérer, Grandir",
                "Idéation / Création",
                "Co-créez des solutions. Faites-les connaître."
              ][index]}
            </p>
          </div>
        ))}
      </div>

      {/* Deuxième ligne de cartes */}
      <div className="w-full relative flex flex-wrap justify-center gap-8 mt-8 px-4 md:px-20 z-auto">
        {[backgroundImage4, backgroundImage5, backgroundImage6].map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className="w-[300px] h-[280px] border-white border-2 bg-center bg-no-repeat bg-cover flex flex-col justify-start pt-32 pl-10"
          >
            <p className="text-white font-semibold text-2xl">
              {["Finances et opérations", "Personnes", "Vivier de talents"][index]}
            </p>
            <p className="text-white text-lg pt-3">
              {[
                "Notre pilier. Créer des processus efficaces. Obtenir des résultats",
                "Trouvez des personnes exceptionnelles.",
                "Commencez votre carrière du bon pied."
              ][index]}
            </p>
          </div>
        ))}
      </div>

      {/* Section "qu'est-ce que vous y gagnez ?" */}
      <div className="bg-green-100 py-16 px-4 md:px-20 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-12 text-left">
            Qu'est-ce que vous y gagnez ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-10 h-10 text-white" />,
                text: "Une chance de travailler avec certains des esprits les plus innovants de tous les temps !",
              },
              {
                icon: <Clock className="w-10 h-10 text-white" />,
                text: "Travailler et « posséder » des projets importants",
              },
              {
                icon: <Users className="w-10 h-10 text-white" />,
                text: "Rencontres mensuelles et trimestrielles",
              },
              {
                icon: <FileText className="w-10 h-10 text-white" />,
                text: "Une chance de travailler avec certains des esprits les plus innovants de tous les temps !",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-900 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default JoinV;
