import Article from "@/components/article";

export default function ArticleSection({ articles }: { articles: Array<{ _id: string, title: string, description: string }> }) {
    return (
        <main className="mb-[100px]">
            <div className="pt-24 mb-[1000px]">
                <div className="pb-48">
                    <h1 className="text-blue-600 text-center">Learn & Get Inspired</h1>
                    {articles.map((article: any) => (
         <Article key={article._id} title={article.title} description={article.description} />
       ))}

                    <div className="justify-center text-center"
                    // style={{
                    //     display: "flex",
                    //     justifyContent: "center",
                    // }}
                    >
                        <button className="rounded-md p-2 bg-blue-600 text-white text-xl mb-5">View more</button>
                    </div>
                </div>
            </div>
        </main>
    );
}