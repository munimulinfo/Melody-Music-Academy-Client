import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
    
        if(error){
            console.log('eror message', error);
            setCardError(error.message);
        }else{
            console.log('paymentMethod', paymentMethod)
            setCardError('');
        }
    }
    return (
        <div>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm mt-4" type="submit" >
                    Pay
                </button>
            </form>
            {/* disabled={!stripe || !clientSecret || processing} */}
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </div>
    );
};

export default CheckOut;