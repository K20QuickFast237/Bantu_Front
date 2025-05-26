import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JoinC = () => {
  const [activeTab, setActiveTab] = useState('internal');

  const internalJobs = [
    {
      title: "Gestionnaire de communauté",
      subtitle: "À temps plein",
      location: "Yaoundé, Cameroun"
    },
    {
      title: "Scrum master",
      subtitle: "À temps plein",
      location: "Lagos, Nigeria"
    },
    {
      title: "Responsable des bases de données",
      subtitle: "Contrôle",
      location: "New York, USA"
    },
    {
      title: "Spécialiste en image de marque en marketing",
      subtitle: "À temps partiel",
      location: "Kribi, Cameroun"
    },
    {
      title: "Gestionnaire de communauté",
      subtitle: "À temps plein",
      location: "Paris, France"
    }
  ];

  const externalJobs = [
    {
      title: "Développeur Frontend",
      subtitle: "Freelance",
      location: "Remote"
    },
    {
      title: "Designer UI/UX",
      subtitle: "Temps partiel",
      location: "Douala, Cameroun"
    },
    {
      title: "Chef de projet",
      subtitle: "Mission",
      location: "Lyon, France"
    }
  ];

  const currentJobs = activeTab === 'internal' ? internalJobs : externalJobs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-full mx-4 md:mx-20 p-6"
    >
      {/* postes */}
      <div className="mb-6">
        <h3 className="text-blue-600 text-xl md:text-2xl font-medium mb-2">Rejoignez notre équipe</h3>
        <h2 className="text-black text-2xl md:text-4xl mt-5 font-bold mb-7">Postes de vacances actuels</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('internal')}
            className={`px-4 py-2 text-base md:text-xl font-medium rounded ${
              activeTab === 'internal'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Postes internes
          </button>
          <button
            onClick={() => setActiveTab('external')}
            className={`px-4 py-2 text-base md:text-xl font-medium rounded ${
              activeTab === 'external'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Postes externes
          </button>
        </div>
      </div>

      {/* liste des boulots */}
      <div className="space-y-4">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex-1 mb-2 md:mb-0">
              <h4 className="text-black font-semibold text-lg md:text-xl mb-1">{job.title}</h4>
              <p className="text-gray-500 text-base md:text-lg">{job.subtitle}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-700 text-base md:text-lg">{job.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* en bas */}
      <div className="mt-8">
        <h3 className="text-green-600 text-xl md:text-2xl font-medium mb-2">Rejoignez notre vivier talent</h3>
        <p className="text-gray-600 text-base md:text-lg">
          Vous ne trouvez pas de postes correspondant à votre profil, envoyez votre CV <b className='text-green-500'>ici</b>
        </p>
      </div>
    </motion.div>
  );
};

export default JoinC;
