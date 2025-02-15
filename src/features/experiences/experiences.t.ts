import { ButtonState_T } from "@/types/buttons.t";
import { ClassName_T, Icon_T } from "@/types/global.t";

export type PlaceIntro_T = ClassName_T & {
  cover: string;
  title?: string;
  score?: number;
  address: string;
  visitCost: "PAID" | "FREE";
  activeTime: Date;
  coordinates: { lat: string; lng: string };
};

export type BtnBox_T = ClassName_T & {
  title: string;
  Iconstyeles?: string;
  Icon: Icon_T;
};

export type UtilBtn_T =ClassName_T& Omit<BtnBox_T, "Iconstyeles"> & {state?:ButtonState_T };
