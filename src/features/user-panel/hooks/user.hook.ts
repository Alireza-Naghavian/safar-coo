import { useMutation } from "@tanstack/react-query";
import { createTicketReq } from "../services/userServices";
import { ResponseData_T } from "@/types/global.t";
import { customToast } from "@/utils/CutomToast";
import { Like1 } from "iconsax-react";

export const useCreateTicket = () => {
  const {isPending:isCreateLoading,mutateAsync:createTicket} = useMutation({
    mutationFn: createTicketReq,
    onSuccess: (data: ResponseData_T<string>) => {
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
  return {isCreateLoading,createTicket}
};
