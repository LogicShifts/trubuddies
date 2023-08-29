import React from "react";

const Article = ({
  title,
  description,
  tags,
  publishedOn,
  author
}: {
  title: string;
  description: string;
  tags: string[];
  publishedOn: Date;
  author: string;
}) => {
  return (
    <div className="my-3.5">
      <div className="mx-[5%] h-[150px] rounded-[12px] mb-[10px] flex flex-row bg-indigo-200">
        <div className="w-2/5 h-full rounded-l-lg bg-blue-600 text-center relative flex items-center justify-center text-white">
          <div className="m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {title.replace(/\b\w/g, (l) => l.toUpperCase())}
          </div>

          <div className="absolute bottom-2 right-2 text-xs text-white">
          <div className=" text-xs text-white">
              {author}
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-white">
              {new Date(publishedOn).toLocaleDateString()}
              </div>

          </div>
        </div>
        <div className="w-3/5 text-center">
          <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <div className="line-clamp-1">{description}
                {description.length > 100 && (
                  <div className="mt-1 underline text-blue-600 cursor-pointer">
                    Show more
                  </div>
                )}
              </div>
            </div>
            <div className="mt-[15%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {tags}
            </div>
          </div>


          {/*
    <div className="my-3.5">
    <div className="mx-[5%] h-[150px] rounded-[12px] mb-[10px] flex flex-row bg-indigo-200">
      <div className="w-2/5 h-full rounded-l-lg bg-blue-600 text-center relative flex items-center justify-center text-white">
        <div className="m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          {title.replace(/\b\w/g, (l) => l.toUpperCase())}
        </div>
        <div className="absolute bottom-2 -2 text-xs text-white">
          {author}
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-white">
          {new Date(publishedOn).toLocaleDateString()}
        </div>
      </div>
      <div className="w-3/5 text-center">
        <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <div className="m-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <div className="line-clamp-1">{description}
            {description.length > 100 && (
              <div className="mt-1 underline text-blue-600 cursor-pointer">
                Show more
              </div>
            )}
            </div>
          </div>
          <div className="mt-[15%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {tags}
          </div>
        </div>
      </div>
    </div>
  </div>
  
            */}
        </div>
      </div>
    </div>

  );
};

export default Article;
