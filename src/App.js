import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="col">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address1"
            onChange={handleChange}
            placeholder="1234 Main St"
          />
        </div>
        <div className="mb-3">
          <label>Address 2</label>
          <input
            type="text"
            className="form-control"
            name="address2"
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div className="col">
            <label>Province</label>
            <input
              type="text"
              className="form-control"
              name="province"
              onChange={handleChange}
              placeholder="Province"
            />
          </div>
          <div className="col">
            <label>Postal Code</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              onChange={handleChange}
              placeholder="Postal Code"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-5">
          <h3>Submitted Data</h3>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address1}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
