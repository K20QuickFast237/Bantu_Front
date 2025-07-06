import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const BlogDetail = () => {
  const { id } = useParams();

  const allPosts = [
    // {
    //   id: 1,
    //   title: "Smashing Magazine - Juin 12-20",
    //   author: "Miranda Belviane",
    //   date: "16/01/2024",
    //   description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
    //   category: "tech class"
    // },
    // {
    //   id: 2,
    //   title: "Smashing Magazine - Juin 12-20",
    //   author: "Miranda Belviane",
    //   date: "16/01/2024",
    //   description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
    //   category: "Blockchain"
    // },
    // {
    //   id: 3,
    //   title: "Smashing Magazine - Juin 12-20",
    //   author: "Miranda Belviane",
    //   date: "16/01/2024",
    //   description: "Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...",
    //   category: "Startup School"
    // },
    // {
    //   id: 4,
    //   title: "Advanced React Patterns",
    //   author: "John Doe",
    //   date: "15/01/2024",
    //   description: "Explorez les patterns avancés de React pour créer des applications plus robustes et maintenables...",
    //   category: "tech class"
    // },
    // {
    //   id: 5,
    //   title: "Blockchain Fundamentals",
    //   author: "Jane Smith",
    //   date: "14/01/2024",
    //   description: "Une introduction complète aux concepts fondamentaux de la blockchain et ses applications...",
    //   category: "Blockchain"
    // },
    // {
    //   id: 6,
    //   title: "Design Systems Guide",
    //   author: "Alice Johnson",
    //   date: "13/01/2024",
    //   description: "Comment créer et maintenir des systèmes de design efficaces pour vos équipes...",
    //   category: "Learning in VR"
    // }
  ];

  const post = allPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="bg-gray-200 min-h-screen px-20 pt-10">
        <Header />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-green-600 mb-8">Post non trouvé</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen px-20 pt-10">
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-green-600 mb-8">Détails du blog</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{post.title}</h2>
          <p className="mb-3 flex">
            Par <p className="text-blue-700"> {post.author} </p> {post.date}
          </p>
          <p className="text-xl leading-relaxed mb-4">{post.description}</p>
          <div className="flex items-center justify-between">
            <button
              className="text-blue-600 text-xl font-medium hover:underline"
              onClick={() => window.history.back()}
            >
              Retour
              <i className="fas fa-arrow-circle-left ml-4 text-xl text-blue-700"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;