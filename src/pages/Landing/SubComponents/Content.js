import React, { useCallback, useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { PopupButton } from '@typeform/embed-react'

export const EarlyAccess = () => <a href='https://forms.gle/kWwpXsQM2qXKTg3b9' target="_blank" rel="noreferrer" className="btn btn-primary font-weight-bold text-dark">Get Early Access</a>
// export const EarlyAccess = () => (<PopupButton id="ysdQsN5B" className="btn btn-primary font-weight-bold">Get Early Access</PopupButton>)

const tabs = [{ icon: "learn", text: "Learn" }, { icon: "teach", text: "Teach or Consult" }]
const colorsArray = ["black", "orange", "blue", "green", "purple"];
export default function Content() {
    const [state, setState] = useState({
        showModal: false,
        email: '',
        loading: false
    })

    const [activeTab, setActiveTab] = useState(tabs[0].icon);
    const ref = useRef();


    const [color, setColor] = useState(colorsArray[0])

    const changeColor = useCallback(()=>{
        let colorIndex = colorsArray.indexOf(color)
        if(colorIndex >= colorsArray.length || colorIndex < 0 ){
            colorIndex = 0;
        }else {
            colorIndex += 1;
        }
        setColor(colorsArray[colorIndex])
    }, [color]) 

    useEffect(() => {
        const interval = setInterval(()=>changeColor(), 1500);
    
        return () => clearInterval(interval);
      }, [changeColor]);

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
                    <Col lg="5" md="4" className='d-none d-md-block'>
                        <p className='color-text text-left text-md-right'>Introducing expert-led learning platform that's  assisted with <span className='main-color' style={{color: color}}>AI</span> - <br /> for tech, products & research</p> 
                        <marquee>Learning Specializations: Cloud Engineering, Web & Blockchain Engineering, Product Design, Product Management, Site Reliability & DevOps Engineering, Privacy and Security Engineering, AI, Machine Learning and Data Engineering, Tech Research.</marquee>
                    </Col>
                    <Col lg="5" md="4" className='d-block d-md-none mt-3'>
                        <p className='color-text text-left text-md-right'>Introducing expert-led learning platform that's assisted with <span className='main-color' style={{color: color}}>AI</span> - for tech, products & research</p> 
                        <marquee>Learning Specializations: Cloud Engineering, Web & Blockchain Engineering, Product Design, Product Management, Site Reliability & DevOps Engineering, Privacy and Security Engineering, AI, Machine Learning and Data Engineering, Tech Research.</marquee>
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
