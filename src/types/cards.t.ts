import { SetState } from "./global.t";

export type BlogCard_T = {
  title: string;
  badgeContent?: string;
  href: string;
  cover: string;
  variant: "inner-caption" | "full-detail";
  score?:string|number|null|undefined
};
export type FullBLogCard_T = BlogCard_T & {
  desc: string;
  date: Date;
};
export type TrExp_T = Omit<BlogCard_T,"variant"|"score">&{provider:string}

export type CommentCard_T ={
  provider:string
  body:string;
  like:number
  disLike:number
  setLike:SetState<number>
  setDisLike:SetState<number>
}