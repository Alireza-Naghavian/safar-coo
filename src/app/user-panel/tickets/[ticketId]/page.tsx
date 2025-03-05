import Ticket from '@/features/user-panel/components/Tickets/Ticket';
import Providers from '@/providers/QueryClientProvider';

type PropsType = {
  params: Promise<{ ticketId: string }>;
};
 export const dynamic = "force-dynamic"
async function page({params}:PropsType) {
  const { ticketId } = await params;
  return (
    <Providers>
      <Ticket ticketId={ticketId}/>
    </Providers>
  )
}

export default page