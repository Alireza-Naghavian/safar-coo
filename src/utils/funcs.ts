const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SERVER_URL;
    type CacheType =
  | "force-cache"
  | "no-cache"
  | "no-store"
  | "only-if-cached"
  | "reload";
type RevalidateTime = number | false | undefined;
type Credentials = Partial<"include" | "omit" | "same-origin">;

const fetchData = async (
    url: string,
    credentials?: Credentials,
    Cache?: CacheType,
    revalidateTime?: RevalidateTime
  ) => {
    const req = await fetch(`${BASE_URL}/${url}`, {
      method: "GET",
      credentials: credentials,
      cache: Cache ? Cache : undefined,
      next: { revalidate: revalidateTime },
    });
    const response = await req.json();
    return response;
  };


  export const getFromStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem(key) as string);
      return data;
    }
  };

  export default fetchData