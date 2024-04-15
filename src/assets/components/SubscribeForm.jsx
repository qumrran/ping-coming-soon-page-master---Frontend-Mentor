import logo from '../images/logo.svg';
import React, { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log('Sent subscription to:', email);
            setEmail('');
            setSubmittedEmail(email);
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <>
            <div className='flex flex-col items-center'>
                <img src={logo} alt='company logo' className='w-20 mb-6' />
                <h2 className='text-2xl text-custom-gray mb-2 text-center'>
                    We are launching{' '}
                    <span className='font-bold text-custom-very-dark-blue'>soon!</span>
                </h2>
            </div>
            <form
                className='flex flex-col items-center w-11/12  sm:items-center'
                onSubmit={handleSubmit}
            >
                <label className='flex flex-col text-l items-center w-full text-center'>
                    Subscribe and get notified
                </label>
                <div className='w-full sm:flex'>
                    <div className='w-full text-center'>
                        <input
                            className={`border-2 rounded-full border-text-custom-gray mt-6 h-10 w-full sm:basis-2/3 px-6 ${
                                !isValidEmail ? 'border-red-500' : '' 
                            }`}
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {!isValidEmail && (
                            <span className='alert italic text-xs text-custom-secondary-light-red'>
                                Please provide a valid email address
                            </span>
                        )}
                    </div>

                    <button
                        className='rounded-full bg-custom-blue text-white mt-6 h-10 w-full font-semibold shadow-xl  hover:bg-blue-700 duration-300 sm:basis-1/3 sm:ml-4'
                        type='submit'
                    >
                        Notify Me
                    </button>
                </div>
            </form>
        </>
    );
};

export default SubscribeForm;
