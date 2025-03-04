import app from "@/services/services";
import { Ticket_T, TicketBodyReq_T } from "../user-panel.t";

export const createTicketReq = async(data:TicketBodyReq_T)=>{
return app.post("/user/tickets",data).then(({data})=>data)
}
export const getTicketsReq = async():Promise<Ticket_T[]>=>{
    return app.get("/user/tickets").then(({data})=>data)
}
export const getTicketByQueryReq = async(query:string):Promise<Ticket_T[]>=>{
return app.get(`/user/tickets?status=${query}`).then(({data})=>data)
}