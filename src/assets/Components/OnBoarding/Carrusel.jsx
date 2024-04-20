import React from 'react'
import OnBoardingOne from './OnBoardingOne'
import OnBoardingTwo from './OnBoardingTwo'
import OnBoardingThree from './OnBoardingThree'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '/public/images/Guide/img1.png'
import img2 from '/public/images/Guide/img2.png'
import img3 from '/public/images/Guide/img3.png'
import Menu from '../../Pages/Menu/Menu';


export default function Carrusel() {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    /> */}
                    <OnBoardingOne />
                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    /> */}
                    <OnBoardingTwo />
                    <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    /> */}
                    <OnBoardingThree />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
