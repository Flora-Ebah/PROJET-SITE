import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaComments } from 'react-icons/fa';

/**
 * BlogPost - Page d'article de blog individuel
 * 
 * Affiche le contenu complet d'un article de blog spécifique.
 * Récupère les données de l'article en fonction de l'ID dans l'URL.
 * 
 * Inclut :
 * - Titre de l'article
 * - Image principale
 * - Contenu détaillé
 * - Informations sur l'auteur et la date de publication
 */

const BlogPost = () => {
  const { id } = useParams();
  
  // Ici, vous devriez normalement récupérer les données de l'article en fonction de l'ID
  // Pour cet exemple, nous allons utiliser des données statiques
  const post = {
    title: "L'avenir de la télémédecine",
    content: `
      <p>La télémédecine est en train de révolutionner la façon dont nous accédons aux soins de santé. Avec l'avènement de technologies de plus en plus sophistiquées, les patients peuvent désormais consulter des médecins à distance, recevoir des diagnostics et même être suivis pour des conditions chroniques, le tout depuis le confort de leur domicile.</p>
      
      <p>Cette évolution apporte de nombreux avantages :</p>
      <ul>
        <li>Accès aux soins amélioré pour les zones rurales ou mal desservies</li>
        <li>Réduction des temps d'attente pour les consultations</li>
        <li>Diminution des coûts liés aux déplacements</li>
        <li>Suivi plus régulier des patients atteints de maladies chroniques</li>
      </ul>
      
      <p>Cependant, la télémédecine soulève également des questions importantes concernant la confidentialité des données, la qualité des soins à distance et l'accès équitable aux technologies nécessaires.</p>
      
      <p>Chez Ophir Technologies, nous travaillons constamment à développer des solutions qui répondent à ces défis, en mettant l'accent sur la sécurité des données, la facilité d'utilisation et l'intégration harmonieuse dans les systèmes de santé existants.</p>
    `,
    date: "15 mai 2023",
    author: "Dr. Smith",
    comments: 5,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  };

  return (
    <div className="blog-post-page">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <FaCalendar className="mr-2" />
          <span className="mr-4">{post.date}</span>
          <FaUser className="mr-2" />
          <span className="mr-4">{post.author}</span>
          <FaComments className="mr-2" />
          <span>{post.comments} commentaires</span>
        </div>
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
