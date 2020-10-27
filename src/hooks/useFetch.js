import useSwr from 'swr';

import api from '../service/api';

export function useFetch(url) {
    const { data, error } = useSwr(
        url,
        async (url) => {
            const response = await api.get(url);
            return response.data;
        },
        {
            onErrorRetry: true,
            revalidateOnReconnect: true
        }
    );

    return { data, error };
}
