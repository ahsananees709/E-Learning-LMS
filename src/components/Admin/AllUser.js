import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default function AllUser() {
  const [myData, setData] = useState([]);
  const [ifError, setError] = useState("");
  const getDataFromAPI = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users/allusers");
        setData(res.data);
        console.log(res.data)
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
      <div className=" mt-2 ms-3 me-3">
          <NavBar/>
      <table class="table table-dark text-left">
        <thead class="bg-primary pt-3 pb-3">
          <th style={{ width: "150px" }} class="pt-3 pb-3">
            Name
          </th>
          <th style={{ width: "200px" }} class="pt-3 pb-3">
            Email
          </th>
          <th style={{ width: "100px" }} class="pt-3 pb-3">
            Password
          </th>
          <th style={{ width: "100px" }} class="pt-3 pb-3">
            Confirm Password
          </th>
        </thead>
      </table>
      {ifError !== "" && <h1>{ifError}</h1>}
      {myData.map((item) => {
        const { id, name, email, password, confirmPassword } = item;
        return (
          <div key={id}>
            <table class="table table-sm text-left">
              <tbody>
                <tr>
                  <td style={{ width: "150px" }}>{name}</td>
                  <td style={{ width: "200px" }} class="pt-3 pb-3">
                    {email}
                  </td>
                  <td style={{ width: "100px" }}>{password}</td>
                  <td style={{ width: "100px" }}>{confirmPassword}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
