import { ChildrenProps } from "@/types/global.t"

export type ArticleHeader_T=Partial<ChildrenProps>& {
    desc:string|null
    title:string
    provider:string
    date:Date
}