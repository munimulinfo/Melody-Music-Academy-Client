import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import useSilectClass from '../../../../Hooks/useSelectClass';
import { useParams } from 'react-router-dom';
//TODO: ai kajta baki ase
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    const [selectclass, refetch] = useSilectClass();
    const {id} = useParams();
    const  enrolclass = selectclass.find( thisclass => thisclass._id === id);
  
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut enrolclass={enrolclass}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;