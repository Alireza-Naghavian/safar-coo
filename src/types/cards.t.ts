export type BlogCard_T = {
    title:string,
    badgeContent?:string,
    href:string,
    cover:string,
    variant:"inner-caption"| "full-detail"
}
export type FullBLogCard_T = BlogCard_T&{
    desc:string,
    date:Date,
    time:Date
}