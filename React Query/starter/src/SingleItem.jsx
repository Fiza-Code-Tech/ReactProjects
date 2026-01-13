import {useMutation, useQueryClient} from '@tanstack/react-query';
import instance from './utils';
import { useDeleteTask, useEditTask } from './reactQueryCustomHooks';

const SingleItem = ({ item }) => {
  
  const {editTask} = useEditTask();
  const {del, isPending} = useDeleteTask();
  
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId: item.id, isDone: !item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        disabled={isPending}
        type='button'
        onClick={() => del(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
