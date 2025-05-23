import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-20">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600 mb-2">
                Nous avons trouvé{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProjects.length} projets
                </span>{" "}
                disponibles pour vous
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
                {/* Category Filter */}
                <div className="relative">
                    <button
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                    >
                    <span className="text-gray-700">
                        {selectedCategory ? selectedCategory : "Catégories"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                    </button>

                    {showCategoryDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                                selectedCategory === category
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sort Filter */}
                <div className="relative">
                    <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                    >
                    <span className="text-gray-700">Trier par : {sortBy}</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                    </button>

                    {showSortDropdown && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {sortOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSortChange(option)}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                                sortBy === option
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700"
                                }`}
                            >
                                {option}
                            </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${project.tagColor}`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
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
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${project.completionRate}%` }}
                        ></div>
                      </div>
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
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${project.satisfactionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors">
                    <span>Découvrir</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
            >
              Précédent
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
            >
              Suivant
            </button>
          </div>
        )}


        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 my-24">
            <div className="lg:w-1/3">
                <img
                    src={projectImg}
                    alt="Business meeting"
                    className="w-full h-64 lg:h-full object-cover rounded-2xl"
                />
            </div>
            <div className="lg:w-2/3">
                <div className="flex gap-8 self-start text-base font-semibold uppercase whitespace-nowrap">
                    <div className="shrink-0 my-auto h-px bg-green-500 border border-green-500 border-solid w-[170px]" />
                    <span className="text-green-500">VITRINE DU PROJET</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
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
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: "99%" }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">
                            Clients satisfaits
                            </span>
                            <span className="text-gray-900 font-bold">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: "98%" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors">
                    <span>Découvrir</span>
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectsSection;
