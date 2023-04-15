import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Navbar, } from 'reactstrap'
import Logo from './Logo'

function Footer() {
    return (
        <footer className='px-0 pb-2 mt-4'>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md="3" className='my-2'>
                        <div className="d-md-inline-flex d-flex justify-content-center align-items-top">
                            {[{
                                route: "About Us",
                                link: `/about`,
                            }, {
                                route: "Privacy",
                                // link: `http://experts.coachmie.com/privacy`
                                link: `/privacy`
                            }].map((linkObj) => (
                                <p key={linkObj.route} className="align-items-center justify-content-center mb-0 small">
                                    <a className="mx-2 text-muted d-flex align-items-center" href={linkObj.link} key={linkObj.link}>
                                        {linkObj.route}
                                    </a>

                                </p>
                            ))}
                        </div>
                    </Col>
                    <Col md="6" className='text-center my-2'>
                        <a href="mailto:contacts@coachmie.com" className='text-muted'>
                            {/* <img src={require(`assets/images/svg/icons/ic_mail.svg`).default} width="30" alt="mail" /> */}
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>
                        {[{
                            image: "linkedin",
                            link: 'https://www.linkedin.com/company/coachmie-limited',
                            className: "fab fa-linkedin-in"
                        }
                        // , {
                        //     image: "twitter",
                        //     link: 'https://twitter.com/coachmie_',
                        //     className: "fab fa-twitter"
                        // }, {
                        //     image: "instagram",
                        //     link: 'https://www.instagram.com/coachmie_/',
                        //     className: "fab fa-instagram"
                        // }
                        ].map((linkObj) => (
                            <a className="ml-1 text-muted" target="_blank" rel="noreferrer" href={linkObj.link} key={linkObj.link}>
                                <i className={linkObj.className} aria-hidden="true"></i>
                                {/* <img src={require(`assets/images/svg/icons/ic-${linkObj.image}.svg`)} width="30" alt={linkObj.image} /> */}
                            </a>
                        ))}
                    </Col>

                    <Col md="3" className='text-center my-2 text-md-right'>
                        <p className='mb-0 pb-0 text-muted cursor-pointer' onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}>Coachmie, Inc</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
