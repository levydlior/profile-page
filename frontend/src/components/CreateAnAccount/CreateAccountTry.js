import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
import { basicSchema } from "../../schemas";

function CreateAccountTry() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      year: "",
      month: "12",
      day: "",
      gender: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik.values.month);
  return (
    <div>
      <FormikProvider value={formik}>
        <form>
          <label htmlFor="email"> What's your email?</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            id="email"
            type="email"
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.email}</p>
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

          <label htmlFor="date of birth">  What's your date of birth? </label>
          <Field
            name="month"
            as="select"
            value={formik.values.month || ""}
            onChange={formik.handleChange}
            id="month"
          >
            <option value="" disabled>
              Month
            </option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Field>
          <label htmlFor="day"> Day </label>
          <input
            value={formik.values.day}
            onChange={formik.handleChange}
            name="day"
            id="day"
            type="text"
            onBlur={formik.handleBlur}
            maxlength={2}
          />
           <p>{formik.errors.day}</p>


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
      </FormikProvider>
    </div>
  );
}

export default CreateAccountTry;
