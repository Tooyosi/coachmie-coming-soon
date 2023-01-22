import React, { useState } from 'react'
import { Col, Container, Row, Collapse } from 'reactstrap'
import Icofont from 'react-icofont';

const GuidingAccordion = () => {
    const [collapse, setCollapse] = useState(false);
    const [activeState, setActiveState] = useState("0")
    const toggle = (param) => {
        setCollapse(!collapse)
        setActiveState(param === activeState ? "" : param)
    };

    let questionsArr = [
        {
            question: 'Demand the highest standards & outputs',
            answer: `We hold one another accountable for stellar interactions, 
            dealings and executions. We hire for demonstrated 
            potential, aptitude and outstanding character. We deliver
            fast but exceptionally`,
            state: "1"
        }, {
            question: 'Show obsession for the success of the community',
            answer: `Experts, learners & partners. We exist to serve the community stakeholders satisfactorily. We design and build with the community in mind – innovating for them`,
            state: "2"
        }, {
            question: 'Develop a growth mindset',
            answer: `We are always looking for opportunities to learn. We experiment often. We are intentional about learning and research`,
            state: "3"
        }, {
            question: 'Be human',
            answer: `At Coachmie, we believe that it’s human to be kind, empathetic, respectful, helpful, and generous. We expect these and even more. We also believe that success means rallying to get things done. Success is never a solo effort; it's a community initiative`,
            state: "4"
        }
    ]

    return (
        <div id="guiding">
            <Container>
                <Row>
                    <Col md="12" className="text-center mb-5">
                        <h1 className='header-text'>
                            Guiding Culture
                        </h1>
                    </Col>
                    <Col md="8" className='mx-auto'>
                        {questionsArr.map((item, i) => (
                            <div className={`card mb-0 ${i === 0 && "first-card"} ${i === (questionsArr.length - 1) && "last-card"}`} key={i}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center cursor-pointer my-3" onClick={() => toggle(item.state)}>
                                        <h5 className="mb-0">{item.question}</h5>

                                        {/* <i className="fal fa-abacus faq-icon"></i> */}
                                        <Icofont icon={`simple-${activeState === item.state? "up":"down"}`} className={`ml-auto cursor-pointer`} />
                                    </div>
                                    <Collapse
                                        isOpen={activeState === item.state}
                                    >
                                        <span className="text-muted small">{item.answer}</span>
                                    </Collapse>
                                </div>

                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const PotentialComponent = () => {
    return (
        <div className='potential text-fontGrey'>
            <Container>
                <Row>
                    {/* <Col sm="12">
                        <h1 className='text-center font-weight-bolder mb-3'>
                            The potential of building Africa’s human capital
                        </h1>
                        <p className='font-weight-light'>
                            Africa accounts for only about 3% of the global GDP (0.4% of global high-tech exports and 0.5% of patent applications with about 0.3% of global R{"&"}D spending) even with its growing population. Africa has about 18% of the world’s population (and this is estimated to grow to about 26% by 2050 according to the United Nations) and 60% of its population falls under the age of 25. In fact, the median age of most African countries is below 20. This presents a <b> responsibility</b> and an <b>opportunity</b>. <br /> <br />

                            Lack of supporting infrastructure, weak collaboration between the industry and academia, and inadequate investment in its human capital are limiting the economic impacts of Africa. <br /> <br />

                            Addressing these constraints by developing a collaborative community and infrastructure will fundamentally increase the economic output of Africans locally and globally. According to a report by the International Finance Corporation (IFC) World Bank Group tagged <b>“Digital Skills in Sub-Saharan Africa”,</b> closing the digital skills gap presents about $130B investment opportunity to the economy and about 650 million learning opportunities across several learning models including business-to-consumer models for intermediate and advanced skills. Also, the African Development Bank (AfDB) projects that investment in tech start-ups and e-commerce could increase the continent’s GDP by $600B in the coming years. This is our <b>why</b>.




                        </p>
                    </Col> */}
                    {/* <Col sm="12" className='my-5'>
                        <img src={require('../../../assets/images/svgs/percentage-graph.svg').default} className="img-fluid my-5" alt="data" />
                    </Col> */}
                    <Col sm="12" className='mt-5 d-none'>
                        <h1 className='text-center mb-3 header-text'>
                            The Community-Driven Stack
                        </h1>
                        <p className='font-weight-light'>
                        Coachmie’s infrastructure leverages a simple  consumer model for curating economic sessions

                        </p>
                    </Col>
                    <Col sm="12" className='mt-5  d-none'>
                        <img src={require('../../../assets/images/svgs/community.svg').default} className="img-fluid" alt="data" />
                    </Col>
                    {/* <Col sm="12" className='d-none'>
                        <h1 className='mb-3 header-text'>

                            Guiding Culture
                        </h1>
                        <h4>Demand the highest standards {'&'} outputs:</h4>
                        <p className='font-weight-light'>We hold one another accountable for stellar interactions, dealings and executions. We hire for demonstrated potential, aptitude and outstanding character. We deliver fast but exceptionally</p>

                        <h4>Show obsession for the success of the community:</h4>
                        <p className='font-weight-light'>                        Experts, learners {"&"} partners. We exist to serve the community stakeholders satisfactorily. We design and build with the community in mind – innovating for them</p>

                        <h4>Develop a growth mindset:</h4>
                        <p className='font-weight-light'>We are always looking for opportunities to learn. We experiment often. We are intentional about learning and research</p>

                        <h4>Be human:</h4>
                        <p className='font-weight-light'>At Coachmie, we believe that it’s human to be kind, empathetic, respectful, helpful, and generous. We expect these and even more. We also believe that success means rallying to get things done. Success is never a solo effort; it's a community initiative
                        </p>
                    </Col> */}
                </Row>
                <Row>
                    <Col lg="8" md="10" className='mx-auto'>
                        <GuidingAccordion />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PotentialComponent