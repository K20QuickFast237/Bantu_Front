import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import personne1 from "../assets/images/equipe1.jpg";
// import personne2 from "../assets/images/equipe2.jpg";
import personne3 from "../assets/images/equipe3.jpg";
// import personne4 from "../assets/images/equipe4.jpg";
import OptimizedImage from './OptimizedImage';
import { useTranslation } from 'react-i18next';

const Teams = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t('team.founder.name', { defaultValue: 'T.N. Kisob' }),
      position: t('team.founder'),
      description: t('team.founder.desc'),
      avatar: personne1,
      miniDescription: t('team.founder.mini'),
      isMainPresenter: true
    },
    {
      id: 2,
      name: t('team.coo.name', { defaultValue: 'Ayimele Tsopfack Rea' }),
      position: t('team.coo'),
      description: t('team.coo.desc'),
      avatar: personne3,
      miniDescription: t('team.coo.mini')
    },
    {
      id: 3,
      name: t('team.tech.name', { defaultValue: 'Sublime Prod' }),
      position: t('team.tech'),
      description: t('team.tech.desc'),
      avatar: null,
      miniDescription: t('team.tech.mini')
    },
    {
      id: 4,
      name: t('team.marketing.name', { defaultValue: 'Patience Gheghe Kisob' }),
      position: t('team.marketing'),
      description: t('team.marketing.desc'),
      avatar: null,
      miniDescription: t('team.marketing.mini')
    },
  ];

  const [currentMember, setCurrentMember] = useState(teamMembers[0]);

  const handlePreviousMember = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === currentMember.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
    setCurrentMember(teamMembers[previousIndex]);
  };

  const handleNextMember = () => {
    const currentIndex = teamMembers.findIndex(member => member.id === currentMember.id);
    const nextIndex = currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;
    setCurrentMember(teamMembers[nextIndex]);
  };

  const handleMemberSelect = (member) => {
    setCurrentMember(member);
  };

  const otherMembers = teamMembers.filter(member => member.id !== currentMember.id);

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
        {t('teams.title')}
      </motion.p>
      <div className="h-auto bg-blue-500">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 max-md:py-4">
          <div className="mb-6 max-md:mb-2 pl-4 sm:pl-6 md:pl-10 lg:pl-20 pr-4 sm:pr-6 md:pr-10 lg:pr-20">
            <div className="hidden md:flex items-center  justify-between">
              <motion.button
                onClick={handlePreviousMember}
                className="w-10 h-10"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ delay: 0.4 }}
              >
                <div className='bg-blue-700 transition-discrete cursor-pointer hover:bg-blue-600 rounded-full pl-3 pt-3 pb-3'>
                  <ChevronLeft className="w-5 h-5 text-white" />
                </div>
              </motion.button>

              <motion.div
                className="flex-1 mx-4 sm:mx-6 md:mx-8 flex items-center justify-between"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.6 }}
              >
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
                <motion.div
                  className="ml-4 sm:ml-6 md:ml-8"
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                  transition={{ delay: 1.4 }}
                >
                  <OptimizedImage
                    src={currentMember.avatar}
                    alt={currentMember.name}
                    className="w-48 sm:w-64 md:w-96 aspect-[4/3] object-cover rounded-3xl border-4 border-white/50 shadow-lg transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.button
                onClick={handleNextMember}
                className="w-10 h-10"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ delay: 0.4 }}
              >
                <div className='bg-blue-700 transition-discrete cursor-pointer hover:bg-blue-600 rounded-full pl-3 pt-3 pb-3'>
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </motion.button>
            </div>

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
                  <OptimizedImage
                    src={member.avatar}
                    alt={member.name}
                    className="w-56 aspect-[4/3] object-cover rounded-2xl mb-4 border-4 border-white/20 shadow-lg"
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

        {/* Masquée sur mobile */}
        <motion.div
          className="hidden md:flex bg-green-600 gap-12 justify-center py-7  sm:space-x-6 md:space-x-8 lg:space-x-12"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ delay: 1.6 }}
        >
          {otherMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center w-32 sm:w-40">
              <button
                onClick={() => handleMemberSelect(member)}
                className="w-full aspect-[4/3] cursor-pointer rounded-2xl overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
              >
                <OptimizedImage
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="text-center mt-2 sm:mt-3 w-full">
                <p className="font-semibold text-base sm:text-lg">{member.name}</p>
                <p className="text-sm sm:text-sm opacity-90">{member.miniDescription}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Teams;