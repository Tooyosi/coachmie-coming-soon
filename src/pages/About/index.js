import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import { BoardMembers } from './SubComponents/BoardMembers'
import PotentialComponent from './SubComponents/PotentialComponent'
import TopComponent from './SubComponents/TopComponent'

const About = () => {
    return (
        <>
            <Header />
            <div id='about'>
                <TopComponent />
                <BoardMembers />
                <PotentialComponent />
                {/* <ContactComponent /> */}
            </div>
            <Footer />
        </>
    )
}

export default About