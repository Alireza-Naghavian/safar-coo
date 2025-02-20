import { ChildrenProps } from "./global.t";
type ToggleState_T = ()=>void
export type AuthFormProps_T = {
  closeModalForm:()=>void
    toggleSignUp:ToggleState_T
  };
export type AuthFormLayout_T = ChildrenProps & {
  title: string;
  linkContent: string;
  qTitle: string;
  toggleSignUp:ToggleState_T
};

export type AuthPropsType = {
  username:string,
  email:string,
  password:string
}

