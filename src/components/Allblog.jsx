import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogListing = ({ searchValue }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
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

  const navigate = useNavigate();

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
  React.useEffect(() => {
    setCurrentPage(1); // Réinitialise à la première page lors d'un changement de recherche ou de catégorie
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
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="bg-gray-200 min-h-screen px-20 pt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-green-600 mb-8">Tous les blogs</h1>
            
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <p className="text-gray-600 text-xl">Aucun blog trouvé pour "{searchValue}"</p>
              ) : (
                currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-sm p-8 cursor-pointer"
                    onClick={() => handlePostClick(post.id)}
                  >
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{post.title}</h2>
                    <p className="mb-3 flex">
                      Par <p className='text-blue-700'> {post.author} </p> {post.date}
                    </p>
                    <p className="text-xl leading-relaxed mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 text-xl font-medium hover:underline">
                        Lire plus 
                        <i className="fas fa-arrow-circle-right ml-4 text-xl text-blue-700"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <hr className='mt-5 border-gray-700' />

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <>
                <div className="flex items-center justify-center mt-8 space-x-2">
                  <span className="text-sm text-gray-600">
                    Vue {startIndex + 1} à {Math.min(startIndex + postsPerPage, filteredPosts.length)} de {filteredPosts.length} posts
                  </span>
                </div>

                <div className="flex items-center justify-center mt-4 space-x-2">
                  <button 
                    onClick={() => handlePrevNext('prev')}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded text-sm ${
                      currentPage === 1 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Précédent
                  </button>
                  <button 
                    onClick={() => handlePrevNext('next')}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded text-sm ${
                      currentPage === totalPages 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-600 text-white hover:bg-gray-700'
                    }`}
                  >
                    Suivant
                  </button>
                </div>

                <div className="flex items-center justify-center mt-4 space-x-1">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={`p-2 rounded ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-200'
                    }`}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm rounded ${
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
                        className="px-3 py-1 text-sm rounded hover:bg-gray-200 text-gray-700"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={`p-2 rounded ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'hover:bg-gray-200'
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
          <div className="w-80">
            <h2 className="text-5xl mt-5 font-semibold text-gray-800 mb-6">Catégories</h2>
            
            <div className="space-y-3">
              <button
                onClick={() => handleCategoryClick('all')}
                className={`block w-50 text-left px-4 py-2 text-sm rounded ${
                  selectedCategory === 'all'
                    ? 'bg-blue-500 text-white text-xl'
                    : 'bg-gray-200 text-gray-700 text-xl hover:bg-gray-300'
                }`}
              >
                Tous
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`block w-50 text-left px-4 py-2 text-sm rounded ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white text-xl'
                      : `${category.color} text-white text-xl hover:opacity-80`
                  }`}
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