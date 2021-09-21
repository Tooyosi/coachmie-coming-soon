import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Navbar, } from 'reactstrap'
import Logo from './Logo'

function Footer() {
    return (
        <Navbar >
            <div className="container">
                <div>
                    <p className="small">Visit our social media pages:
                        <a className="mx-3" href>
                            <img src={require('../../assets/images/svgs/linkedin.svg').default} width="20" />
                        </a>
                        <a href>
                            <img src={require('../../assets/images/svgs/facebook.svg').default} width="20" />
                        </a>
                        <a className="mx-3" href>
                            <img src={require('../../assets/images/svgs/twitter.svg').default} width="20" />
                        </a>

                    </p>
                </div>
                <div className="ml-md-auto">
                    <p className="small">Copyright &copy; 2021 ProDevs.io. All Rights Reserved</p>

                </div>
            </div>
        </Navbar >
    )
}

export default Footer
