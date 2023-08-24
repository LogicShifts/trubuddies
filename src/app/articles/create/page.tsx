"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateArticlePage() {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [publishedOn, setPublishedOn] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [url, setUrl] = useState("");
  //   const [tags, setTags] = useState<string[]>([]);
  const [article, setArticle] = React.useState({
    title: "",
    description: "",
    url: "",
    tags: [] as string[],
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Add code to submit the article data to the server
      // and redirect to the article details page
      const response = await axios.post("/api/articles", article);
      console.log("Article created " + response.data);
      router.push("/articles");
    } catch (error: any) {
      console.log("Error creating article : " + error.response.data.error);
    } finally {
    }
  };

  return (
    <div className="container  text-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Create Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Title:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-80"
            type="text"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block">Description:</label>
          <textarea
            className="border border-gray-300 rounded-md p-2 w-80"
            value={article.description}
            onChange={(e) =>
              setArticle({ ...article, description: e.target.value })
            }
          />
        </div>
        {/* <div className="mb-4">
          <label className="block">Published On:</label>
          <input className="border border-gray-300 rounded-md p-2" type="date" value={publishedOn} onChange={(e) => setPublishedOn(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block">Author:</label>
          <input className="border border-gray-300 rounded-md p-2" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div> */}
        <div className="mb-4">
          <label className="block">URL:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-80"
            type="text"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block">Tags-separated by ,:</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-80"
            type="text"
            value={article.tags.join(",")} // Join the array into a string
            onChange={(e) =>
              setArticle({ ...article, tags: e.target.value.split(",") })
            } // Split the string into an array
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
