import React, { useState } from 'react';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    employeeCode: '',
    roleType: {
      role: 'RM'
    },
    userFirstName: '',
    userLastName: '',
    emailAddress: '',
    ldapId: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://13.127.32.137:8010/edge-service/user-service/save/Employee';
    const token = 'Bearer 7fab4d8d-090f-4889-98ae-7bef93ffc491';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9,en-IN;q=0.8,en-GB-oxendict;q=0.7',
          'Access-Control-Allow-Origin': '*',
          'Connection': 'keep-alive',
          'Content-Type': 'application/json',
          'Origin': 'http://www.partnerportal-sit.avanse.com.s3-website.ap-south-1.amazonaws.com',
          'Referer': 'http://www.partnerportal-sit.avanse.com.s3-website.ap-south-1.amazonaws.com/',
          'authorization': token
        },
        body: JSON.stringify(employee)
      });

      const data = await response.json();
      console.log(data);
      // Do something with the response data

    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Code:
        <input type="text" name="employeeCode" value={employee.employeeCode} onChange={handleChange} />
      </label>
      <label>
        First Name:
        <input type="text" name="userFirstName" value={employee.userFirstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="userLastName" value={employee.userLastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="emailAddress" value={employee.emailAddress} onChange={handleChange} />
      </label>
      <label>
        LDAP ID:
        <input type="text" name="ldapId" value={employee.ldapId} onChange={handleChange} />
      </label>
      <button type="submit">Save Employee</button>
    </form>
  );
}

export default EmployeeForm;
