import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "./utils";
import { toast } from 'react-toastify';

export const useFetchTask = () => {
    const {data, isError, isLoading, error} = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await instance.get('/');
      return data;
    },
  });

  return {isLoading, error, data};
}

export const useCreateTask = () =>
{
    const queryClient = useQueryClient();

    const {mutate: editTask, isPending} = useMutation({
    mutationFn: (taskTitle) => instance.post('/', {title: taskTitle}),
    onSuccess: () => {
      //Invalidate then refetch
      queryClient.invalidateQueries({queryKey: ['tasks']});
      toast.success('task added');
      
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    }
  });
  return {editTask, isPending};
};
export const useEditTask = () =>
{
    const queryClient = useQueryClient();
    const { mutate: editTask } = useMutation({
        mutationFn: ({taskId, isDone}) => {
            return instance.patch(`/${taskId}`, {isDone})
        },
        onSuccess: () => {
            // do something
            queryClient.invalidateQueries({queryKey: ['tasks']});
        },
        onError: () => {
            // do something
        },
   });

   return {editTask};
};
export const useDeleteTask = () =>
{
    const queryClient = useQueryClient();
    const { mutate: del, isPending } = useMutation({
    mutationFn: (taskId) => instance.delete(`/${taskId}`),
    onSuccess: () => {
        // do something
        queryClient.invalidateQueries({queryKey: ['tasks']});
    },
    onError: () => {
        // do something
    },});

    return {del, isPending};
};