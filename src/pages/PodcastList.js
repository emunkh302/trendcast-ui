// src/pages/PodcastList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PodcastPlayer from '../components/PodcastPlayer';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchPodcasts = async (currentPage) => {
    try {
      const res = await axios.get(`/api/podcasts?page=${currentPage}`);
      setPodcasts(res.data.podcasts);
      setPageCount(res.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPodcasts(1);
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    fetchPodcasts(selectedPage);
  };

  return (
    <div>
      <h2>Podcasts</h2>
      <div className="podcast-list">
        {podcasts.map((podcast) => (
          <PodcastPlayer key={podcast._id} podcast={podcast} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PodcastList;
