import * as yup from "yup";
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// custom err messages
yup.setLocale({
  string: {
    min: ({ min }: {min:string|number}) => `حداقل باید ${min} کاراکتر باشد.`,
    max: ({ max }: {max:string|number}) => `حداکثر باید ${max} کاراکتر باشد.`,
    email: "ایمیل وارد شده معتبر نمی‌باشد.",
  },
  mixed: {
    required: "این فیلد نمی‌تواند خالی باشد.",
  },
});

// field schemas
const usernameSchema = yup.string().trim().min(3).max(30).required();
const passwordSchema = yup.string().trim().min(8).max(15).required();
const emailSchema = yup
  .string()
  .trim()
  .email()
  .matches(emailPattern,"ایمیل معتبر نیست")
  .required();

const signUpValidation = yup.object().shape({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const signInValidation = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
 
const emailValidation =yup.object().shape({
  email:emailSchema
})
const newPassValidation = yup.object().shape({
  newPassword:passwordSchema,
  confirmPassword:passwordSchema
})
export { signUpValidation, signInValidation ,emailValidation,newPassValidation};
