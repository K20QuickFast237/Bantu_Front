import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogListing = ({ searchValue = "" }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const postsPerPage = 3;

  const allPosts = [
    {
      id: 1,
      title: "Smashing Magazine - Juin 12-20",
      author: "Miranda Belviane",
      date: "16/01/2024",
      description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
      category: "tech class"
    },
    {
      id: 2,
      title: "Smashing Magazine - Juin 12-20",
      author: "Miranda Belviane",
      date: "16/01/2024",
      description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
      category: "Blockchain"
    },
    {
      id: 3,
      title: "Smashing Magazine - Juin 12-20",
      author: "Miranda Belviane",
      date: "16/01/2024",
      description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
      category: "Startup School"
    },
    {
      id: 4,
      title: "Advanced React Patterns",
      author: "John Doe",
      date: "15/01/2024",
      description: "Explorez les patterns avancés de React pour créer des applications plus robustes et maintenables...",
      category: "tech class"
    },
    {
      id: 5,
      title: "Blockchain Fundamentals",
      author: "Jane Smith",
      date: "14/01/2024",
      description: "Une introduction complète aux concepts fondamentaux de la blockchain et ses applications...",
      category: "Blockchain"
    },
    {
      id: 6,
      title: "Design Systems Guide",
      author: "Alice Johnson",
      date: "13/01/2024",
      description: "Comment créer et maintenir des systèmes de design efficaces pour vos équipes...",
      category: "Learning in VR"
    }
  ];

  const categories = [
    { name: "tech class", color: "bg-blue-500" },
    { name: "Blockchain", color: "bg-gray-600" },
    { name: "Startup School", color: "bg-gray-600" },
    { name: "Learning in VR", color: "bg-gray-600" },
    { name: "Computers", color: "bg-gray-600" }
  ];

  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Filtrer les posts en fonction de la catégorie et de la recherche
  const filteredPosts = selectedCategory === 'all'
    ? allPosts.filter(post =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase())
      )
    : allPosts.filter(post =>
        post.category === selectedCategory &&
        (post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
         post.description.toLowerCase().includes(searchValue.toLowerCase()))
      );

  // Réinitialiser la page à 1 si les résultats filtrés changent
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevNext = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePostClick = (postId) => {
    console.log(`Navigate to blog/${postId}`);
  };

  return (
    <div className="bg-gray-200 h-auto py-4 md:py-15 ">
      <div className="max-w-6xl mx-4 sm:mx-8 md:mx-12 lg:mx-20 h-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1 lg:order-1 order-2">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6 lg:mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Tous les blogs
            </h1>
            
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <p className={`text-gray-600 text-lg sm:text-xl transform transition-all duration-1000 delay-200 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  Aucun blog trouvé pour "{searchValue}"
                </p>
              ) : (
                currentPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`bg-white rounded-lg shadow-sm p-6 sm:p-8 cursor-pointer hover:shadow-md transition-all duration-300 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${300 + (index * 100)}ms` 
                    }}
                    onClick={() => handlePostClick(post.id)}
                  >
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-2">{post.title}</h2>
                    <div className="flex items-center mb-3">
                      Par <span className='text-blue-700 ml-1 mr-1'>{post.author}</span> {post.date}
                    </div>
                    <p className="text-lg sm:text-xl leading-relaxed mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 text-lg sm:text-xl font-medium hover:underline flex items-center">
                        Lire plus 
                        <i className="fas fa-arrow-circle-right ml-2 sm:ml-4 text-lg sm:text-xl text-blue-700"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <hr className={`mt-5 border-gray-700 transform transition-all duration-1000 delay-700 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} />

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <>
                <div className={`flex items-center justify-center mt-8 space-x-2 transform transition-all duration-1000 delay-800 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <span className="text-sm text-gray-600 text-center">
                    Vue {startIndex + 1} à {Math.min(startIndex + postsPerPage, filteredPosts.length)} de {filteredPosts.length} posts
                  </span>
                </div>

                <div className={`flex items-center justify-center mt-4 space-x-2 transform transition-all duration-1000 delay-900 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <button 
                    onClick={() => handlePrevNext('prev')}
                    disabled={currentPage === 1}
                    className={`px-3 sm:px-4 py-2 rounded text-sm transition-all duration-300 ${
                      currentPage === 1 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                    }`}
                  >
                    Précédent
                  </button>
                  <button 
                    onClick={() => handlePrevNext('next')}
                    disabled={currentPage === totalPages}
                    className={`px-3 sm:px-4 py-2 rounded text-sm transition-all duration-300 ${
                      currentPage === totalPages 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-600 text-white hover:bg-gray-700 hover:scale-105'
                    }`}
                  >
                    Suivant
                  </button>
                </div>

                <div className={`flex items-center justify-center mt-4 space-x-1 flex-wrap gap-2 transform transition-all duration-1000 delay-1000 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={`p-2 rounded transition-all duration-300 ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-200 hover:scale-110'
                    }`}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm rounded transition-all duration-300 hover:scale-110 ${
                        currentPage === page
                          ? 'bg-gray-800 text-white'
                          : 'hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {totalPages > 5 && (
                    <>
                      <span className="px-2">...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="px-3 py-1 text-sm rounded hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={`p-2 rounded transition-all duration-300 ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-200 hover:scale-110'
                    }`}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:order-2 order-1">
            <h2 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-0 font-semibold text-gray-800 mb-4 md:mb-6 transform transition-all duration-1000 delay-100 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              Catégories
            </h2>
            
            <div className="space-y-3">
              <button
                onClick={() => handleCategoryClick('all')}
                className={`block w-full sm:w-50 text-left px-4 py-2 text-sm rounded transition-all duration-300 hover:scale-105 transform delay-200 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-500 text-white text-lg sm:text-xl'
                    : 'bg-gray-200 text-gray-700 text-lg sm:text-xl hover:bg-gray-300'
                } ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              >
                Tous
              </button>
              
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`block w-full sm:w-50 text-left px-4 py-2 text-sm rounded transition-all duration-300 hover:scale-105 transform ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white text-lg sm:text-xl'
                      : `${category.color} text-white text-lg sm:text-xl hover:opacity-80`
                  } ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{
                    transitionDelay: `${300 + (index * 50)}ms`
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;