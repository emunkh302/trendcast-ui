// src/components/AdminDashboard.js
import React, { useState } from 'react';

function AdminDashboard() {
  const [podcast, setPodcast] = useState({
    title: '',
    description: '',
    image: null,
    audio: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPodcast({ ...podcast, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setPodcast({ ...podcast, [name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to backend API
    // For now, just log the data
    console.log(podcast);
    alert('Podcast submitted (placeholder)');
  };

  return (
    <div className="admin-dashboard">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={podcast.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={podcast.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <input
          type="file"
          name="audio"
          accept="audio/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Add Podcast</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
