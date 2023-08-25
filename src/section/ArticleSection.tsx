import Article from "@/components/article";
import axios from "axios";
import { useState, useEffect } from "react";





export default function ArticleSection({
  articles,  setArticles, fetchedAll, setFetchedAll, limitArticles
}: {
    articles: Array<{ _id: string; title: string; description: string }>;
    setArticles: React.Dispatch<React.SetStateAction<Array<{ _id: string; title: string; description: string }>>>;
    fetchedAll: boolean;
    setFetchedAll: React.Dispatch<React.SetStateAction<boolean>>;
    limitArticles: number; // Add the type definition for setFetchedAll prop

}) {
  const [loading, setLoading] = useState(true);
  const [displayedArticles, setDisplayedArticles] = useState(5);

  

  

  useEffect(() => {
    if (articles.length) {
      setLoading(false);
    }
  }, [articles]);

  
  async function fetchNextArticles() {
    const nextArticleLimit = 5;
    //const prevLength = articles.length;
    if(displayedArticles+nextArticleLimit >= articles.length && !fetchedAll) {
        try {
            const offset=articles.length; 
            const response = await axios.get("/api/articles", {
              params: {
                limit: limitArticles,
                offset: offset // Specify the offset to fetch the next set of articles
              }
            });
            setArticles(prevArticles => [...prevArticles, ...response.data.data]);
            if(offset+limitArticles > articles.length){
                //setDisplayedArticles(displayedArticles + nextArticleLimit + 1);
                setFetchedAll(true);
            }
            //setDisplayedArticles(prevDisplayedArticles => prevDisplayedArticles + 50);
          } catch (error) {
            console.error("Error fetching articles:", error);
          }
    }
    setDisplayedArticles(displayedArticles + nextArticleLimit);

    
  }

  return (
    <main className="">
      <div className="pt-24 ">
        <div className="pb-48">
          <h1 className="mb-4 text-blue-600 text-center">
            Learn & Get Inspired
          </h1>
          <div className="min-h-[50%]  ">
            {loading ? (
              <div className="flex items-center justify-center ">
                <h3>Loading...</h3>
              </div>
            ) : (
              articles
                .slice(0, displayedArticles)
                .map((article: any) => (
                  <Article
                    key={article._id}
                    title={article.title}
                    description={article.description}
                  />
                ))
            )}
          </div>

          <div className="justify-center text-center">
            <button
              className={`mt-4 rounded-md p-2 text-white text-xl mb-5 ${
                displayedArticles >= articles.length
                  ? "bg-blue-500"
                  : "bg-blue-600"
              }`}
              onClick={fetchNextArticles}
              disabled={displayedArticles >= articles.length} // Disable the button when displayedArticles >= articles.length
            >
              {displayedArticles < articles.length ?  "View More" : "No more"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
