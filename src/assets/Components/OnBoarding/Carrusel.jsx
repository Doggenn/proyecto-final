import React from 'react'
import OnBoardingOne from './OnBoardingOne'
import OnBoardingTwo from './OnBoardingTwo'
import OnBoardingThree from './OnBoardingThree'
import Carousel from 'react-bootstrap/Carousel';

export default function Carrusel() {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <OnBoardingOne />
                </Carousel.Item>
                <Carousel.Item>
                    <OnBoardingTwo />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <OnBoardingThree />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
