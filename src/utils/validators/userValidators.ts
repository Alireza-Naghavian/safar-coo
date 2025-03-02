import * as yup from "yup";
const titleSchema = yup.string().required().trim().min(5).max(40);
const bodySchema = yup.string().required().trim().min(7);


const createTicketValidation = yup.object().shape({
  title: titleSchema,
  body: bodySchema,
});

export { createTicketValidation };
