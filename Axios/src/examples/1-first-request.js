import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {

  //Fetch data method
  const fetchData = async () =>
  {

    try
    {
      //Axios treats 404 as an error unlike fetch
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch(error)
    {
      console.log(error.response);
    }
  };

  //Use effect for perfoming side effects
  //Invoking the fetch data method inside the effect
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
