import { getCast } from 'api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getInformation() {
      try {
        setIsLoading(true);
        const castList = await getCast(params.movieId);
        setCast(castList.cast);
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

      <ul>
        {cast.map(character => {
          return (
            <li key={character.id}>
              <img
                src={
                  character.profile_path
                    ? `https://www.themoviedb.org/t/p/original${character.profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt="poster"
                height={320}
              />
              <p>{character.character}</p>
              <p>{character.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
