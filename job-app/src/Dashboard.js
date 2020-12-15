import React, { useState, useEffect } from "react";
import JobType from "./JobType";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios
      .get("http://dct-application-form.herokuapp.com/users/application-forms")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });

  const handleFrontend = () => {
    const result = data.filter((ele) => {
      return ele.jobTitle === "Front-End Developer";
    });
    setFilteredData(result);
    setClick(true);
  };

  const handleNodejs = () => {
    const result = data.filter((ele) => {
      return ele.jobTitle === "Node.js Developer";
    });
    setFilteredData(result);
    setClick(true);
  };

  const handleStack = () => {
    const result = data.filter((ele) => {
      return ele.jobTitle === "MEAN Stack Developer";
    });
    setFilteredData(result);
    setClick(true);
  };

  const handleFull = () => {
    const result = data.filter((ele) => {
      return ele.jobTitle === "FULL Stack Developer";
    });
    setFilteredData(result);
    setClick(true);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Dashboard - {data.length}</h1>
      <button onClick={handleFrontend}>Front-End Developer</button>
      <button onClick={handleNodejs}>Node.js Developer</button>
      <button onClick={handleStack}>MEAN Stack Developer</button>
      <button onClick={handleFull}>FULL Stack Developer</button>
      {click && <JobType filteredData={filteredData} />}
    </div>
  );
};

export default Dashboard;
