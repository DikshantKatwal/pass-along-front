import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '@/lib/api';

export function useLoginUserMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formData: any) => apiService.post('/api/auth/login/', formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });
}

export function useLogoutUserMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formData: any) => apiService.post('/api/auth/logout/', formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });
}



