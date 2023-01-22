import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import CustomModal from '../../../components/common/CustomModal'
import axios from "axios"
import { toast } from 'react-toastify'
import { Widget } from '@typeform/embed-react'
import { PopupButton } from '@typeform/embed-react'

// export const EarlyAccess = () => <a href='https://forms.gle/ANagxA5EGGVCGp899' target="_blank" rel="noreferrer" className="btn btn-primary">Get Early Access</a>
export const EarlyAccess = () => (<PopupButton id="ysdQsN5B" className="btn btn-primary font-weight-bold">Get Early Access</PopupButton>)

const tabs = [{ icon: "learn", text: "Learn" }, { icon: "teach", text: "Teach or Consult" }]
export default function Content() {
    const [state, setState] = useState({
        showModal: false,
        email: '',
        loading: false
    })

    const [activeTab, setActiveTab] = useState(tabs[0].icon);

    return (
        <div className="content d-flex align-items-center  mx-0 mx-md-4">
            <Container fluid>
                <Row className='top-background'>
                    <Col lg="7" md="8">
                        <div className='ml-md-5 ml-0 card'>
                            <div className='card-header d-flex align-items-center justify-content-around p-0'>
                                {tabs.map((tab) => (
                                    <div key={tab.text} className={`text-center inner-card ${activeTab === tab.icon && "active"}`} onClick={() => setActiveTab(tab.icon)}>
                                        <div className='wrapper py-3 '>
                                            <img src={require(`../Icons/${tab.icon}.svg`).default} alt="" width={40} className="mb-3" />
                                            <p className='m-0'>{tab.text}</p>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            <div className='card-body'>
                                {activeTab === "learn" ? <>
                                    <h1 className='main-text my-4'>
                                        Learn Tech. <br />
                                        Build Products.<br />
                                        Lead Research.
                                    </h1>
                                    <p className="mb-2 text-muted">
                                    Coworking with <b>experts</b> around the world, <b>1:1</b> or in <b>groups</b>. Request an early access and we’ll keep you posted when we launch🚀
                                    </p>
                                </> : <>
                                    <h1 className='main-text my-4'>
                                        Market Skill.
                                        <br />
                                        Host Sessions.
                                        <br />
                                        Get Paid.
                                    </h1>
                                    <p className="mb-2 text-muted">
                                    Helping <b>learners</b> get into <b>tech & research</b>, and create inventions. Request an early access and we’ll keep you posted when we launch🚀
                                    </p>
                                </>}
                                <EarlyAccess />

                            </div>
                        </div>
                    </Col>
                    <Col md="7" className='mx-auto d-none text-center'>
                        <div >
                            <h1 className="font-weight-bolder mb-2 main-text">Get into <span className='text-primary'> tech</span> and <span className='text-primary'>research</span> with experts,<i> fast</i> </h1>
                            <p className="mb-2 text-muted">
                                Hey👋, we are building a community where experts and learners can cowork, 1:1 or in groups. Request an early access and we'll keep you posted when we launch🚀
                            </p>

                            <EarlyAccess />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
