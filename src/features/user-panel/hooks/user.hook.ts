import { ResponseData_T } from "@/types/global.t";
import { customToast } from "@/utils/CutomToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Like1 } from "iconsax-react";
import { useSearchParams } from "next/navigation";
import {
  addTrExperienceReq,
  createTicketReq,
  getNotificationsByQueryReq,
  getNotificationsReq,
  getTicketByQueryReq,
  getTicketReq,
  getTicketsReq,
  getTrExperiencesByReqQuery,
  getTrExperiencesReq,
  MarkAsReadReq,
  removeNotifReq,
  removeTrExperienseReq,
  updateUserInfoReq
} from "../services/userServices";
import { Notifications_T } from "../user-panel.t";

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
        queryClient.invalidateQueries({ queryKey: ["notifications"] });
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
    queryFn: getNotificationsReq,
  });

  const notifications = data || [];
  return { notifications, isNotifLoading };
};

export const useMarkAsRead = () => {
  const searchParams = useSearchParams().get("status") as string;

  const client = useQueryClient();
  const { isPending: isStatusLoading, mutateAsync: updateNotifStatus } =
    useMutation({
      mutationFn: MarkAsReadReq,
      onMutate: (data) => {
        const oldNotifications: Notifications_T[] = client.getQueryData([
          "notifications",
        ]) as Notifications_T[];

        if (oldNotifications) {
          const updatedNotifications = oldNotifications.map((oldData) =>
            oldData._id == data.notifId ? data : oldData
          );
          client.setQueryData(["notifications"], updatedNotifications);
        }
        return oldNotifications;
      },
      onError: (_e, _values, context) => {
        client.setQueryData(["notifications"], context);
      },
      onSuccess: (data: ResponseData_T<string>) => {
        client.invalidateQueries({ queryKey: ["notifications"] });
        client.invalidateQueries({ queryKey: ["notificationsQueries"] });
        if (searchParams === "UNREAD") {
          client.removeQueries({ queryKey: ["notificationsQueries"] });
        }
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
  return { isStatusLoading, updateNotifStatus };
};

export const useRemoveNotif =()=>{
  const queryClient = useQueryClient();

  const {mutateAsync:removeNotif,isPending:isRemoveLoading} = useMutation({
    mutationFn:removeNotifReq,
    onMutate:(data)=>{
      const oldNotifications :Notifications_T[]= 
       queryClient.getQueryData(["notifications"])as Notifications_T[]
      if(oldNotifications){
        const updatedNotifications = oldNotifications.map((oldNotif)=>oldNotif._id === data.notifId ?data :oldNotif)
        queryClient.setQueryData(["notifications"],updatedNotifications)
      }
      return oldNotifications
    },
    onError:(_e,_values,context)=>{
      queryClient.setQueryData(["notifications"],context)
    },
    onSuccess:(data:ResponseData_T<string>)=>{
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["notificationsQueries"] });
      customToast({
        title: "موفقیت آمیز",
        desc: data,
        icon: Like1,
        iconColor: "#22c55e",
        className: "text-green-500",
        type: "SUCCESS",
      });
    }
  })
  return {removeNotif,isRemoveLoading}
} 
export const useGetNotifByQueries = () => {
  const searchParams = useSearchParams().get("status") as string;
  const { data, isLoading: isNotifsLoading } = useQuery({
    queryKey: ["notificationsQueries", searchParams],
    queryFn: () => getNotificationsByQueryReq(searchParams?.toString()),
  });
  const notifs = data || [];
  return { notifs, isNotifsLoading };
};

////////////////
// travel experience
////////////////

export const useAddExperience = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addExperience, isPending: isAddLoading } = useMutation({
    mutationFn: addTrExperienceReq,
    onSuccess: (data: ResponseData_T<string>) => {
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
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
  return { addExperience, isAddLoading };
};

export const useGetExperiences = () => {
  const { data, isLoading: isExpLoading } = useQuery({
    queryKey: ["experiences"],

    queryFn: getTrExperiencesReq,
  });
  const experiences = data || [];
  return { experiences, isExpLoading };
};

export const useRemoveTrExp = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeTrExp, isPending: isRemoveLoading } = useMutation({
    mutationFn: removeTrExperienseReq,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
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
  return { removeTrExp, isRemoveLoading };
};

export const useGetTrExpByQueries = ({ status }: { status: string }) => {
  const { data: expByQuery, isLoading: isExpQueryLoading } = useQuery({
    queryKey: ["experiences", status],
    queryFn: () => getTrExperiencesByReqQuery(status),
  });
  return { isExpQueryLoading, expByQuery };
};

