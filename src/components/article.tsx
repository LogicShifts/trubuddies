import React from "react";

const Article = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="my-3.5">
      <div className="mx-[5%] h-[150px] rounded-[12px] mb-[10px] flex flex-row bg-indigo-200">
        <div className="w-2/5 h-full rounded-l-lg bg-blue-600 text-center flex items-center justify-center text-white">
          <div className="m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {title.replace(/\b\w/g, (l) => l.toUpperCase())}
          </div>
        </div>
        <div className="w-3/5 text-center">
          <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl overflow-hidden">
              <div className="line-clamp-1">{description}</div>
              {description.length > 100 && (
                <div className="mt-1 underline text-blue-600 cursor-pointer">
                  Show more
                </div>
              )}
            </div>
            {/* <div className="overflow-hidden">
                        {description.length  > 90 && (
                                        <div className="mt-1 underline text-blue-600 cursor-pointer">Show more</div>
                                    )}
                             {description.split('\n').map((line, index) => (
                                <div key={index} className="line-clamp-1">
                                    {line.length > 30 ? line.slice(0, 30)+"...." : line}
                                    
                                </div> 

                            ))}

                        </div>*/}
          </div>
        </div>
      </div>
              
    </div>
  );
};

export default Article;
