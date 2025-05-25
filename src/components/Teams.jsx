import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import personne1 from "../assets/images/personne1.png"
import personne2 from "../assets/images/personne2.png"
import personne3 from "../assets/images/personne3.png"
import personne4 from "../assets/images/personne4.png"

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

  return (
    <>
    <p className='text-6xl pl-20 my-5 font-bold text-blue-700'>Rencontrez l'equipe</p>
    <div className="h-auto bg-blue-500 ">
      <div className="container mx-auto px-4 py-8 ">
        {/* navigation arrows and main content */}
        <div className="flex items-center justify-between mb-8 pl-20 pr-20">
          {/* Left arrow */}
          <button
            onClick={handlePreviousMember}
            className="w-12 h-12  "
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Main content area */}
          <div className="flex-1 mx-8 flex items-center justify-between">
            {/* Text content */}
            <div className="flex-1 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {currentMember.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-white mb-6">
                {currentMember.position}
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {currentMember.description}
              </p>
            </div>

            {/* Profile image */}
            <div className="ml-8">
              <img
                src={currentMember.avatar}
                alt={currentMember.name}
                className="w-64 h-64 md:w-80 md:h-80 object-cover transition-all duration-300"
                
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNextMember}
            className="w-12 h-12"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Team member circles */}
        
      </div>
      <div className="flex bg-green-600 justify-center py-7 space-x-30">
          {otherMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <button
                onClick={() => handleMemberSelect(member)}
                className="w-25 h-25 rounded-full overflow-hidden hover:border-opacity-100 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="text-center mt-3">
                <p className=" font-semibold text-lg">{member.name}</p>
                <p className=" text-sm opacity-90">{member.miniDescription}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};

export default Teams;