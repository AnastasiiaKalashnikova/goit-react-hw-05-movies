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
        return toast.error('Something went wrong... Try again!');
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
