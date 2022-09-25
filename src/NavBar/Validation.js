import * as Yup from "yup";

export const LoginUpSchema = Yup.object({
  Email_ID: Yup.string().email().required("Please enter your email"),
  Password: Yup.string().min(6).required("Please enter your password")
});