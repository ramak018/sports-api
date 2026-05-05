import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// delete function CRUD
function Api() {
  const [sports, setSports] = useState([]);

    const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/sports/delete/${id}/`)
      .then(() => {
        setSports(sports.filter((sport) => sport.id !== id));
      })
      .catch((err) => console.log(err));
  };
// Read function CRUD
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sports/")
      .then(res => setSports(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
   
    <div>
    
<h3
  style={{
    fontWeight: "bold",
    fontSize: "28px",
    marginLeft: "15px",
    marginTop: "15px",
    color: "#222",
    letterSpacing: "1px",
    padding:"30px",
  }}
>
  <span style={{ color: "#ff6b00" }}>All</span>-Sports
</h3>

<div className="container mt-4">
  <div className="row">
    {sports.map((sport) => (
      <div className="col-md-3 mb-4" key={sport.id}>
        
        <div className="card shadow custom-card h-100" style={{ width: "16rem", margin: "auto" }}>
          
          <img
            src={`http://127.0.0.1:8000${sport.image}`}
            className="card-img-top"
            alt={sport.name}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{sport.name}</h5>
            <p className="card-text">{sport.description}</p>

          <div className="d-flex justify-content-between mt-3">
  
   

<Link to={`/edit/${sport.id}`} className="btn btn-warning">
  Edit
</Link>

     <button
      className="btn btn-danger"
      onClick={() => handleDelete(sport.id)}
    >
      Delete
    </button>

</div>
          </div>

        </div>

      </div>
    ))}
  </div>
</div>
    </div>
  );
}
 

export default Api;