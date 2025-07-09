const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const apiService = {
    get: (url: string) => request('GET', url),
    post: (url: string, data: any) => request('POST', url, data),
    put: (url: string, data: any) => request('PUT', url, data),
    patch: (url: string, data: any) => request('PATCH', url, data),
    delete: (url: string) => request('DELETE', url),
};


const request = async (method: string, url: string, data?: any) => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    let res = await fetch(`${BASE_URL}${url}`, options);
    if (res.status === 401) {
        await fetch(`${BASE_URL}/api/auth/token/refresh/`, {
            method: 'POST',
            credentials: 'include',
        });
        res = await fetch(`${BASE_URL}${url}`, options);
        if (res.status === 401) {
            await fetch(`${BASE_URL}/api/auth/logout/`, {
                method: 'POST',
                credentials: 'include',
            });
            throw new Error('Unauthorized. Logged out.');
        }
    }
    if (!res.ok) throw new Error(await res.text());
    return res.json();
};

export default apiService;