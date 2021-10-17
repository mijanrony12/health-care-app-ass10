import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
                <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/G76jp43/prime1.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 className="text-info">this is first campus</h3>
                                    <p>Our business was start here. we are growing from here.it's our love</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/X5wq6wH/prime2.jpg"
                                    alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    <h3 className="text-info">Our internal intorior design</h3>
                                    <p >this is best design at noakhali in bangladesh..it is very expensive</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/8BkC41r/prime3.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3 className="text-info">Our new unit Building</h3>
                                    <p>this is most expensive campus in bangladesh. total invest 12 crore</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                    </Carousel>
            </div>
    );
};

export default Banner;