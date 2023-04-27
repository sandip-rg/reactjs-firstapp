import React, { useState } from "react";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState({
    employeeCode: "",
    roleType: {
      role: "RM",
    },
    userFirstName: "",
    userLastName: "",
    emailAddress: "",
    ldapId: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        "http://13.127.32.137:8010/edge-service/user-service/save/Employee";
      const token = "Bearer 14740501-2472-4a71-8845-4b38e196c8ec";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9,en-IN;q=0.8,en-GB-oxendict;q=0.7",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          Origin:
            "http://www.partnerportal-sit.avanse.com.s3-website.ap-south-1.amazonaws.com",
          Referer:
            "http://www.partnerportal-sit.avanse.com.s3-website.ap-south-1.amazonaws.com/",
          authorization: token,
        },
        body: JSON.stringify(employee),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      const data = await response.json();
      console.log(data);
      // Do something with the response data
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <label>
        Employee Code:
        <input
          type="text"
          name="employeeCode"
          value={employee.employeeCode}
          onChange={handleChange}
        />
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="userFirstName"
          value={employee.userFirstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="userLastName"
          value={employee.userLastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="emailAddress"
          value={employee.emailAddress}
          onChange={handleChange}
        />
      </label>
      <label>
        LDAP ID :
        <input
          type="text"
          name="ldapId"
          value={employee.ldapId}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Employee</button>
    </form>
  );
}

export default App;
