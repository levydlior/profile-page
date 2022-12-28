import React from "react";

function BirthDate({ birthDate, setBirthDate }) {
  const { month, day, year } = birthDate;

  return (
    <div>
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
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>Jun</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>

        <label>Day</label>
        <input
          type="text"
          value={day}
          placeholder="DD"
          maxLength="2"
          onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
        />
        <label>Year</label>
        <input
          type="text"
          value={year}
          placeholder="YYYY"
          maxLength="4"
          onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
        />
      </div>
    </div>
  );
}

export default BirthDate;
