import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    
    return (
        <div>
            <h1>this is class</h1>
        </div>
    );
};

export default Classes;