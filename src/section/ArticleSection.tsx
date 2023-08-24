import Article from "@/components/article";
import { useState, useEffect } from 'react';

export default function ArticleSection({ articles }: { articles: Array<{ _id: string, title: string, description: string }> }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (articles.length) {
            setLoading(false);
        }
    }, [articles]);
    
    return (
       <main className="">
            <div className="pt-24 ">
                <div className="pb-48">
                    <h1 className="mb-4 text-blue-600 text-center">Learn & Get Inspired</h1>
                    <div className="min-h-[50%]">
                    {loading ? (
                        <div className="flex items-center justify-center "><h3>Loading...</h3></div>
                    ) : (
                        articles.map((article: any) => (
                            <Article key={article._id} title={article.title} description={article.description} />
                        ))
                    )}
                    </div>

                    <div className="justify-center text-center"
                    >
                        <button className="mt-4 rounded-md p-2 bg-blue-600 text-white text-xl mb-5">View more</button>
                    </div>
                </div>
            </div>
        </main>
    );
}