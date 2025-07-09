import { useAuth } from "@/context/authContext";
import apiService from "@/lib/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type TUser = {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
};

type UserQueryOptions = Omit<UseQueryOptions<TUser>, 'queryKey' | 'queryFn' | 'enabled'>;

export const useGetUserQuery = (options: UserQueryOptions = {}) => {
    const { isAuthenticated } = useAuth();

    return useQuery({
        queryKey: ['user'],
        queryFn: () => apiService.get('/api/auth/user'),
        enabled: isAuthenticated,
        ...options,
    });
};