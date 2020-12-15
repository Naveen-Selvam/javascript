import React, { useEffect } from "react";
import axios from "axios";

const JobType = (props) => {
  const { filteredData } = props;

  const handleView = (userData) => {
    alert(
      `
           Name = ${userData.name}
           Contact Number = ${userData.phone} 
           email = ${userData.email} 
           Technical skills = ${userData.skills}
           Experience = ${userData.experience}
           Status = ${userData.status}`
    );
  };

  const handleShortList = (us) => {
    const result = { ...us, ...{ status: "shortlisted" } };
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${us._id}`,
        result
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleReject = (us) => {
    const result = { ...us, ...{ status: "rejected" } };
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${us._id}`,
        result
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <table border="1px" className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Technical skills</th>
            <th>Experience</th>
            <th>Application Date</th>
            <th>View Details</th>
            <th>Update Application Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.name}</td>
                <td>{ele.skills}</td>
                <td>{ele.experience}</td>
                <td>{ele.createdAt}</td>
                <td>
                  <button onClick={() => handleView(ele)}>view details</button>
                </td>

                {ele.status === "applied" && (
                  <td>
                    <button onClick={() => handleShortList(ele)}>
                      Shortlist
                    </button>
                    <button onClick={() => handleReject(ele)}>Reject</button>
                  </td>
                )}
                {ele.status === "shortlisted" && (
                  <td>
                    <button>{ele.status}</button>
                  </td>
                )}
                {ele.status === "rejected" && (
                  <td>
                    <button>{ele.status}</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default JobType;
