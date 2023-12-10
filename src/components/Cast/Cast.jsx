import { getCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getInformation() {
      try {
        const castList = await getCast(params.movieId);
        setCast(castList.cast);
      } catch {
      } finally {
      }
    }
    getInformation();
  }, [params.movieId]);
  return (
    <div>
      <ul>
        {cast.map(character => {
          return (
            <li key={character.id}>
              <img
                src={`https://www.themoviedb.org/t/p/original${character.profile_path}`}
                alt=""
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
