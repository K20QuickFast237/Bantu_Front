import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectImg from "../assets/images/projectImg.jpg";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(t("project.proj.keyAll"));
  const [sortBy, setSortBy] = useState(t("project.proj.sort1"));
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    setSelectedCategory(t("project.proj.keyAll"));
    setSortBy(t("project.proj.sort1"));
  }, [t]);

  const categories = [
    t("project.proj.keyAll"),
    t("project.proj.key1"),
    t("project.proj.key2"),
    t("project.proj.key3"),
    t("project.proj.key4"),
    t("project.proj.key5"),
    t("project.proj.key6"),
  ];
  const sortOptions = [
    t("project.proj.sort1"),
    t("project.proj.sort2"),
    t("project.proj.sort3"),
    t("project.proj.sort4"),
  ];

  const projects = [
    {
      id: 1,
      title: t("project.proj.title1"),
      category: t("project.proj.key1"),
      description:
        t("project.proj.description1"),
      completionRate: 99,
      satisfactionRate: 98,
      image: projectImg,
      tag: t("project.proj.key1"),
      tagColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: t("project.proj.title2"),
      category: t("project.proj.key2"),
      description:
        t("project.proj.description2"),
      completionRate: 95,
      satisfactionRate: 97,
      image: projectImg,
      tag: t("project.proj.key2"),
      tagColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: t("project.proj.title3"),
      category: t("project.proj.key3"),
      description:
        t("project.proj.description3"),
      completionRate: 92,
      satisfactionRate: 94,
      image: projectImg,
      tag: t("project.proj.key3"),
      tagColor: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      title: t("project.proj.title4"),
      category: t("project.proj.key4"),
      description:
        t("project.proj.description4"),
      completionRate: 88,
      satisfactionRate: 91,
      image: projectImg,
      tag: t("project.proj.key4"),
      tagColor: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      title: t("project.proj.title5"),
      category: t("project.proj.key5"),
      description:
        t("project.proj.description5"),
      completionRate: 96,
      satisfactionRate: 99,
      image: projectImg,
      tag: t("project.proj.key5"),
      tagColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 6,
      title: t("project.proj.title6"),
      category: t("project.proj.key6"),
      description:
        t("project.proj.description6"),
      completionRate: 89,
      satisfactionRate: 93,
      image: projectImg,
      tag: t("project.proj.key6"),
      tagColor: "bg-indigo-100 text-indigo-600",
    },
  ];

  const itemsPerPage = 4;
  const totalProjects = projects.length;

  const filteredProjects =
    selectedCategory === t("project.proj.keyAll")
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  // Réinitialiser la page courante si elle est supérieure au nombre total de pages
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredProjects, currentPage, totalPages]);

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
                {t("project.proj.filterResult1")}{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProjects.length} {t("project.proj.filterResult2")}
                </span>{" "}
                {t("project.proj.filterResult3")}
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
                  <span className="text-gray-700">{t("project.proj.sort")} : {sortBy}</span>
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
                          {t("project.proj.complete")}
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
                          {t("project.proj.satisfy")}
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
                    <span>{t("project.proj.discover")}</span>
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            variants={itemVariants}
            className="flex justify-center items-center space-x-2 mt-8"
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
              {t("project.proj.previous")}
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
              {t("project.proj.next")}
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
              <span className="text-green-500">{t("project.proj.hero.badge")}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("project.proj.hero.title")}
            </h1>

            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">
                    {t("project.proj.complete")}
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
                    {t("project.proj.satisfy")}
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
              <span>{t("project.proj.discover")}</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
