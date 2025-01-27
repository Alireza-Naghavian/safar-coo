"use client";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import React from "react";

function ArticleSearchBox() {
  return (
    <div className="w-full">
      <form key={"searchArticleForm"} className="w-full">
        <SearchBox size="desktop" placeholder="جستجو بین مقالات..." />
      </form>
    </div>
  );
}

export default ArticleSearchBox;
