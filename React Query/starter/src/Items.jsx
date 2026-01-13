import { useFetchTask } from './reactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = ({ items }) => {
  const {isLoading, data, error} = useFetchTask();
 
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
