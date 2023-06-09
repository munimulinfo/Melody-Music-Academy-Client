import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
//TODO: ai kajta baki ase
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    return (
        <div>

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;