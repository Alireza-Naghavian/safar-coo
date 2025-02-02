import { ChildrenProps, SetState } from "./global.t";

export type BlogCard_T =Partial<ChildrenProps>& {
  title: string;
  badgeContent?: string;
  href: string;
  cover: string;
  variant: "inner-caption" | "full-detail";
  provider?:string,
  score?:string|number|null|undefined
};
export type FullBLogCard_T = BlogCard_T & {
  desc: string;
  date: Date;
};
export type IranologyCard_T =Omit<FullBLogCard_T,"date">&{role:"ADMIN"|"USER",provider?:string}
export type TrExp_T = Omit<BlogCard_T,"variant"|"score">&{provider:string}

export type CommentCard_T ={
  provider:string
  body:string;
  like:number
  disLike:number
  setLike:SetState<number>
  setDisLike:SetState<number>
}