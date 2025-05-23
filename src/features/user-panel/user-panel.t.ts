import { ChildrenProps, ClassName_T } from "@/types/global.t";
import { DateObject } from "react-multi-date-picker";

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

// user types
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

export type EditProfile_T = {
  newUsername: string;
  newPassword: string;
};
export type EditProfileReq_T = EditProfile_T & {
  email: string;
};
// ticket types
export type TicketBody_T = {
  title: string;
  body: string;
};
export type Priority_T = 1 | 2 | 3 | 0;
export type TicketBodyReq_T = TicketBody_T & { priority: Priority_T };

export type Msg_T = {
  body: string;
  sendAt: Date;
  sender: User_T;
};
export type Ticket_T = TicketBody_T & {
  priority: Priority_T;
  user: User_T;
  status?: "REPLIED" | "PENDING" | "CLOSED";
  createdAt?: Date;
  updatedAt?: Date;
  messages: Msg_T[] | [];
  adminMessages: Msg_T[] | [];
  _id: string;
};

// notifications types
export type Notifications_T = {
  _id: string;
  title: string;
  referType: string;
  body: string;
  refer: string;
  user: string;
  status?: "READ" | "UNREAD";
  updatedAt?: Date;
  createdAt?: Date;
};

/////////////////
// tr-experience
/////////////////
export type TrExperinceFormProps = {
  title: string;
  address?: string | null;
  category: string;
  plan: "PAID" | "FREE";
  location?: (number | null | undefined)[] | null | undefined;
  province:string;
  city:string
};
export type IranCity_T = {
  id:number,
  name:string,
  slug:string
}
 export type ObjectValue = {key:string|number,label:string,name?:string}
export type TrExperienceReqBody = TrExperinceFormProps & {
  body: string;
  location?: [number, number] | null;
  publishTime?: DateObject | null;
  _id?:string,
  isPublished?:boolean
  createdAt?:Date
};
