import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    username: yup.string().required("Required"),
    email: yup.string().email("Please Enter a Valid Email").required("Required"),
    password: yup.string().min(5).matches(passwordRules, {message: "Please create a strong password"}).required("Required"),
    year: yup.number(),
      month: "",
      day: yup.number().required("Required").typeError("please enter a valid day").max(31, "please enter a valid day")

})