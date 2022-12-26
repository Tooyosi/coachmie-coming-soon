import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const TopComponent = () => {
    return (
        <div className='top'>
            <Container className='d-md-flex d-block align-items-center'>
                <Row>
                    <Col md="10" className='mx-auto text-center'>
                        <h1 className='text-black font-weight-bold mb-5 pb-0 pb-md-5'>
                        Our mission is to increase the GDP of the internet in tech and research.
                        {/* Our mission is to increase the GDP of Africa by developing its human and economic <br /> potentials – through tech and research <br /> skilling */}
                        </h1>
                        <p className='mt-5 text-muted pt-0 pt-md-5'>
                        {/* Coachmie is a technological company that is building an internet learning infrastructure for Africa. The infrastructure allows African learners –particularly Generation Z – to learn and build tech and research skills by learning from African tech experts across the world in order to get into tech, build tech products (and start-ups) and conduct cutting-edge researches – locally or abroad. */}
                        {/* Coachmie is a technology company that is building an internet learning infrastructure for Africans and people of color at different career stages. The infrastructure allows them to learn and build tech and research skills by learning from tech experts globally either 1:1 or in groups in order to get into tech careers, build tech products and conduct cutting-edge tech researches – anywhere. */}
                        Coachmie is a technology company that builds infrastructure for the internet community. Learners at different career stages use our infrastructure to schedule and make payments for sessions with experts online in order to get into tech, build tech products and conduct research anywhere. Coachmie is registered in the United States, United Kingdom and Nigeria.




                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopComponent