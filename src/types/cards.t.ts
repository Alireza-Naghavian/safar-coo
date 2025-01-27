export type BlogCard_T = {
  title: string;
  badgeContent?: string;
  href: string;
  cover: string;
  variant: "inner-caption" | "full-detail";
  hasScore:boolean,
  score?:string|number
};
export type FullBLogCard_T = BlogCard_T & {
  desc: string;
  date: Date;
};

