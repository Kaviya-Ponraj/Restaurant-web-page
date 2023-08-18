import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Container >
        <Row className='justify-content-center align-items-center'>
            <Col lg ={8}>
                <Carousel>
                    <Carousel.Item >
                        <img
                        className='d-block w-100'
                        src={require('../assets/Pizza1.jpg')} 
                        alt='pizza image'/>
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className='d-block w-100'
                        src={require('../assets/Pizza4.jpg')}
                        alt='pizza image' />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className='d-block w-100'
                        src={require('../assets/Pizza3.jpg')} 
                        alt='pizza image' />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <div className="text-center mt-3">
        <h2 className='display-5 '>Pizza's for every occasion</h2>
        <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </Container>
  )
}

export default Banner