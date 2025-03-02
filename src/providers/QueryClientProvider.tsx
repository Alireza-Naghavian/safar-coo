"use client";
import { ChildrenProps } from "@/types/global.t";
import ClientOnlyPortal from "@/utils/ClientOnlyPortal";
import { ToastProvider } from "@heroui/toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useMemo } from "react";
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
//making new query client
const QueryClientContext = createContext<QueryClient | undefined>(undefined);

export default function Providers({ children }: ChildrenProps) {
  const queryClient = useMemo(() => getQueryClient(), []);
  return (
    <QueryClientContext.Provider value={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ClientOnlyPortal>
          <ToastProvider
            placement="top-right"
            maxVisibleToasts={5}
            toastProps={{
              radius: "lg",
              timeout:4000,
              color: "default",
              variant: "flat",
            }}
          />
        </ClientOnlyPortal>
        {children}
      </QueryClientProvider>
    </QueryClientContext.Provider>
  );
}
