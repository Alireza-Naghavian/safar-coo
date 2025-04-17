import * as yup from "yup";
export const addExperienceValidation = yup
  .object()
  .shape({
    title: yup.string().required().trim().min(4).max(50),
    category: yup.string().required(),
    plan: yup.mixed<"FREE" | "PAID">().oneOf(["FREE", "PAID"]).default("FREE"),
    province:yup.string().required().trim(),
    city:yup.string().required().trim(),
  })

