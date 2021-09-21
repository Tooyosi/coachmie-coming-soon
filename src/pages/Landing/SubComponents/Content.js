import React, {useState} from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import CustomModal from '../../../components/common/CustomModal'

export default function Content() {
    const [state, setState] = useState({
        showModal: false,
        email: ''
    })

    const toggleModal = ()=>{
        setState({
            ...state, showModal: !state.showModal, email: ''
        })
    }

    const handleChange = ({target: {name, value}})=>{
        setState({
            ...state, [name]: value
        })
    }
    return (
        <div className="content d-flex align-items-center">
        <Container>
            <Row>
                <Col md="4">
                    <h3 className="text-primary mt-4 font-weight-bolder mb-0">Coming  Soon!</h3>
                    {/* <hr className="mb-4" /> */}
                    <span className="underline mb-4 mt-1"></span>

                    <h1 className="font-weight-bolder">Launch Your Idea, <br /> Find Great Talents</h1>
                    <p className="mt-4 mb-2">
                        Tired of holding back on that start up idea due to low funds in finding great talents? <br />

                    </p>
                    <p className="mb-4 mt-2">
                    Use <span className="text-primary">ProInnovate</span> to get top notch talents and your ideas out to the world.

                    </p>
                    <h6 className="font-weight-bolder">Be the first to know when we launch.</h6>
                    <div className="email-div my-3">
                        <input 
                            type="email" 
                            required 
                            onChange={handleChange} 
                            value={state.email} 
                            name="email"
                            placeholder="Enter Email Address" 
                            className="p-2" />
                        <Button color="primary" className="ml-auto px-2" onClick={toggleModal}>Join Waitlist</Button>
                    </div>
                </Col>
                <Col md={{size: "6", offset: "2"}} className="d-md-block d-none text-center">
                    <img src={require('../../../assets/images/svgs/SideImage.svg').default} width="450"/>
                </Col>
            </Row>
        </Container>

        <CustomModal
            modal={state.showModal}
            toggle={toggleModal}
            classProp="modal-md"
        >
            <div className="text-center py-5">
            <img src={require('../../../assets/images/svgs/Success.svg').default}/>
                <p className="my-3">
                Thank you for signing up, you have been added to the waitlist!
We cannot wait to begin this <span className="text-primary">innovation</span> with you!
                </p>
            </div>
        </CustomModal>
        </div>
    )
}
