import React from "react";
import ArticleSearchBox from "./ArticleSearchBox";
import ArticleFilters from "./ArticleFilters";

function ArticlesHeader() {
  return (
    <div className="w-full h-full sm:max-h-[435px] lg:flex-row flex-col lg:gap-y-0 gap-y-6 flex
     bg-primary-600 rounded-12 px-5 py-4 items-start gap-x-[50px] mt-[84px]  ">
        <ArticleSearchBox/> 
        <ArticleFilters/>
    </div>
  );
}

export default ArticlesHeader;
