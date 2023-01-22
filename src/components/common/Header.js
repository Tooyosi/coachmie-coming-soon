import React, { useState } from 'react';
import {
    // Collapse,
    Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavItem,
    // NavLink,
    // Dropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    Container,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"
import { EarlyAccess } from '../../pages/Landing/SubComponents/Content';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isDropdown, setIsDropdown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // const toggleDropdown = (param) => setIsDropdown(param || !isDropdown);

    // const getActiveClassName = (url) => {
    //     if (`${window.location.pathname}${window.location.hash}` == url) {
    //         return "active"
    //     } else {
    //         return ''
    //     }
    // }

    // const changeNavActive = (param)=>{
    //     // console.log(param)

    // }

    // window.addEventListener("scroll", changeNavActive)
    return (
        <Navbar color="white" light expand="md" fixed="top">
            <Container fluid>
                <Link className="nav-brand" to="/">
                    <Logo style={{ height: "30px" }} />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-4 text-center" navbar>
                        <NavItem>
                            <NavLink className="nav-link text-primary-blue" href="/about">About Us</NavLink>
                        </NavItem>
                        <NavItem className='mx-0'>
                            <EarlyAccess />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;