import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './DemoCarousel.css';

export default function DemoCarousel() {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Instagram.jpg?w=1740&ssl=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Facebook.jpg?w=1740&ssl=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Twitter.jpg?w=1740&ssl=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
//npm install react-scripts
//npm install react-bootstrap -s
//npm i web-vitals --save-dev