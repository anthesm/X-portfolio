import React, { useState } from "react";

const Comment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch("http://localhost:9000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Comment submitted successfully");
        setFormData({
          name: "",
          email: "",
          comment: "",
        });
        setErrorMessage("");
      } else {
        throw new Error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setErrorMessage("Failed to submit comment. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
<form onSubmit={handleSubmit}>
  <div className="mb-3 mx-5 my-5">
    <label htmlFor="name" className='form-label text-dark'>Name:</label>
    <input
      type="text"
      className="form-control"
      name="name"
      id="name"
      placeholder="Enter Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3 mx-5">
    <label htmlFor="email" className='form-label text-dark'>Email:</label>
    <input
      type="email"
      className="form-control"
      name="email"
      id="email"
      placeholder="Enter Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3 mx-5">
    <label htmlFor="comment" className='form-label text-dark'>Comment:</label>
    <textarea
      className="form-control"
      name="comment"
      id="comment"
      rows="5"
      placeholder="Comment and Suggestions"
      value={formData.comment}
      onChange={handleChange}
      required
    ></textarea>
  </div>
  {errorMessage && <p className="text-danger">{errorMessage}</p>}
  <button type="submit" className="btn btn-success" disabled={submitting}>
    {submitting ? "Submitting..." : "Submit"}
  </button>
</form>

  );
};

export default Comment;
