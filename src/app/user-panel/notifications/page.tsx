import MyNotifs from "@/features/user-panel/components/Notifications/MyNotifs";
import Providers from "@/providers/QueryClientProvider";
import React from "react";

function page() {
  return (
    <Providers>
      <MyNotifs />
    </Providers>
  );
}

export default page;
