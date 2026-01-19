import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};
