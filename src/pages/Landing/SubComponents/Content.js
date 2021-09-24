import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import CustomModal from '../../../components/common/CustomModal'
import axios from "axios"
import { toast } from 'react-toastify'
export default function Content() {
    const [state, setState] = useState({
        showModal: false,
        email: '',
        loading: false
    })

    const toggleModal = () => {
        setState({
            ...state, showModal: !state.showModal, email: '', loading: false
        })
    }

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state, [name]: value
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        try {
            setState({
                ...state, loading: true
            })
            let { data } = await axios.get(`https://app.prodevs.io/api/join/proInnovate/waitinglist?email=${state.email}`)
            toggleModal()
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occured, please try again")
        }
    }
    return (
        <div className="content d-flex align-items-center mt-md-1 mt-sm-5">
            <Container>
                <Row>
                    <Col md="5">
                        <h3 className="text-primary mt-5 font-weight-bolder mb-0">Coming  Soon!</h3>
                        {/* <hr className="mb-4" /> */}
                        <span className="underline mb-4 mt-1"></span>

                        <h1 className="font-weight-bolder">Launch Your Idea,  Build smartly. Scale Quickly.</h1>
                        <p className="mt-4 mb-2">
                            Do you have an awesome idea but you are unsure of how to bring it to life? Are you lacking the skills and know-how to take it to the next level? <br />

                        </p>
                        <p className="mb-1 mt-2">
                            <span className="text-primary">ProInnovate</span> is the solution you have been looking for!

                        </p>
                        <p className="mb-4 mt-0">
                            Have a team of skilled developers ideate your idea and get skilled tech talents to work on bringing it to life. All within an affordable budget!
                        </p>
                        <h6 className="font-weight-bolder">Be the first to know when <span className="text-primary">ProInnovate</span> is launched.</h6>
                        <form className="email-div mt-3 mb-5 mb-md-3" onSubmit={submit}>
                            <input
                                type="email"
                                onChange={handleChange}
                                value={state.email}
                                name="email"
                                required={true}
                                placeholder="Enter Email Address"
                                className="p-2" />
                            <Button color="primary" disabled={state.loading} type="submit" role="submit" className="ml-auto px-2" >{state.loading ? "Requesting..." : "Join Waitlist"}</Button>
                        </form>
                    </Col>
                    <Col md={{ size: "6", offset: "1" }} className="d-flex align-items-center justify-content-center">
                        <img alt="side" src={require('../../../assets/images/svgs/SideImage.svg').default} style={{ maxWidth: 450 }} className="w-100" />
                    </Col>
                </Row>
            </Container>

            <CustomModal
                modal={state.showModal}
                toggle={toggleModal}
                classProp="modal-md"
            >
                <div className="text-center py-5">
                    <img src={require('../../../assets/images/svgs/Success.svg').default} />
                    <p className="my-3">
                        Thank you for signing up, you have been added to the waitlist!
                        We cannot wait to begin this <span className="text-primary">innovation</span> with you!
                    </p>
                </div>
            </CustomModal>
        </div>
    )
}
