import { ChildrenProps, ClassName_T } from "@/types/global.t";

export type MenuProps = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};
export type HeaderContent_T = Partial<ChildrenProps> &
  ClassName_T & {
    title: string | React.ReactNode;
    desc: string | null;
  };

export type User_T =
  | {
      username: string;
      email: string;
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      role: "ADMIN" | "USER";
    }
  | null
  | undefined;

export type TicketBody_T = {
  title: string;
  body: string;
};
export type Priority_T = 1 | 2 | 3 | 0;
export type TicketBodyReq_T = TicketBody_T & { priority: Priority_T };

export type Msg_T = {
  body: string;
  sendAt: Date;
  sender: string;
};
export type Ticket_T = TicketBody_T & {
  priority: Priority_T;
  user: string;
  status?: "REPLIED" | "PENDING" | "CLOSED";
  createdAt?: Date;
  updatedAt?: Date;
  messages: Msg_T[] | [];
  adminMessages: Msg_T[] | [];
  _id:string
};
