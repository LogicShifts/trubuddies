'use client'

import Image from "next/image";
import Hero from "@/section/hero";
import Footer from "@/components/footer";
import Header from "@/components/navbar";
import ArticleSection from "@/section/ArticleSection";
import axios from "axios";
import { useState } from "react";

export default function Articles() {

  const [articles,setArticles] = useState(null);

  const getAllArticles = async () => {
    const articles = await axios.get('/api/articles');
    setArticles(articles.data);
  };

  getAllArticles();

  console.log(articles);
  
  return (
      <main>
        <Header/>
        <ArticleSection/>
        <Footer/>
      
        
      </main>
    
  );
}
