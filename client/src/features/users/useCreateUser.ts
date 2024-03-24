import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser as createUserApi } from '../../services/apiUser';

export default function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
  return { createUser, isCreating };
}
