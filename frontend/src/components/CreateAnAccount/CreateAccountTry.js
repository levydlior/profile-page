import React from "react";
import { useFormik, Field } from "formik";
import { basicSchema } from "../../schemas";

function CreateAccountTry() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      year: "",
      month: "",
      day: "",
      gender: "",
    },
    validationSchema: basicSchema,
  });
  console.log(formik.month);
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
        <label htmlFor="month"> month</label>
        <select 
        value={formik.values.month} 
        type="select" 
        onChange={formik.handleChange}
        name="month"
        id="month"
        >
          <option value="1" label="January" />
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
        </select>
        <label htmlFor="day"> Day </label>
        <input
          value={formik.values.day}
          onChange={formik.handleChange}
          name="day"
          id="day"
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
