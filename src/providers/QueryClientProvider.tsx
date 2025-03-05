"use client";
import { ChildrenProps } from "@/types/global.t";
import ClientOnlyPortal from "@/utils/ClientOnlyPortal";
import { ToastProvider } from "@heroui/toast";
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined
function getQueryClient() {
if (isServer) {
  return makeQueryClient()
} else {
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
}
}
//making new query client
export default function Providers({ children }: ChildrenProps) {
  const queryClient = getQueryClient()
  return (
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
  );
}
