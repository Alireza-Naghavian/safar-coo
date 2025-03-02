import ResetLink from "@/components/layouts/auth/ResetLInk";
import Providers from "@/providers/QueryClientProvider";
import React from "react";

function page() {
  return (
    <Providers>
      <ResetLink />
    </Providers>
  );
}

export default page;
