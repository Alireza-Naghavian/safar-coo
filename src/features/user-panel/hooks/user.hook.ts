import { ResponseData_T } from "@/types/global.t";
import { customToast } from "@/utils/CutomToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Like1 } from "iconsax-react";
import { useSearchParams } from "next/navigation";
import {
  createTicketReq,
  getNotifications,
  getTicketByQueryReq,
  getTicketReq,
  getTicketsReq,
  updateUserInfoReq,
} from "../services/userServices";

/////////////////
// edit profile
/////////////////
export const useEditUserProfile = () => {
  const queryClient = useQueryClient();
  const { isPending: isEditLoading, mutateAsync: editProfile } = useMutation({
    mutationFn: updateUserInfoReq,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
    },
  });
  return { isEditLoading, editProfile };
};

////////////
// tickets
////////////
export const useCreateTicket = () => {
  const queryClient = useQueryClient();
  const { isPending: isCreateLoading, mutateAsync: createTicket } = useMutation(
    {
      mutationFn: createTicketReq,
      onSuccess: (data: ResponseData_T<string>) => {
        queryClient.invalidateQueries({ queryKey: ["tickets"] });
        customToast({
          title: "موفقیت آمیز",
          desc: data,
          icon: Like1,
          iconColor: "#22c55e",
          className: "text-green-500",
          type: "SUCCESS",
        });
      },
    }
  );
  return { isCreateLoading, createTicket };
};

export const useGetTickets = () => {
  const { isPending: isTicketsLoading, data: tickets } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTicketsReq,
  });
  return { isTicketsLoading, tickets };
};

export const useGetTicketByQuery = () => {
  const searchParams = useSearchParams().get("status");
  const { isPending: isTicketLoading, data: ticketsByQueries } = useQuery({
    queryKey: ["tickets", searchParams],
    queryFn: () => getTicketByQueryReq(searchParams as string),
  });
  return { isTicketLoading, ticketsByQueries };
};

export const useGetTicket = (id: string) => {
  const { data: ticket, isLoading: isTicketLoading } = useQuery({
    queryKey: ["ticket", id],
    queryFn: () => getTicketReq({ id }),
  });
  return { ticket, isTicketLoading };
};

////////////////////
// notifications
////////////////////

export const useGetNotifications = () => {
  const { data, isLoading: isNotifLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  const notifications = data || [];
  return { notifications, isNotifLoading };
};
