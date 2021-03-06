import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../services/api-service';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.results.length > 0 ? (
            reviews.results.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
