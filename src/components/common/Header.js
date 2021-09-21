import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = (param) => setIsDropdown(param || !isDropdown);

    const getActiveClassName = (url) => {
        if (`${window.location.pathname}${window.location.hash}` == url) {
            return "active"
        } else {
            return ''
        }
    }

    const changeNavActive = (param)=>{
        // console.log(param)

    }

    window.addEventListener("scroll", changeNavActive)
    return (
        <Navbar color="white" light expand="md">
            <Container>
                <Link className="nav-brand" to="/">
                    <Logo style={{ height: "50px" }} />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className={`${getActiveClassName('/')}`}>
                            <Link className="nav-link" to="/">About Us</Link>
                        </NavItem>
                        <NavItem className={`${getActiveClassName('/#trackrecord')}`}>
                            <NavLink  href="/#trackrecord">Explore</NavLink>
                        </NavItem>
                        <NavItem className={`${getActiveClassName('/contact')}`}>
                            <a className="nav-link" href="/contact">Contact</a>
                        </NavItem>
                        <NavItem className={`${getActiveClassName('/blog')}`}>
                            <a className="nav-link" href={`${process.env.REACT_APP_BASE_URL}`} target="blank">Blog</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;