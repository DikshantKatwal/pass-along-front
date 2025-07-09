// types/api.ts
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    errors?: Record<string, string[]>;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    password_confirm: string;
    first_name?: string;
    last_name?: string;
}
