import React, { useState } from "react";

function CreateAnAccount() {
  const [accountForm, setAccountForm] = useState({
    username: "",
    password: "",
    email: "",
    date_of_birth: "",
    gender: "",
  });
  const [confirmInputs, setConfirmInputs] = useState({
    email: "",
  });

  const [birthDate, setBirthDate] = useState({
    month: "Month",
    day: "",
    year: "",
  });
  const { month, day, year } = birthDate;

  const { username, password, email, gender } = accountForm;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAccountForm({ ...accountForm, [name]: value });
  };

  const handleGenderClick = (e) => {
    setAccountForm({ ...accountForm, gender: e.target.name });
  };

  console.log(birthDate);
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <h2>What's your email?</h2>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={handleChange}
          placeholder="Enter your email."
        />
        <h2>Confirm your email</h2>
        <input
          type="text"
          required
          value={confirmInputs.email}
          onChange={(e) => {
            setConfirmInputs({ email: e.target.value });
          }}
          placeholder="Enter your email again."
        />
        <h2>Create a password</h2>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          placeholder="Create a password."
        />
        <h2>What shall we call you?</h2>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={handleChange}
          placeholder="Enter a profile name."
        />
        <h2>What's your date of birth?</h2>
        <div>
          <label>Month</label>
          <select
            value={month}
            placeholder="Month"
            onChange={(e) => {
              setBirthDate({ ...birthDate, month: e.target.value });
            }}
          >
            <option disabled>Month</option>
            <option value="January">January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>Jun</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <label>Day</label>
          <input
            type="text"
            value={day}
            placeholder="DD"
            maxLength="2"
            onChange={(e) =>
              setBirthDate({ ...birthDate, day: e.target.value })
            }
          />
          <label>Year</label>
          <input
            type="text"
            value={year}
            placeholder="YYYY"
            maxLength="4"
            onChange={(e) =>
              setBirthDate({ ...birthDate, year: e.target.value })
            }
          />
        </div>
        <h2>What's your gender?</h2>
        <input
          type="radio"
          name="man"
          onChange={handleGenderClick}
          checked={gender == "man" ? true : false}
        />
        <p>Man</p>
        <input
          type="radio"
          name="woman"
          onChange={handleGenderClick}
          checked={gender == "woman" ? true : false}
        />
        <p>Woman</p>
        <input
          type="radio"
          name="non-binary"
          onChange={handleGenderClick}
          checked={gender == "non-binary" ? true : false}
        />
        <p>Non-binary</p>
        <input
          type="radio"
          name="other"
          onChange={handleGenderClick}
          checked={gender == "other" ? true : false}
        />
        <p>Other</p>
        <input
          type="radio"
          name="prefer not to say"
          onChange={handleGenderClick}
          checked={gender == "prefer not to say" ? true : false}
        />
        <p>Prefer not to say</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateAnAccount;
