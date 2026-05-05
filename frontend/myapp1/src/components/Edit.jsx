import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    players: "",
    image: null
  });

  // 🔹 Load existing data
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/sports/${id}/`)
      .then(res => setFormData(res.data));
  }, [id]);

  // 🔹 Handle change
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // 🔹 Update data
  const handleUpdate = () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("players", formData.players);

    if (formData.image) {
      data.append("image", formData.image);
    }

    axios.put(`http://127.0.0.1:8000/api/sports/update/${id}/`, data)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h3>Edit Sport</h3>

      <input name="name" placeholder="Name" value={formData.name} className="form-control mb-2" onChange={handleChange} />
      <input name="players" placeholder="players" value={formData.players} className="form-control mb-2" onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} className="form-control mb-2" onChange={handleChange}></textarea>

      <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />

      <button className="btn btn-warning" onClick={handleUpdate}>
        Save
      </button>
    </div>
  );
};

export default Edit;