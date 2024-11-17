// src/pages/HomePage.js
import React from 'react';
import PodcastList from '../components/PodcastList';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Podcast Channel</h1>
      <PodcastList />
    </div>
  );
}

export default HomePage;
