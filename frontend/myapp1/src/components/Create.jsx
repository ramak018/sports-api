import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    players: "",
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("players", formData.players);
    data.append("image", formData.image);

    axios.post("http://127.0.0.1:8000/api/sports/create/", data)
      .then(() => {
        navigate("/"); // go back to home
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h3>Create Sport</h3>

      <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} />
      <input name="players" placeholder="Players" className="form-control mb-2" onChange={handleChange} />
      <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange}></textarea>

      <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />

      <button className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Create;