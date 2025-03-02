import { ChildrenProps, SetState } from "./global.t";
export type FormType ="signUp"|"signIn"|"forgetPassword"|"resetPassword"
export type AuthFormProps_T = {
  closeModalForm:()=>void
  setFormType:SetState<FormType>
  };
export type AuthFormLayout_T = ChildrenProps & {
  title: string;
  linkContent: string |null;
  qTitle: string|null;
  formType:FormType|null
  setFormType?:SetState<FormType>
};

export type AuthPropsType = {
  username:string,
  email:string,
  password:string
}

