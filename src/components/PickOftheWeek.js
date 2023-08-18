import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const PickOftheWeek = () => {
  return (
    <section id='musttry' className='my-3'>
        <div className="text-center my-5 py-3">
            <h2 className='display-5 text-danger'> <i class="bi bi-search-heart"></i> Pick of the week</h2>
        </div>

        <Container>
            <Row className='align-items-center'>
                 <Col md={7} >
                    <Image src={require('../assets/Pizza4.jpg')} fluid={true} alt='Pizza Image'></Image>
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                    <h2 className="h1">Double cheese fajita</h2>
                    <p className='lead text-muted'>Lorem ipsum, dolor sit amet consectetur!</p>
                    <Button variant='danger'> <i class="bi bi-basket"></i> Order Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PickOftheWeek