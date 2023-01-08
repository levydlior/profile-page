import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

function CreateAccountTry() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      date_of_birth: "",
      year: "",
      month: "",
      day: "",
      gender: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik.errors);
  return (
    <div>
      <form>
        <label htmlFor="username"> Username </label>
        <input
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          id="username"
          type="text"
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.username}</p>
        <label htmlFor="password"> password </label>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
          type="password"
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.password}</p>
        <label htmlFor="email"> email </label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
          type="email"
          onBlur={formik.handleBlur}
        />
        <label htmlFor="date_of_birth"> Date of Birth </label>
        <input
          value={formik.values.date_of_birth}
          onChange={formik.handleChange}
          name="date_of_birth"
          id="date_of_birth"
          type="date"
          onBlur={formik.handleBlur}
        />
        <label htmlFor="gender"> gender </label>
        <input
          value={formik.values.gender}
          onChange={formik.handleChange}
          name="gender"
          id="gender"
          type="text"
          onBlur={formik.handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateAccountTry;
