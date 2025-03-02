export type SignUpFormValues = {
    username: string;
    email: string;
    password: string;
  };
  export type SignInFormValues = Omit<SignUpFormValues,"username">
  export type ResetPasswordValues ={
    newPassword:string,
    confirmPassword:string
  }
  export type ResetPasswordReqBody =ResetPasswordValues& {
    email: string;
    token:string,
  }
  