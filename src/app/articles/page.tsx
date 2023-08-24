"use client";

import Image from "next/image";
import Hero from "@/section/hero";
import Footer from "@/components/footer/footer";
import Header from "@/components/navbar";
import ArticleSection from "@/section/ArticleSection";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "@/components/article";

interface ArticleData {
  _id: string;
  title: string;
  description: string;
  // Add other properties as needed
}

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get("/api/articles");
        console.log(response.data.data.length);
        setArticles(response.data.data);
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
      <div className="mb-16 mt-2 pb-[150px] pt-[10px]">
        <ArticleSection articles={articles} />{" "}
      </div>

      <Footer />
    </main>
  );
}
