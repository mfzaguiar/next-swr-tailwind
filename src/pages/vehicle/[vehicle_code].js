import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useFetch } from '../../hooks/useFetch';

const VehicleDetails = () => {
    const router = useRouter();

    const { data, error } = useFetch(`/mobile/vehicle/${router.query.vehicle_code}`);

    if (error) {
        return <p>Falha no carregamento</p>;
    }

    if (!data) {
        return <p>Carregando....</p>;
    }

    return (
        <div className="bg-gray-400 rounded p-2">
            <Link href={'/'}>Voltar</Link>
            <img src={data.images[0].url} alt="veiculo imagem" />
            <span>{data.title}</span>
            <span>{data.price}</span>
        </div>
    );
};

export default VehicleDetails;
