import app from "@/services/services";
import {
  EditProfileReq_T,
  Notifications_T,
  Ticket_T,
  TicketBodyReq_T,
  TrExperienceReqBody
} from "../user-panel.t";

export const createTicketReq = async (data: TicketBodyReq_T) => {
  return app.post("/user/tickets", data).then(({ data }) => data);
};
export const getTicketsReq = async (): Promise<Ticket_T[]> => {
  return app.get("/user/tickets").then(({ data }) => data);
};
export const getTicketReq = async ({
  id,
}: {
  id: string;
}): Promise<Ticket_T> => {
  return app.get(`/user/ticket/${id}`).then(({ data }) => data);
};

export const getTicketByQueryReq = async (
  query: string
): Promise<Ticket_T[]> => {
  return app.get(`/user/tickets?status=${query}`).then(({ data }) => data);
};
export const updateUserInfoReq = async (data: EditProfileReq_T) => {
  return app.patch("/auth/user/edit", data).then(({ data }) => data);
};

export const getNotificationsReq = async (): Promise<Notifications_T[]> => {
  return app.get(`/notif/all`).then(({ data }) => data);
};
export const getNotificationsByQueryReq = async (
  query: string
): Promise<Notifications_T[]> => {
  return app.get(`/notif/all?status=${query}`).then(({ data }) => data);
};
export const MarkAsReadReq = async ({ notifId }: { notifId: string }) => {
  return app.patch(`/notif/update`, { notifId }).then(({ data }) => data);
};


export const addTrExperienceReq= async({data}:{data:TrExperienceReqBody})=>{
return app.post("/experience/add",data).then(({data})=>data)
}
export const getTrExperiencesReq= async():Promise<TrExperienceReqBody[]>=>{
return app.get("/experience/all").then(({data})=>data)
}

export const removeTrExperienseReq = async({expId}:{expId:string})=>{
return app.delete(`/experience/${expId}`).then(({data})=>data)
}