import Article from "@/components/article";

export default function ArticleSection() {
    return (
           <main>
                <div className="pt-24">
                    <div className="pb-48">
                        <h1 className="text-blue-600 text-center">Learn & Get Inspired</h1>
                        <Article/>
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