import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getInformation() {
      try {
        const reviewsList = await getReviews(params.movieId);
        setReviews(reviewsList.results);
      } catch {
      } finally {
      }
    }
    getInformation();
  }, [params.movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
