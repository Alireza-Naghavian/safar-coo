import app from "@/services/services";
import { TicketBodyReq_T } from "../user-panel.t";

export const createTicketReq = async(data:TicketBodyReq_T)=>{
return app.post("/user/tickets",data).then(({data})=>data)
}