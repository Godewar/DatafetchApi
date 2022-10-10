import "./index.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const deleteData = (item) => {
    setData(data.filter((elem) => elem !== item));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Webapps Solution</h1>
      <h2>Add in Database</h2>
      <form action="connect.php"method="">
        
        <label>Name:<input type="text" name="name" placeholder="Name"></input></label><br/>
        <label>Email:<input type="text" name="Email" placeholder="Email"></input></label><br/>
        
        <button>Add</button>
        
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr id={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <button onClick={() => deleteData(item)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


