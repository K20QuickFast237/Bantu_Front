import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectImg from "../assets/images/projectImg.jpg";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [sortBy, setSortBy] = useState("Récent");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categories = [
    "Toutes",
    "Réseautage",
    "Emploi",
    "Commerce",
    "Mobilité",
    "Tech",
    "Finance",
  ];
  const sortOptions = ["Récent", "Plus ancien", "Nom A-Z", "Nom Z-A"];

  const projects = [
    {
      id: 1,
      title: "BantuLink",
      category: "Réseautage",
      description:
        "Plateforme professionnelle connectant talents, entreprises et opportunités à travers l'Afrique.",
      completionRate: 99,
      satisfactionRate: 98,
      image: projectImg,
      tag: "Réseautage",
      tagColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "BantuHire",
      category: "Emploi",
      description:
        "Solution de recrutement intelligente adaptée aux besoins des entreprises et talents africains.",
      completionRate: 95,
      satisfactionRate: 97,
      image: projectImg,
      tag: "Emploi",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "BantuMarket",
      category: "Commerce",
      description:
        "Plateforme e-commerce facilitant les échanges entre entrepreneurs et consommateurs africains.",
      completionRate: 92,
      satisfactionRate: 94,
      image: projectImg,
      tag: "Commerce",
      tagColor: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      title: "Mech",
      category: "Mobilité",
      description:
        "Solution de transport intelligent optimisant la logistique urbaine et l'expérience utilisateur.",
      completionRate: 88,
      satisfactionRate: 91,
      image: projectImg,
      tag: "Mobilité",
      tagColor: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      title: "BantuPay",
      category: "Finance",
      description:
        "Solution de paiement mobile sécurisée pour l'écosystème financier africain.",
      completionRate: 96,
      satisfactionRate: 99,
      image: projectImg,
      tag: "Finance",
      tagColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 6,
      title: "TechHub Africa",
      category: "Tech",
      description:
        "Plateforme d'innovation technologique pour les startups africaines émergentes.",
      completionRate: 89,
      satisfactionRate: 93,
      image: projectImg,
      tag: "Tech",
      tagColor: "bg-indigo-100 text-indigo-600",
    },
  ];

  const itemsPerPage = 4;
  const totalProjects = projects.length;

  const filteredProjects =
    selectedCategory === "Toutes"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setShowCategoryDropdown(false);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setShowSortDropdown(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projectCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-8 md:px-20"
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Nous avons trouvé{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProjects.length} projets
                </span>{" "}
                disponibles pour vous
              </p>
            </div>

            {/* Filters */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4"
            >
              {/* Category Filter */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-700">
                    {selectedCategory ? selectedCategory : "Catégories"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </motion.button>

                <AnimatePresence>
                  {showCategoryDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      {categories.map((category) => (
                        <motion.button
                          key={category}
                          whileHover={{ x: 5 }}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                            selectedCategory === category
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-700">Trier par : {sortBy}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </motion.button>

                <AnimatePresence>
                  {showSortDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      {sortOptions.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ x: 5 }}
                          onClick={() => handleSortChange(option)}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                            sortBy === option
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
        >
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover="hover"
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="sm:w-1/3"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 lg:h-full object-cover"
                  />
                </motion.div>
                <div className="sm:w-2/3 p-4 sm:p-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mb-2 sm:mb-3"
                  >
                    <span
                      className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${project.tagColor}`}
                    >
                      {project.tag}
                    </span>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">
                          Projets complets
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {project.completionRate}%
                        </span>
                      </div>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.completionRate}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full bg-gray-200 rounded-full h-1.5"
                      >
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </motion.div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">
                          Clients satisfaits
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {project.satisfactionRate}%
                        </span>
                      </div>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.satisfactionRate}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full bg-gray-200 rounded-full h-1.5"
                      >
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </motion.div>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center space-x-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
            >
              Précédent
            </motion.button>

            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index + 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
            >
              Suivant
            </motion.button>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 my-12 sm:my-16 lg:my-24"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="lg:w-1/3"
          >
            <img
              src={projectImg}
              alt="Business meeting"
              className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/3"
          >
            <div className="flex gap-4 sm:gap-8 self-start text-sm sm:text-base font-semibold uppercase whitespace-nowrap">
              <div className="shrink-0 my-auto h-px bg-green-500 border border-green-500 border-solid w-[100px] sm:w-[170px]" />
              <span className="text-green-500">VITRINE DU PROJET</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Embarquez pour un voyage visuel à travers notre vitrine de
              projets
            </h1>

            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">
                    Projets complets
                  </span>
                  <span className="text-gray-900 font-bold">99%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full bg-gray-200 rounded-full h-2"
                >
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </motion.div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">
                    Clients satisfaits
                  </span>
                  <span className="text-gray-900 font-bold">98%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full bg-gray-200 rounded-full h-2"
                >
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </motion.div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors"
            >
              <span>Découvrir</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
