"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import React from "react";

function ArticleFilters() {
  return (
    <div className="flex flex-col w-full child:text-right text-white  p-2 rounded-8 border border-white">
      <h1 className="text-bodyB1semi">فیلترکردن مقالات</h1>
      <p className="w-full max-w-[292px] text-bodyB4Regular mt-1">
        میتونی چند تا گزینه رو با هم انتخاب میکنی و فیلتر رو اعمال کنی
      </p>

      <form key={"filterArticleForm"}>
        <div className="max-w-[590px] mt-6 flex items-center gap-y-8 gap-x-8 flex-wrap">
          <CustomSwitch name="natural" label="طبیعی"  />
          <CustomSwitch name="historical" label="تاریخی"  />
          <CustomSwitch name="cultural" label="فرهنگی"  />
          <CustomSwitch name="tourism" label="گردشگری"  />
          <CustomSwitch name="religious" label="مذهبی"  />
          <CustomSwitch name="cuisines" label="غذا و خوراکی"  />
          <CustomSwitch name="celebrities" label="مشاهیر"  />
        </div>
        <MainBtn
          size="lg"
          variant="fill"
          state="normal"
          type="submit"
          className="w-fit rounded-8 mt-6 mr-auto bg-secondary-400 "
        >
          اعمال فیلتر
        </MainBtn>
      </form>
    </div>
  );
}

export default ArticleFilters;
