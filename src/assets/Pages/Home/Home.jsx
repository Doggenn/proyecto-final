// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Novedades from '../../Components/Novedades/Novedades'
import OnBoardingFour from '../../Components/OnBoarding/OnBoardingFour';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    }, [

    ])
    return (
        <div>
            {loading ? (<OnBoardingFour></OnBoardingFour>) : (
                <div>
                    <Novedades></Novedades>
                </div>
            )

            }
        </div >
    )
}
