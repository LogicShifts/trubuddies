"use client";

import Image from "next/image";
import Hero from "@/section/hero";
import Footer from "@/components/footer/footer";
import Header from "@/components/navbar";
import ArticleSection from "@/section/ArticleSection";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "@/components/article";
import FooterSecondary from "@/components/footer/footer2";


export default function Articles() {
  const [articles, setArticles] = useState<{ _id: string; title: string; description: string; }[]>([]);
  const [fetchedAll, setFetchedAll] = useState(false);
  const offset=0;
  const limit = 20;
  


  useEffect(() => {
    async function fetchArticles() {
      
      try {
        
        const response = await axios.get("/api/articles", {
          params: {
            limit: limit, // Specify the number of articles to fetch
            offset:offset
          }
        });
        console.log(response.data.data.length);
        setArticles(response.data.data);
        if(offset+limit > articles.length){
          //setDisplayedArticles(displayedArticles + nextArticleLimit + 1);
          setFetchedAll(true);
      }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <main>
      <Header />
      {/* <ArticleSection/> */}
      <div className="mb-12 mt-2 ">
        <ArticleSection articles={articles} setArticles={setArticles} fetchedAll={
        fetchedAll} setFetchedAll={setFetchedAll} limitArticles={limit}/>
      </div>

      <FooterSecondary />
    </main>
  );
}
