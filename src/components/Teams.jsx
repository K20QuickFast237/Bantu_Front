import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import personne1 from "../assets/images/personne1.png";
import personne2 from "../assets/images/personne2.png";
import personne3 from "../assets/images/personne3.png";
import personne4 from "../assets/images/personne4.png";

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Amina Saidou",
      position: "Vice président de l'association",
      description: "Le VP de projet en développement web élabore la feuille de route technologique de l'entreprise, en alignant les projets web avec les objectifs commerciaux globaux. Il définit les priorités, les budgets et les indicateurs de performance clés (KPI)",
      avatar: personne1,
      miniDescription: "Élabore la stratégie tech",
      isMainPresenter: true
    },
    {
      id: 2,
      name: "M. Herman Donkeng",
      position: "Directeur des travaux",
      description: "Responsable de la supervision et de la coordination de tous les projets de développement en cours. Il assure la qualité des livrables et le respect des délais.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      miniDescription: "Supervise les projets"
    },
    {
      id: 3,
      name: "Mme Beatrice Esso",
      position: "Experte en développement fullstack",
      description: "Spécialisée dans le développement d'applications web complètes, de la conception frontend à l'architecture backend. Elle maîtrise les technologies modernes.",
      avatar: personne2,
      miniDescription: "Développement fullstack"
    },
    {
      id: 4,
      name: "M. Eyalla Peyina",
      position: "Gestionnaire des taches",
      description: "Coordonne les équipes de développement et optimise les processus de travail. Il veille à la bonne répartition des tâches et au suivi des projets.",
      avatar: personne3,
      miniDescription: "Coordonne les équipes"
    },
    {
      id: 5,
      name: "M. Lazar Nanfack",
      position: "Scrum master",
      description: "Facilite l'adoption des méthodologies agiles au sein des équipes. Il anime les cérémonies Scrum et supprime les obstacles au développement.",
      avatar: personne4,
      miniDescription: "Facilite les méthodes agiles"
    }
  ];

  const [currentMember, setCurrentMember] = useState(teamMembers[0]);

  const handlePreviousMember = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === currentMember.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
    const previousMember = teamMembers[previousIndex];
    setCurrentMember(previousMember);
  };

  const handleNextMember = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === currentMember.id);
    const nextIndex = currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;
    const nextMember = teamMembers[nextIndex];
    setCurrentMember(nextMember);
  };

  const handleMemberSelect = (member) => {
    setCurrentMember(member);
  };

  const otherMembers = teamMembers.filter(member => member.id !== currentMember.id);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <motion.p
        className="text-4xl sm:text-5xl lg:text-6xl pl-4 sm:pl-6 md:pl-10 lg:pl-20 my-5 font-bold text-blue-700 max-md:text-3xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.2 }}
      >
        Rencontrez l'équipe
      </motion.p>
      <div className="h-auto bg-blue-500">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 max-md:py-4">
          {/* Navigation arrows and main content */}
          <div className="mb-6 max-md:mb-2 pl-4 sm:pl-6 md:pl-10 lg:pl-20 pr-4 sm:pr-6 md:pr-10 lg:pr-20">
            {/* Desktop/Tablet: Arrows and single member display */}
            <div className="hidden md:flex items-center justify-between">
              {/* Left arrow */}
              <motion.button
                onClick={handlePreviousMember}
                className="w-10 h-10"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ delay: 0.4 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              {/* Main content area */}
              <motion.div
                className="flex-1 mx-4 sm:mx-6 md:mx-8 flex items-center justify-between"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.6 }}
              >
                {/* Text content */}
                <div className="flex-1 max-w-lg">
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.8 }}
                  >
                    {currentMember.name}
                  </motion.h1>
                  <motion.h2
                    className="text-lg sm:text-xl md:text-2xl text-white mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 1.0 }}
                  >
                    {currentMember.position}
                  </motion.h2>
                  <motion.p
                    className="text-white text-base sm:text-lg leading-relaxed"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 1.2 }}
                  >
                    {currentMember.description}
                  </motion.p>
                </div>

                {/* Profile image */}
                <motion.div
                  className="ml-4 sm:ml-6 md:ml-8"
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                  transition={{ delay: 1.4 }}
                >
                  <img
                    src={currentMember.avatar}
                    alt={currentMember.name}
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              {/* Right arrow */}
              <motion.button
                onClick={handleNextMember}
                className="w-10 h-10"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ delay: 0.4 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Mobile: Horizontal scrollable carousel */}
            <motion.div
              className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 py-2"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="snap-center flex-shrink-0 w-[85%] flex flex-col items-center bg-blue-600 rounded-lg p-4"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full mb-3"
                  />
                  <h1 className="text-2xl font-bold text-white text-center mb-2">
                    {member.name}
                  </h1>
                  <h2 className="text-base text-white text-center mb-3">
                    {member.position}
                  </h2>
                  <p className="text-sm text-white text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Desktop/Tablet: Centered buttons for other members */}
        <motion.div
          className="hidden md:flex bg-green-600 justify-center py-7 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-30"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ delay: 1.6 }}
        >
          {otherMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <button
                onClick={() => handleMemberSelect(member)}
                className="w-20 h-20 sm:w-25 sm:h-25 rounded-full overflow-hidden hover:border-opacity-100 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="text-center mt-2 sm:mt-3">
                <p className="font-semibold text-base sm:text-lg">{member.name}</p>
                <p className="text-sm sm:text-sm opacity-90">{member.miniDescription}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile: Horizontal scrollable carousel for other members */}
        <motion.div
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth bg-green-600 py-4 space-x-3 px-4"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ delay: 1.6 }}
        >
          {otherMembers.map((member) => (
            <div
              key={member.id}
              className="snap-center flex-shrink-0 w-32 flex flex-col items-center"
            >
              <button
                onClick={() => handleMemberSelect(member)}
                className="w-16 h-16 rounded-full overflow-hidden hover:border-opacity-100 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="text-center mt-2">
                <p className="font-semibold text-sm text-white">{member.name}</p>
                <p className="text-xs text-white opacity-90">{member.miniDescription}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Teams;