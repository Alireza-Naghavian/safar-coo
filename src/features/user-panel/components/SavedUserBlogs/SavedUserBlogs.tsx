"use client";
import DeleteBtn from "@/components/atoms/buttons&links/DeleteBtn";
import UserBlogCard from "@/components/molecules/cards/UserBlogCard";
import { ArticleCategories } from "@/utils/constants";
import { Select, SelectItem } from "@nextui-org/select";
import { Save2 } from "iconsax-react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";

function SavedUserBlogs() {
  return (
    <div className="user-panel-container py-2">
      <HeaderContentPanelLayout
        desc={null}
        title={
          <div className="flex items-center gap-x-2">
            <Save2 variant="Bold" className="size-10 fill-accent-400" />
            <h1
              className="lg:text-h1Semi md:text-h2Semi 
            text-bodyB2semi  tracking-tighter"
            >
              مقالات ذخیره شده من
            </h1>
          </div>
        }
      >
        <Select
          placeholder="دسته بندی را انتخاب کنید"
          label="دسته بندی مقاله"
          labelPlacement="outside"
          classNames={{
            label: "!text-bodyB3Regular",
            mainWrapper: " sm:!w-[438px]",
          }}
        >
          {ArticleCategories.map((category) => {
            return (
              <SelectItem key={category._id} className="!rounded-12">
                {category.label}
              </SelectItem>
            );
          })}
        </Select>
      </HeaderContentPanelLayout>
      <section className="mt-16 flex relative  sm:px-11 px-4   py-4 flex-col gap-y-20">
        <UserBlogCard
        className="xl:w-[90%]"
          category="جاذبه تاریخی"
          cover="/images/mosque.png"
          desc="کلیسای وانک مانند نگینی درخشان در مرکز شهر اصفهان است.
           معماری ساده و زیبا،
           نقاشی‌های منحصربه‌فرد و قدمت کلیسای وانک،
           این اثر تاریخی را از سایر کلیساهای ایران متمایز می‌کند.
           در طول سالیان دراز،
            کلیسای وانک سیر تکاملی داشته است و اضافه شدن بخش‌های مختلف به محوطه و ساختمان کلیسا،
            بر اهمیت آن افزوده‌اند.امروزه همچنان کلیسای.."
          title="تجربه بازدید از کلیسای وانک-اصفهان"
          href=""
          provider="سعید"
        >
        <DeleteBtn/>
        </UserBlogCard>
        <UserBlogCard
        className="xl:w-[90%]"
          category="جاذبه طبیعی"
          cover="/images/waterfall.png"
          desc="آبشار نیاسر معروف‌ترین جاذبه طبیعی نیاسر در کاشان
           است که
            هر سال گردشگران داخلی و خارجی زیادی مخصوصا در ماه اردیبهشت
            از آن بازدید می‌کنند؛ چراکه در این ایام بازار گلاب‌گیری 
           و گل‌غلتان حسابی داغ است. جاذبه‌های متعددی در اطراف آبشار
            نیاسر قرار دارند که از آن جمله می‌توان به چهارطاقی
           ، آسیاب آبی، حمام صفوی، غار رئیس، چشمه اسکندریه و..."
        title="تجربه بازدید از آبشار نیاسر-اصفهان"
          href=""
          provider="احمد سعیدی"
        >
         <DeleteBtn/>
        </UserBlogCard>
      </section>
    </div>
  );
}

export default SavedUserBlogs;
