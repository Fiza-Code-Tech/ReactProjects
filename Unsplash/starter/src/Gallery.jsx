import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';
const url = `https://api.unsplash.com/search/users?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchValue}`);
      console.log(result);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.profile_image?.medium;
        return <img src={url} key={item.id} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
