"use client"
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import Commentcard from "@/components/molecules/cards/Commentcard";
import React, { useState } from "react";

function ArticleComments() {
    const [like,SetLike] = useState(12)
    const [disLike,SetDisLike] = useState(10)
  return <div className="w-full relative flex flex-col md:gap-y-20 gap-y-10">
    <SectionTitle
    title="نظرات کابران"
    className="tracking-tighter"
    />
    <div className="flex flex-col w-full relative gap-y-24">
        <Commentcard
        body="لورم ایپسو
        م متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
         و با استفاده از طراحان گرافیک است، چاپگرها و متون 
         بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و 
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
          هل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          disLike={disLike}
          like={like}
          provider="مهدی کارجو"
            setDisLike={SetDisLike}
            setLike={SetLike}
        />
        <Commentcard
        body="لورم ایپسو
        م متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
         و با استفاده از طراحان گرافیک است، چاپگرها و متون 
         بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و 
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
          هل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          disLike={disLike}
          like={like}
          provider="مهدی کارجو"
            setDisLike={SetDisLike}
            setLike={SetLike}
        />
        <Commentcard
        body="لورم ایپسو
        م متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
         و با استفاده از طراحان گرافیک است، چاپگرها و متون 
         بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و 
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
          هل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          disLike={disLike}
          like={like}
          provider="مهدی کارجو"
            setDisLike={SetDisLike}
            setLike={SetLike}
        />
    </div>
  </div>;
}

export default ArticleComments;
