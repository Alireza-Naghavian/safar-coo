import MyTickets from "@/features/user-panel/components/Tickets/MyTickets";
import Providers from "@/providers/QueryClientProvider";

function page() {
  return (
    <Providers>
      <MyTickets/>
    </Providers>
  )
}

export default page;
