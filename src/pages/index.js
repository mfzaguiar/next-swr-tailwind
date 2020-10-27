import React from 'react';
import Link from 'next/link';

import { useFetch } from '../hooks/useFetch';

const Index = () => {
    const { data, error } = useFetch('/mobile/search', { teste: 2 });

    if (error) {
        return <p>Falha no carregamento</p>;
    }

    if (!data) {
        return <p>Carregando</p>;
    }

    return (
        <>
            <section className="container mx-auto p-4 shadow rounded">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {data.data.map((item) => (
                        <li key={item.id} className="p-2 bg-gray-300 rounded flex items-center">
                            <img src={item.images[0].url} className="h-32 w-32" alt="veículo" />
                            <span className="text-gray-800 ml-8">{item.title}</span>
                            <Link href={`/vehicle/${item.vehicle_code}`}>Visualizar</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Index;
