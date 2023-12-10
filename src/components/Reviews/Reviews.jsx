import { getReviews } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getInformation() {
      try {
        setIsLoading(true);
        const reviewsList = await getReviews(params.movieId);
        setReviews(reviewsList.results);
      } catch {
        return toast.error('Something went wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    }
    getInformation();
  }, [params.movieId]);

  return (
    <div>
      <Loader statuse={isLoading} />

      {reviews.length === 0 && (
        <div>
          <p>We don`t have any reviews for this movie.</p>
        </div>
      )}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
