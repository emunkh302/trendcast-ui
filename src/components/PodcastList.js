// src/components/PodcastList.js
import React, { useState, useEffect } from 'react';
import PodcastPlayer from './PodcastPlayer';
import ReactPaginate from 'react-paginate';

function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  // Placeholder data
  const placeholderData = [
    {
      id: 1,
      title: 'Podcast Episode 1',
      description: 'Description of podcast episode 1.',
      audioUrl: '/audio/podcast1.mp3',
      imageUrl: '/images/podcast1.jpg',
      views: 100,
      likes: 20,
      ratings: [4, 5],
      createdAt: '2023-01-01',
    },
    // Add more placeholder podcasts
  ];

  useEffect(() => {
    // Fetch data from backend API when connected
    // For now, use placeholder data
    setPodcasts(placeholderData);
  }, []);

  const handlePageClick = (data) => {
    // Handle pagination click
  };

  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
        <PodcastPlayer key={podcast.id} podcast={podcast} />
      ))}

      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default PodcastList;
