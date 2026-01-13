import SingleItem from './SingleItem';
import instance from './utils';
import { useQuery } from '@tanstack/react-query';
const Items = ({ items }) => {

  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await instance.get('/');
      return data;
    },
  });

  console.log(data);
  if(isLoading){
    return <p style={{marginTop: '1rem'}}>Loading...</p>
  }

  /*
  if(isError)
  {
    return <p style={{marginTop: '1rem'}}>There was an error</p>;
  }*/
  
  if(error)
  {
    return <p style={{marginTop: '1rem'}}>{error.message}</p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
