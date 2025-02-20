export type SignUpFormValues = {
    username: string;
    email: string;
    password: string;
  };
  export type SignInFormValues = Omit<SignUpFormValues,"username">
  