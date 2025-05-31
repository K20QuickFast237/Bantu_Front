import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BlogListing = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const postsPerPage = 3;

  const allPosts = [
    {
      id: 1,
      title: t('blog.listing.post1.title'),
      author: t('blog.listing.post1.author'),
      date: t('blog.listing.post1.date'),
      description: t('blog.listing.post1.desc'),
      category: "tech class"
    },
    {
      id: 2,
      title: t('blog.listing.post2.title'),
      author: t('blog.listing.post2.author'),
      date: t('blog.listing.post2.date'),
      description: t('blog.listing.post2.desc'),
      category: "Blockchain"
    },
    {
      id: 3,
      title: t('blog.listing.post3.title'),
      author: t('blog.listing.post3.author'),
      date: t('blog.listing.post3.date'),
      description: t('blog.listing.post3.desc'),
      category: "Startup School"
    },
    {
      id: 4,
      title: t('blog.listing.post4.title'),
      author: t('blog.listing.post4.author'),
      date: t('blog.listing.post4.date'),
      description: t('blog.listing.post4.desc'),
      category: "tech class"
    },
    {
      id: 5,
      title: t('blog.listing.post5.title'),
      author: t('blog.listing.post5.author'),
      date: t('blog.listing.post5.date'),
      description: t('blog.listing.post5.desc'),
      category: "Blockchain"
    },
    {
      id: 6,
      title: t('blog.listing.post6.title'),
      author: t('blog.listing.post6.author'),
      date: t('blog.listing.post6.date'),
      description: t('blog.listing.post6.desc'),
      category: "Learning in VR"
    }
  ];

  const categories = [
    { name: t('blog.category.tech_class'), color: "bg-blue-500" },
    { name: t('blog.category.blockchain'), color: "bg-gray-600" },
    { name: t('blog.category.startup_school'), color: "bg-gray-600" },
    { name: t('blog.category.learning_vr'), color: "bg-gray-600" },
    { name: t('blog.category.computers'), color: "bg-gray-600" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Filtrer les posts selon catégorie et recherche locale
  const filteredPosts = selectedCategory === 'all'
    ? allPosts.filter(post =>
        post.title.toLowerCase().includes(localSearch.toLowerCase()) ||
        post.description.toLowerCase().includes(localSearch.toLowerCase())
      )
    : allPosts.filter(post =>
        post.category === selectedCategory &&
        (post.title.toLowerCase().includes(localSearch.toLowerCase()) ||
         post.description.toLowerCase().includes(localSearch.toLowerCase()))
      );

  // Reset page si recherche ou catégorie changent
  useEffect(() => {
    setCurrentPage(1);
  }, [localSearch, selectedCategory]);

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
              {t('blog.all_blogs')}
            </h1>

            {/* Barre de recherche */}
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />

            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <p className={`text-gray-600 text-lg sm:text-xl transform transition-all duration-1000 delay-200 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  {t('search.no_results')}{localSearch ? ` ${t('blog.search_for')} "${localSearch}"` : ''}
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
                      {t('blog.by')} <span className='text-blue-700 ml-1 mr-1'>{post.author}</span> {post.date}
                    </div>
                    <p className="text-lg sm:text-xl leading-relaxed mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 text-lg sm:text-xl font-medium hover:underline flex items-center">
                        {t('blog.read_more')}
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
                    {t('blog.pagination.view')} {startIndex + 1} {t('blog.pagination.to')} {Math.min(startIndex + postsPerPage, filteredPosts.length)} {t('blog.pagination.of')} {filteredPosts.length} {t('blog.pagination.posts')}
                  </span>
                </div>

                <div className={`flex items-center justify-center mt-4 space-x-2 transform transition-all duration-1000 delay-900 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <button
                    onClick={() => handlePrevNext('prev')}
                    className={`px-2 py-1 rounded border border-gray-400 bg-white hover:bg-gray-100 disabled:opacity-40`}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 rounded border ${
                        currentPage === i + 1 ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-400 text-gray-700'
                      } hover:bg-blue-400 hover:text-white transition`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePrevNext('next')}
                    className={`px-2 py-1 rounded border border-gray-400 bg-white hover:bg-gray-100 disabled:opacity-40`}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Sidebar Categories */}
          <div className="lg:w-52 lg:order-2 order-1">
            <h2 className="text-xl font-bold mb-6">{t('blog.categories')}</h2>
            <ul className="space-y-3">
              <li
                className={`cursor-pointer px-3 py-1 rounded ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                onClick={() => handleCategoryClick('all')}
              >
                {t('blog.all')}
              </li>
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className={`cursor-pointer px-3 py-1 rounded ${selectedCategory === cat.name ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogListing;