import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
type SearchHookProps<T> = {
  search: string;
  request: ({
    query,
    signal,
  }: Partial<{ query: string; signal?: AbortSignal }>) => Promise<T[]>;
};

export const useSearch = <T>({ search, request }: SearchHookProps<T>) => {
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const AbortSignalRef = useRef<null | AbortController>(null);
  useEffect(() => {
    const debounceTime = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);
    return () => {
      clearTimeout(debounceTime);
    };
  }, [search]);
  useEffect(() => {
    if (AbortSignalRef.current) {
      AbortSignalRef.current.abort();
    }
  }, [debouncedSearch]);

  const { data, isPending } = useQuery({
    queryKey: ["experiences", debouncedSearch],
    queryFn: async () => {
      const res = await request({
        query: debouncedSearch,
        signal: AbortSignalRef.current?.signal,
      });
      return res;
    },
    enabled: debouncedSearch.trim().length > 0,
  });
  return {
    expBySearchQuery: data,
    isSearchLoading: isPending,
  };
};
