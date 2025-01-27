import React from "react";
import ArticleSearchBox from "./ArticleSearchBox";
import ArticleFilters from "./ArticleFilters";

function ArticlesHeader() {
  return (
    <div className="w-full h-full max-h-[305px] flex
     bg-primary-600 rounded-12 px-5 py-4 items-start gap-x-[50px] mt-[84px]  ">
        <ArticleSearchBox/> 
        <ArticleFilters/>
    </div>
  );
}

export default ArticlesHeader;
